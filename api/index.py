from flask import Flask, request

app = Flask(__name__)

@app.route("/api")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/query", methods=["POST"])
def query():
    return f"received a query for: { request.get_json() }"