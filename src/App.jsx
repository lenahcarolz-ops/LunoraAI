import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')

    // TODO: Implement RAG logic with LangChain + OpenRouter
    const botResponse = { role: 'assistant', content: 'Lunora RAG system is ready! (Integration pending)' }
    setMessages(prev => [...prev, botResponse])
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Lunora AI - RAG Chat</h1>
      </header>
      <main className="chat-container">
        <div className="messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              <strong>{msg.role === 'user' ? 'You' : 'Lunora'}:</strong> {msg.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Lunora anything..."
            className="chat-input"
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </main>
    </div>
  )
}

export default App