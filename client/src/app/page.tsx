'use client'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
    const [messages, setMessages] = useState<string[]>([])
    const [input, setInput] = useState("")
    const socketRef = useRef<WebSocket | null>(null)

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8000/ws")
        socketRef.current = socket

        socket.onmessage = (event) => {
            setMessages((prev) => [...prev, event.data])
        }

        return () => socket.close()
    }, [])

    const sendMessage = () => {
        if (socketRef.current && input.trim()) {
            socketRef.current.send(input)
            setInput("")
        }
    }

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold">💬 PolyChat</h1>
            <div className="mt-4 space-y-2">
                {messages.map((msg, i) => (
                    <p key={i} className="bg-gray-200 p-2 rounded">{msg}</p>
                ))}
            </div>
            <div className="mt-4 flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="border p-2 flex-1"
                />
                <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
            </div>
        </main>
    )
}
