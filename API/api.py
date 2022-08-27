from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin
import classDB

app = Flask(__name__)

ALLOWED_ORIGINS = ['localhost', '127.0.0.1']
cors = CORS(app, resources={"/*": {"origins":ALLOWED_ORIGINS}})

@app.route("/")
def first_endpoint():
    return "<p>First Endpoint</p>"

@app.route("/json-endpoint/")
def json_endpoint():
    dictionary = {"name": "Zwivhuya"}
    return jsonify(dictionary)

@app.route("/Buckets/")
@cross_origin(supports_credentials = True)
def bucket_endpoint():
    Butable = classDB.BucTable
    BucRows = Butable.select("*")
    Buckets = []

    for row in BucRows:
        tmp_Buckets = { 
            "id": row[0],  
            "meat":row[1], 
            "name":row[2],
            "price":row[3],
            }
        Buckets.append(tmp_Buckets)
    

    BuckDictionary = {
        "Buckets": Buckets
    }
    return jsonify(BuckDictionary)


@app.route("/Bucket/<id>")
@cross_origin(supports_credentials=True)
def Bucket_endpoint(id):
    Buctable = classDB.BucTable
    BucRows = Buctable.select("*", "id = "+ id)
    if(len(BucRows)):
        BucketRow = BucRows[0]
        Bucket = {
        "id": BucketRow[0],
        "meat": BucketRow[1],
        "name":BucketRow[2],
        "price": BucketRow[3],
        }
        return jsonify(Bucket)
    else:
        return jsonify({"error":"Bucket not found"})
    
    

@app.route("/Twisters/")
@cross_origin(supports_credentials=True)
def twister_endpoint():
    twitable = classDB.TwiTable
    twiRows = twitable.select("*")
    twister = []

    for row in twiRows:
        tmp_Twister = {
            "id":row[0],
            "name":row[1],
            "price":row[2],
        }
        twister.append(tmp_Twister)
        
    TwiDictionary = {
        "Twisters":twister
    }
    return jsonify(TwiDictionary)

@app.route("/Twister/<id>")
@cross_origin(supports_credentials=True)
def twisters_endpoint(id):
    twitable = classDB.TwiTable
    twiRows = twitable.select("*", "id = "+ id)
    if(len(twiRows)):
        TwisterRow = twiRows[0]
        Twister = {
        "id": TwisterRow[0],
        "name":TwisterRow[1],
        "price": TwisterRow[2],
        }
        return jsonify(Twister)
    else:
        return jsonify({"error":"Twister not found"})
        
    

@app.route("/Treats/")
@cross_origin(supports_credentials=True)
def treat_endpoint():
    tretable = classDB.TreTable
    treRows = tretable.select("*")
    treats = []

    for row in treRows:
        tmp_Treat = {
            "id":row[0],
            "name":row[1],
            "price":row[2],
        }
        treats.append(tmp_Treat)
      
    TreDictionary = {
        "Treats":treats
    }
    return jsonify(TreDictionary)

@app.route("/Treat/<id>")
@cross_origin(supports_credentials=True)
def treats_endpoint(id):
    try:
        tretable = classDB.TreTable

        treRows = tretable.select("*", "id = "+ id)

        if(len(treRows)):
            TreatRow = treRows[0]
            Treat = {
                "id": TreatRow[0],
                "name":TreatRow[1],
                "price": TreatRow[5],
            }
            return jsonify(Treat), 200
        else:
            return jsonify({"error":"Treat not found"}),404
    except:
        return "something went wrong"
            
   
    
   


