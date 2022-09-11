export class FetchResponse {
  constructor (response) {
    this.response = response
  }

  get data () {
    return this.response.data
  }

  get requestUrl () {
    return this.response.requestUrl || ''
  }

  get statusCode () {
    return this.response.status
  }

  get ok () {
    return this.statusCode === 200
  }

  get created () {
    return this.statusCode === 201
  }

  get unauthenticated () {
    return this.statusCode === 401
  }

  get unprocessableEntity () {
    return this.statusCode === 422
  }

  get internalServerError () {
    return this.statusCode === 500
  }
}
