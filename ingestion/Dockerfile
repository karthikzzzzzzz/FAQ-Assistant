# Use an official Python base image
FROM python:3.12-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application files into the container
COPY . .

# Expose the port FastAPI will run on
EXPOSE 8000

# Run the ingest script to populate the knowledge base (only when building the image)
RUN python ingest.py

# Set the default command to start the FastAPI application
CMD ["uvicorn", "chat:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
