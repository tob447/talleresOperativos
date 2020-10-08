from flask import Flask, request
from flask_restful import Resource, Api
import psutil
from flask_cors import CORS

app= Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

class GetProcesses(Resource):
    def get(self):
        listOfProcesses=list()
        for proc in psutil.process_iter():
            pInfoDict= proc.as_dict(attrs=['name','pid','memory_percent','cpu_percent'])
            listOfProcesses.append(pInfoDict)

        return listOfProcesses , 201 , {'Access-Control-Allow-Origin': '*'} 

class KillProcess(Resource):
    def post(self):
        jresponse=request.get_json()
        return "Process was killed!", 201

api.add_resource(GetProcesses,'/')

if __name__== '__main__':
    app.run(debug=True)