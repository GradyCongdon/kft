'use strict'

let nameTimer = false

function triggerFileInput() {
  let fileInput = document.getElementById("file-input")
  fileInput.click()
  nameTimer = setTimeout('displayFileName', 800)
}

function displayFileName() {
  let fileInput = document.getElementById("file-input")
  while (fileInput.value != undefined) {
    let upload = document.createElement('li')
    upload.innerHTML = fileInput.value
    document.getElementById('files-list').appendChild(upload) 
    window.clearTimeout(nameTimer)
  }
}
document.getElementById("add-files").addEventListener("click", triggerFileInput);

