
## RubizCube Chatbot
RubizCube Bot is an intelligent chatbot application designed to provide a conversational experience for users. Built with modern frontend technologies and OpenAI’s Gemini model for AI-driven responses, it delivers an intuitive and engaging chat experience.

## Getting Started

### Clone Repo 
```bash
https://github.com/mahfuz584/chat-bot-rubizcube.git
```
### Install Dependencies
```bash
# Using npm
npm install
# Or using Yarn
yarn
```
### Create ENV
```bash
# Create a .env file in the root directory and add your Gemini API key:
GOOGLE_GENERATIVE_AI_API_KEY=your-openai-api-key
```
### Start the development server:
```bash
npm run dev
# or
yarn dev
```


## Technologies Used
### Frontend
- Next.js: Leveraging the App Router for modern React features and optimized routing.
- ShadCN: For reusable, accessible UI components.
- Tailwind CSS: For fast, responsive, and customizable styling.

### AI Logic
- OpenAI Gemini: Used for generating intelligent responses, powered by OpenAI’s advanced natural language model.
- ShadCN: For reusable, accessible UI components.

### Networking
- Axios: To handle API requests efficiently.

## Features

### Message Input
- A text input box for users to type their messages.
- A "Send" button to submit the message.
- Emoji support to enhance user interaction.

### Chat Display
- A conversational UI for displaying both customer and AI messages.
- Differentiated styling for customer and AI messages for better readability
- Scrollable chat history with a smooth auto-scroll feature.

### AI Response Simulation
- Integration with OpenAI’s API for real-time AI responses.
- Mock backend available for testing without relying on the live OpenAI AP

