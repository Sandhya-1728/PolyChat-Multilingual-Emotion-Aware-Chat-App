# server/main.py
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import redis.asyncio as redis
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # dev only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

r = redis.Redis(host="redis", port=6379, decode_responses=True)
connections = []

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    connections.append(websocket)

    try:
        while True:
            data = await websocket.receive_text()
            # Broadcast via Redis pub/sub
            await r.publish("chat", data)
    except WebSocketDisconnect:
        connections.remove(websocket)

@app.on_event("startup")
async def start_redis_listener():
    async def redis_listener():
        pubsub = r.pubsub()
        await pubsub.subscribe("chat")

        async for message in pubsub.listen():
            if message["type"] == "message":
                for conn in connections:
                    try:
                        await conn.send_text(message["data"])
                    except:
                        pass

    import asyncio
    asyncio.create_task(redis_listener())
