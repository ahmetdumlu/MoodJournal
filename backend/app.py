from flask import Flask, jsonify, request
import firebase_admin
from firebase_admin import credentials, firestore
import uuid
from CohereClassifier import Classifier

app = Flask(__name__)
# Initialize Firebase Admin
cred = credentials.Certificate('./firebase.json')  # Update this path
firebase_admin.initialize_app(cred)

# Get Firestore database
db = firestore.client()

@app.route('/create_entry', methods=['POST'])
def create_entry():
    text_data = request.get_json()
    input_data = [text_data['entry_text']]
    # Generate a unique ID
    unique_id = str(uuid.uuid4())
     
    classifier = Classifier()
    classifications = classifier.get_response(input_data)


    highest_confidence = 0.0
    highest_label = 'Happy'

    for label in classifications.classifications[0].labels:
        confidence_level = classifications.classifications[0].labels[label].confidence
        confidence_level = classifications.classifications[0].labels[label].confidence
        if confidence_level > highest_confidence:
            highest_confidence = confidence_level
            highest_label = label
    
    
    text_data['label'] = highest_label
    doc_ref = db.collection('journal_entries').document(unique_id)
    text_data['id'] = doc_ref.id
    doc_ref.set(text_data)

    # print('Data received: {}'.format(text_data))

    response = jsonify({'message': 'Entry created', 'id': unique_id})

    return response, 201

@app.route('/get_entry/<entry_id>', methods=['GET'])
def get_entry(entry_id):
    print(f'Retrieving entry with ID: {entry_id}')
    str_entry_id = str(entry_id)
    # Retrieve the document from Firestore

    doc_ref = db.collection('journal_entries').document(str_entry_id)
    doc = doc_ref.get()

    if doc.exists:
        # Document found, return its contents as JSON
        return jsonify(doc.to_dict()), 200
    else:
        # Document not found
        return jsonify({'error': 'Entry not found'}), 404
    
@app.route('/get_summaries', methods=['GET'])
def get_summary():
    all_summaries = {
        "summaries" : [
        {'summary': 'This is a summary.'},
        {'summary': 'This is another summary.'},
        {'summary': 'This is a summary.'},
        {'summary': 'This is another summary.'},
        {'summary': 'This is a summary.'},
        {'summary': 'This is another summary.'}
        ]
    }
    return jsonify(all_summaries), 200


