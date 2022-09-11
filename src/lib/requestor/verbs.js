import { FetchRequest } from './fetch_request'

const getAuthorizationHeader = token => {
  return { headers: { Authorization: `Bearer ${token}` } }
}

async function get (url, options) {
  const request = new FetchRequest('get', url, {}, options)
  return request.perform()
}
async function post (url, data, options) {
  const request = new FetchRequest('post', url, data, options)
  return request.perform()
}

async function put (url, data, options) {
  const request = new FetchRequest('put', url, data, options)
  return request.perform()
}

async function patch (url, data, options) {
  const request = new FetchRequest('patch', url, data, options)
  return request.perform()
}

async function destroy (url, options) {
  const request = new FetchRequest('delete', url, options)
  return request.perform()
}

export { get, post, put, patch, destroy, getAuthorizationHeader }
