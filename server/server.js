const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const path = require('path');
const http = require('http')
const chat = require('./chat')
const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');
const db = require('./config/connection');
var cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

const socketio = require('socket.io')
const serverInstance = http.createServer(app)
const io = socketio(serverInstance,{
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

io.on('connection', socket => {
  console.log("New WS Connection...");
})

chat(io);
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  serverInstance.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
