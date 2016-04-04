
function triggerFileInput() {
  let fileInput = document.getElementById("file-input")
  fileInput.click()
}

function displayFileName() {
  let fileInput = document.getElementById("file-input")
  let upload = document.createElement('li')
  upload.innerHTML = fileInput.value
  document.getElementById('files-list').appendChild(upload) 
}
