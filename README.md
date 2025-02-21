# FAQ Assistant

FAQ Assistant is an intelligent system designed to assist with handling frequently asked questions (FAQ). The assistant utilizes natural language processing (NLP) techniques to provide users with accurate and relevant answers to their queries.


<img width="595" alt="Screenshot 2025-02-21 at 7 30 24 PM" src="https://github.com/user-attachments/assets/e8c60e63-3445-4255-b521-eaf003d813ed" />


## Features

- Provide automatic responses to frequently asked questions
- Integrate with various platforms or APIs for real-time answers
- Easy to extend with additional FAQ datasets
- User-friendly interface for querying

## Installation

Follow the steps below to install and run the FAQ Assistant:

## Install the requirements.txt file with creating an env in your local with following commands
1. python -m venv venv_name
2. pip install requirements.txt

### Clone the repository

```bash
git clone https://github.com/karthikzzzzzzz/FAQ-Assistant.git
cd FAQ-Assistant

```Run these commands in separate terminals```

###** You need an OpenAI key to run this project. Use your API KEY in your .env file**

```To run the backend
1. cd ingestion
2. python ingest.py
3. uvicorn chat:app --reload


```To run the frontend
1. cd frontend
2. npm install
3. npm start
