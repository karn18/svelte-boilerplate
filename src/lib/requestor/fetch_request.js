import axios from 'axios'
import axiosRetry from 'axios-retry'
import { FetchResponse } from './fetch_response.js'

const MAX_RETIRES = 3
const MAX_TIMEOUT = 30000
export const MULTIPART_FORM_DATA = 'multipart/form-data'
export const APPLICATION_JSON = 'application/json'

axiosRetry(axios, {
  retries: MAX_RETIRES,
  retryDelay: (retryCount) => (retryCount * 1000)
})

export class FetchRequest {
  constructor (method, url, data = {}, options = {}) {
    this.method = method
    this.url = url
    this.data = data
    this.contentType = APPLICATION_JSON
    this.responseType = 'json'

    if (Object.prototype.hasOwnProperty.call(options, 'contentType')) {
      this.contentType = options.contentType
    }

    if (this.contentType === MULTIPART_FORM_DATA) {
      this.contentType = MULTIPART_FORM_DATA
      const formData = new FormData()
      data.forEach(p => {
        formData.append(p, data[p])
      })
      this.data = formData
    }

    this.instance = axios.create(Object.assign({
      timeout: this.timeout,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': this.contentType
      },
      withCredentials: true,
      mode: 'no-cors',
      responseType: this.responseType
    }, options))
  }

  async perform () {
    return new FetchResponse(await this.request())
  }

  request () {
    return new Promise((resolve) => {
      this.instance[this.method].call(this, this.url, this.data)
        .then(response => resolve(response))
        .catch(error => resolve(error.response))
    })
  }

  get timeout () {
    return MAX_TIMEOUT
  }
}
