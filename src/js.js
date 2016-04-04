'use strict'

let nameTimer 

function triggerFileInput() {
  let fileInput = document.getElementById("file-input")
  fileInput.click()
  nameTimer = setInterval(displayFileName, 500)
}

function displayFileName() {
  let fileInput = document.getElementById("file-input")
  if (fileInput.value != '') {
    let upload = document.createElement('li')
    upload.innerHTML = fileInput.value
    document.getElementById('file-list').appendChild(upload) 
    window.clearTimeout(nameTimer)
  }
}

function fig() {
  return document.getElementById("file-input")
}
document.getElementById("add-files").addEventListener("click", triggerFileInput);

