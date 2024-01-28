import cohere
import os
from dotenv import load_dotenv
from cohere.responses.classify import Example
from pprint import pprint
import json
from constants import examples
load_dotenv()
API_KEY = os.getenv("API_KEY")

class Classifier:
  def __init__(self):
    self.co = cohere.Client("VuSyvWee1WwrwjpuSsi46rPRFYxphycnRfFgZHKx")

  def get_response(self, texts):
    # Perform sentiment analysis
    response = self.co.classify(
      inputs=texts,
      examples=examples,
    )
    return response