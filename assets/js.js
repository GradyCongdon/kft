'use strict';

function triggerFileInput() {
  var fileInput = document.getElementById("file-input");
  console.log("buttmunch");
  fileInput.click();
}

function displayFileName() {
  var fileInput = document.getElementById("file-input");
  var upload = document.createElement('li');
  upload.innerHTML = fileInput.value;
  document.getElementById('files-list').appendChild(upload);
}
document.getElementById("add-files").addEventListener("click", triggerFileInput);