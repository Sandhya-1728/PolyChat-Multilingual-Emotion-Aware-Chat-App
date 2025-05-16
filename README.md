# PolyChat - Multilingual Emotion-Aware Chat Application

PolyChat is an innovative chat application that breaks down language barriers and enhances communication through real-time translation and emotion analysis. This application enables users to communicate seamlessly across different languages while understanding the emotional context of messages.

## 🌟 Features

- **Real-time Translation**: Instant message translation across multiple languages
- **Emotion Analysis**: Advanced sentiment analysis to detect and display message emotions
- **Multi-language Support**: Chat in your preferred language while others receive messages in their chosen language
- **Real-time Chat**: Instant messaging with WebSocket support
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Beautiful, modern UI that works across all devices
- **Emoji Support**: Enhanced emotional expression through emoji suggestions based on message content
- **Message History**: Persistent chat history with search functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- Python (v3.8 or higher)
- MongoDB
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/PolyChat-Multilingual-Emotion-Aware-Chat-App.git
cd PolyChat-Multilingual-Emotion-Aware-Chat-App
```

2. Install frontend dependencies

```bash
cd frontend
npm install
```

3. Install backend dependencies

```bash
cd backend
pip install -r requirements.txt
```

4. Set up environment variables
   Create `.env` files in both frontend and backend directories with the following variables:

```env
# Frontend .env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_WS_URL=ws://localhost:5000

# Backend .env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
TRANSLATION_API_KEY=your_translation_api_key
```

5. Start the application

```bash
# Start backend server
cd backend
python app.py

# Start frontend development server
cd frontend
npm start
```

## 🛠️ Technology Stack

### Frontend

- React.js
- TypeScript
- Material-UI
- Socket.io-client
- Redux Toolkit

### Backend

- Python
- Flask
- MongoDB
- WebSocket
- Natural Language Processing libraries

## 📝 API Documentation

The API documentation is available at `/api/docs` when running the server locally.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape PolyChat
- Special thanks to the open-source community for the amazing tools and libraries

## 📞 Support

For support, email support@polychat.com or join our Slack channel.

---

Made with ❤️ by the PolyChat Team
