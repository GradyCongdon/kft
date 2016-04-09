'use strict';

var nameTimer = void 0;
var fig = document.getElementById("file-input");

function triggerFileInput() {
  var fileInput = document.getElementById("file-input");
  fileInput.click();
  nameTimer = setInterval(displayFileName, 300);
}

function displayFileName() {
  var fileInput = document.getElementById("file-input");
  if (fileInput.value != '') {
    var upload = document.createElement('li');
    upload.innerHTML = fileInput.value.replace(/C:\\fakepath\\/, '');
    upload.classList.add('filename');
    document.getElementById('file-list').appendChild(upload);
    window.clearTimeout(nameTimer);
    if (upload.innerHTML.slice(-3) != 'csv') {
      var warning = document.createElement('span');
      warning.innerHTML = "Only .csv allowed";
      warning.classList.add('warning');
      warning.classList.add('csv-warning');
      upload.appendChild(warning);
    }
  }
}

document.getElementById("add-files").addEventListener("click", triggerFileInput);