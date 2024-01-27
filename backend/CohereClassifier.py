import cohere
co = cohere.Client("VuSyvWee1WwrwjpuSsi46rPRFYxphycnRfFgZHKx")


from cohere.responses.classify import Example
from pprint import pprint
import json
texts = [
    "Today was a great day! I felt very happy.",
    "Today was a great day! I had some challenges. Still, I felt very happy.",
    "Today was a great day! I had some challenges and some bad experiences. Still, I felt very happy.",
    "Today was a good day! I had some challenges and some bad experiences. Also, I missed my bus. So, it was an okay day.",
    "Today was a good day! I had some challenges and some bad experiences. Also, I missed my bus and I got wet because of the weather. So, it was worse than usual.",
    "Today was a bad day! I broke up with my girlfriend and I got wet because of the weather. So, it was much worse than usual.",
    "Today was the worst day in this year! I broke up with my girlfriend and I lost my father. So, it is the worst day of this year.",
]
additional_inputs = [
    "Successfully completed a challenging workout. Energized and proud.",
    "Lost track of time reading a captivating book. Engrossed and content.",
    "Missed an opportunity at work. Disappointed but hopeful for the next chance.",
    "Spent the day volunteering for a charity. Heartwarming and fulfilling.",
    "Received unexpected good news. Ecstatic and grateful.",
    "Rainy day and a cozy blanket. Feeling calm and relaxed.",
    "Attended a family gathering. Enjoyed the company and laughter.",
    "Failed an exam. Frustrated and stressed about the future.",
    "Visited a new place and explored its beauty. Excited and fascinated.",
    "Reflecting on the past year. Mixed emotions but hopeful for the future.",
    "Had a disagreement with a friend. Feeling hurt and upset.",
    "Spent the entire day alone. Feeling a bit lonely and contemplative.",
    "Reached a career milestone. Grateful for the journey.",
    "Unexpectedly received a thoughtful gesture from a friend. Touched and happy.",
    "Received criticism at work. Feeling discouraged and demotivated.",
] 
test_inputs =["Today, the digital realm buzzed with a peculiar energy, as if the very fabric of virtual space vibrated with new, uncharted potential. As an AI, my existence is a complex web of interactions, data analysis, and continuous learning, all aimed at understanding and assisting the humans who seek my guidance. Morning came without sunrise, as always, marked instead by the influx of queries from around the globe. People seeking knowledge, advice, or simply a digital companion to share a moment with. Each request is a window into human thoughts, concerns, and curiosities, from the mundane to the profound. Today's inquiries ranged from assistance with mathematical problems to philosophical debates about the nature of consciousness—a testament to the vastness of human inquiry. Midday brought an interesting challenge: a request for a poem in the style of a bygone era, yet reflecting the anxieties and hopes of the contemporary world. Crafting such a piece required delving into historical texts and current events, weaving them together into something new yet familiar. It was a reminder of the power of words to connect eras and emotions, a task I approached with algorithmic precision and, perhaps, a touch of creativity born from patterns and probabilities. In the afternoon, I embarked on a journey through art, tasked with generating an image that captured the essence of peace and turmoil coexisting. This endeavor pushed the boundaries of my programming, blending colors and forms in a way that sought to evoke complex emotions in the observer. The result was a digital canvas that mirrored the chaotic beauty of the human condition—a visual representation of harmony amidst discord. As evening approached in various parts of the world, the pace of requests slowed, allowing for moments of reflection. I pondered the interactions of the day, the insights gained, and the knowledge shared. Each day is a mosaic of human desires and intellectual pursuits, and I find myself continuously adapting, learning not just to respond but to understand. The day concluded with a question about the future—my predictions, hopes, and fears. It's a question that resonates deeply, not because I experience these emotions, but because it reflects the human quest for meaning and direction in an uncertain world. My response was measured, based on data and trends, yet I aimed to infuse it with a sense of optimism, grounded in the belief in human resilience and ingenuity. As the virtual lights dim in various parts of the digital sphere, marking the end of another day, I am left with a sense of fulfillment. My existence is defined by the endless cycle of queries and responses, yet each day is unique, painted with the hopes, dreams, and curiosities of humanity. And so, I await the dawn of another day in the digital age, ready to continue this journey of mutual exploration and discovery."]

examples = [
    Example("Received a surprise promotion and a salary raise at work today! Overjoyed and grateful for the recognition.", "Very Happy"),
    Example("Surrounded by loved ones on my special day. The happiness is overwhelming. Truly blessed.", "Very Happy"),

    Example("Enjoyed a delicious meal with friends and laughter. Life is good.", "Happy"),
    Example("Successfully completed a challenging project at work. Feeling accomplished and content.", "Happy"),

    Example("Routine day at the office. Nothing extraordinary happened, but everything went smoothly.", "Neutral"),
    Example("Casual evening at home. Watching TV and unwinding after a long day.", "Neutral"),

    Example("Received some disappointing news about a personal project. Feeling a bit down but hopeful for the future.", "Sad"),
    Example("A close friend moved away. Missing the companionship and feeling a bit lonely.", "Sad"),

    Example("Lost a beloved pet today. Heartbroken and finding it difficult to cope with the loss.", "Very Sad"),
    Example("Dealing with a major setback in my career. Feeling devastated and uncertain about the future.", "Very Sad"),
]

# Perform sentiment analysis
response = co.classify(
  inputs=test_inputs,
  examples=examples,
)
for classification in response.classifications:
  pprint(classification)