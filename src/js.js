'use strict'

let nameTimer 
let fig = document.getElementById("file-input")

function triggerFileInput() {
  let fileInput = document.getElementById("file-input")
  fileInput.click()
  nameTimer = setInterval(displayFileName, 300)
}

function displayFileName() {
  let fileInput = document.getElementById("file-input")
  if (fileInput.value != '') {
    let upload = document.createElement('li')
    upload.innerHTML = fileInput.value.replace(/C:\\fakepath\\/,'')
    upload.classList.add('filename')
    document.getElementById('file-list').appendChild(upload) 
    window.clearTimeout(nameTimer)
    console.log(upload.innerHTML.slice(-3))
    if (upload.innerHTML.slice(-3) != 'csv') {
      console.log(`no`)
      let warning = document.createElement('span')
      warning.innerHTML = `Only .csv allowed`
      warning.classList.add('warning')
      warning.classList.add('csv-warning')
      upload.appendChild(warning) 
    }
  }
}

document.getElementById("add-files").addEventListener("click", triggerFileInput);

