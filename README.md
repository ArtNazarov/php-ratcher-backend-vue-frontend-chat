# WebSocket Chat Application with PHP Ratchet Backend and Vue 3 Frontend

This is a real-time chat application that uses:

- Backend: PHP with the Ratchet library for WebSocket server implementation
- Frontend: Vue 3 with TypeScript for the user interface

Key Features:

- Real-time Communication: Uses WebSocket protocol for instant messaging
- Message History: Stores and retrieves chat history from the server
- User Identification: Supports nicknames for participant identification
- Timestamps: Displays message timestamps in a user-friendly format

# Running backend

Install dependencies

```
 composer install
```

Execute:
```
 php server.php
```

# Running frontend

```
sudo npm install -g @vue/cli
sudo npm install vite -g
```
In the frontend directory websocket-chat

```
npm install
npm run dev
```
