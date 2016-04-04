'use strict';

var nameTimer = void 0;

function triggerFileInput() {
  var fileInput = document.getElementById("file-input");
  fileInput.click();
  nameTimer = setInterval(displayFileName, 500);
}

function displayFileName() {
  var fileInput = document.getElementById("file-input");
  if (fileInput.value != '') {
    var upload = document.createElement('li');
    upload.innerHTML = fileInput.value;
    document.getElementById('file-list').appendChild(upload);
    window.clearTimeout(nameTimer);
  }
}

function fig() {
  return document.getElementById("file-input");
}
document.getElementById("add-files").addEventListener("click", triggerFileInput);