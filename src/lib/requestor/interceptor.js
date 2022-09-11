export class RequestInterceptor {
  static requestInterceptors = []
  static responseInterceptors = []

  static register (interceptor, type = 'request') {
    if (type === 'request') {
      this.requestInterceptors.concat(interceptor)
    } else {
      this.responseInterceptors.concat(interceptor)
    }
  }

  static getRequestInterceptors () {
    return this.requestInterceptors
  }

  static getResponseInterceptors () {
    return this.responseInterceptors
  }

  static resetRequestInterceptors () {
    this.requestInterceptors = []
  }

  static resetResponseInterceptors () {
    this.responseInterceptors = []
  }
}
