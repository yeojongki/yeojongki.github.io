function _parseParam(obj) {
  return Object.keys(obj)
    .map(k => `${k}=${encodeURIComponent(obj[k])}`)
    .join('&')
    .slice(0, -1)
}

function ajax({
  method = 'GET',
  url,
  data,
  success,
  fail,
  timeout,
  onTimeout,
  async = true,
  headers,
  withCredentials,
  responseType,
  onDownloadProgress,
  onUploadProgress,
  auth,
  params // for get params
}) {
  const xhr = new XMLHttpRequest()

  // UpperCase method
  method = method.toUpperCase()

  // HTTP basic authentication
  if (auth) {
    const username = auth.username || ''
    const password = auth.password || ''
    requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password)
  }

  // set the xhr timeout in MS
  xhr.timeout = timeout

  // parse param & add to url if needed
  if (params && method === 'GET') {
    url = `${url}?${_parseParam(params)}`
  }

  xhr.open(method, url, async)

  xhr.onreadystatechange = function() {
    // The xhr errored out and we didn't get a response, this will be
    // handled by onerror instead
    // With one exception: xhr that using file: protocol, most browsers
    // will return status as 0 even though it's a successful xhr
    if (xhr.status === 0 && !(xhr.responseURL && xhr.responseURL.indexOf('file:') === 0)) {
      return
    }

    if (this.readyState === 4) {
      if ((this.status >= 200 && this.status < 300) || this.status === 304) {
        typeof success === 'function' && success(this.response)
      } else {
        typeof fail === 'function' && fail(this.response)
      }
    }
  }

  xhr.onerror = function() {
    // Real errors are hidden from us by the browser
    // onerror should only fire if it's a network error
    typeof fail === 'function' && fail('Network Error')
  }

  xhr.ontimeout = function() {
    typeof onTimeout === 'function' && onTimeout(`timeout of  ${xhr.timeout} ms exceeded`)
  }

  // set default header
  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
  }

  // add headers to the xhr
  if (headers && 'setRequestHeader' in xhr) {
    for (const key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key])
      }
    }
  }

  // add withCredentials to xhr if needed
  if (withCredentials) {
    xhr.withCredentials = true
  }

  // add responseType to xhr if needed
  if (responseType) {
    try {
      xhr.responseType = responseType
    } catch (e) {
      // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
      throw e
    }
  }

  // Handle progress if needed
  if (typeof onDownloadProgress === 'function') {
    request.addEventListener('progress', onDownloadProgress)
  }

  // Not all browsers support upload events
  if (typeof onUploadProgress === 'function' && xhr.upload) {
    request.upload.addEventListener('progress', onUploadProgress)
  }

  xhr.send(data)

  return xhr
}

// encodeURI  会保留字符（协议，域名，端口，对参数）等进行编码
// encodeURIComponent 会忽略保留字符，把这些代码当作普通字符编码

// encodeURI(':&=#')            // ":&=#"
// encodeURIComponent(':&=#')   // "%3A%26%3D%23"
