const $ = q => document.querySelector(q)

const $text = document.createElement('p')
$text.innerText = 'http-cache'
$('body').appendChild($text)
