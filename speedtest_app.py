from flask import Flask, jsonify
import speedtest

app = Flask(__name__)

@app.route('/')
def index():
    return open('index.html').read()

@app.route('/speedtest')
def speed_test():
    st = speedtest.Speedtest()
    download_speed = st.download() / 1024 / 1024  # Convert to Mbps
    upload_speed = st.upload() / 1024 / 1024  # Convert to Mbps
    return jsonify({'downloadSpeed': download_speed, 'uploadSpeed': upload_speed})

if __name__ == "__main__":
    app.run(debug=True)
