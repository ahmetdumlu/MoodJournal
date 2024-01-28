# MoodJournal

## Inspiration
The inspiration behind MoodJournal comes from a desire to reflect on and cherish the good times, especially in an era where digital overload often makes us overlook the beauty of everyday moments. We wanted to create a digital sanctuary where users can not only store their daily and memories but also discover what truly makes them happy. By leveraging cutting-edge technology, we sought to bring a modern twist to the nostalgic act of keeping a diary, transforming it into a dynamic tool for self-reflection and emotional well-being

## What it does

MoodJournal is a digital diary app that allows users to capture their daily life through text entries and photographs. Utilizing semantic analysis and image-to-text conversion technologies, the app evaluates the emotional content of each entry to generate 5 happiness scores in range from Very Happy to Very Sad. This innovative approach enables MoodJournal to identify and highlight the user's happiest moments. At the end of the year, it creates a personalized collage of these joyous times, showcasing a summary of the texts and photos from those special days, serving as a powerful visual reminder of the year's highlights

## How we built it
MoodJournal's development combined React and JavaScript for a dynamic frontend, utilizing open-source libraries for enhanced functionality. The backend was structured around Python and Flask, providing a solid foundation for simple REST APIs. Cohere's semantic classification API was integrated for text analysis, enabling accurate emotion assessment. ChatGPT helped generate training data, ensuring our algorithms could effectively analyze and interpret users' entries.

## Challenges we ran into
The theme of nostalgia itself presented a conceptual challenge, making it difficult initially to settle on a compelling idea. Our limited experience in frontend development and UX/UI design further complicated the project, requiring substantial effort and learning. Thanks to invaluable guidance from mentors like Leon, Shiv, and Arash, we navigated these obstacles. Additionally, while the Cohere API served our text analysis needs well, we recognized the necessity for a larger dataset to enhance accuracy, underscoring the critical role of comprehensive data in achieving precise analytical outcomes.

## Accomplishments that we're proud of
We take great pride in achieving meaningful results from the Cohere API, which enabled us to conduct a thorough analysis of emotions from text entries. A significant breakthrough was our innovative approach to photo emotion analysis; by generating descriptive text from images using ChatGPT and then analyzing these descriptions with Cohere, we established a novel method for capturing emotional insights from visual content. Additionally, completing the core functionalities of MoodJournal to demonstrate an end-to-end flow of our primary objective was a milestone accomplishment. This project marked our first foray into utilizing a range of technologies, including React, Firebase, the Cohere API, and Flask. Successfully integrating these tools and delivering a functioning app, despite being new to them, is something we are especially proud of.

## What we learned
This hackathon was a tremendous learning opportunity. We dove into tools and technologies new to us, such as React, where we explored new libraries and features like useEffect, and Firebase, achieving data storage and retrieval. Our first-hand experience with Cohere's APIs, facilitated by direct engagement with their team, was invaluable, enhancing our app's text and photo analysis capabilities. Additionally, attending workshops, particularly on Cohere technologies like RAG, broadened our understanding of AI's possibilities. This event not only expanded our technical skills but also opened new horizons for future projects.
## What's next for MoodJournal
We're planning exciting updates to make diary-keeping easier and more engaging:

- AI-Generated Entries: Users can have diary entries created by AI, simplifying daily reflections.
- Photo Analysis for Entry Generation: Transform photos into diary texts with AI, offering an effortless way to document days.
- Integration with Snapchat Memories: This feature will allow users to turn snaps into diary entries, merging social moments with personal reflections.
- Monthly Collages and Emotional Insights: We'll introduce monthly summaries and visual insights into past emotions, alongside our yearly wrap-ups.
- User Accounts: Implementing login/signup functionality for a personalized and secure experience.

These enhancements aim to streamline the journaling process and deepen user engagement with MoodJournal.

## Frontend

### Available Scripts
Go to the frontend directory.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Backend


### Available Scripts

Before running the backend server, make sure you have flask installed.
## `pip install flask`

After it is installed, you can run it with the following command in backend directory:

## `flask --app app run`

