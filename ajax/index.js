function ajax({ method = 'GET', url, data, success, error, async = true }) {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url, async)
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      success && success(this.response)
    }
  }
  xhr.send(data)
}
