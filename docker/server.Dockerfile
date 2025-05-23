# docker/server.Dockerfile
FROM python:3.11-slim

# Install dependencies
WORKDIR /app
COPY ./server/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app files
COPY ./server .

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
