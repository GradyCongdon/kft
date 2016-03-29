import os
from flask import Flask, url_for, render_template, request, redirect
from werkzeug import secure_filename

UPLOAD_FOLDER = '/home/ec2-user/www/printer/uploads/'
ALLOWED_EXTENSIONS = set(['csv'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def hello():
    return "heyyyyy"

@app.route('/user/<name>')
def greet(name):
    return render_template('greet.html', name=name)

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        file = request.files['files']
        if file and allowed_file(file.filename):
            filename =  secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('parsed_log', filename=filename))
    else:
        return render_template('upload.html')

@app.route('/logs/<filename>')
def parsed_log(filename):
    return "good job"

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

if __name__ == "__main__":
    app.run(debug=True)

