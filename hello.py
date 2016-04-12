import os
from parser import parse
from flask import Flask, url_for, render_template, request, redirect, session, flash
from werkzeug import secure_filename

BASE = os.getcwd()
UPLOAD_FOLDER = BASE+'/uploads/'
PARSED_FOLDER = BASE+'/logs/'
ALLOWED_EXTENSIONS = set(['csv'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['PARSED_FOLDER'] = PARSED_FOLDER
app.secret_key ='\xf0e\x07\nT\x9e\x92\x16uWh\xb1\xb9\x8f\xca\xb0\xe3\xd2@\xef\x1e\x03\xb1M'

@app.route('/hello')
def hello():
    if 'user' in session:
        return "heyyyyy %s" % session['user']
    else:
        return "hi"

@app.route('/user/<name>')
def greet(name):
    session['user'] = name
    return render_template('greet.html', name=name)

@app.route('/', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        file = request.files['files']
        if file and allowed_file(file.filename):
            filename =  secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('parse_log', filename=filename))
        else:
          flash('Upload Error - filetype not allowed')
          return redirect(url_for('upload'))
    else:
        return render_template('upload.html')

@app.route('/stats/<filename>')
def parse_log(filename):
    fin = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    fout = os.path.join(app.config['PARSED_FOLDER'], filename)
    stats = parse(fin, fout)
    return render_template('stats.html', filename=filename, stats=stats)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

if __name__ == "__main__":
    app.run(debug=True)

