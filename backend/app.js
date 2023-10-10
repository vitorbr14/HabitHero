require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors')
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(cors())
app.use(express.json());
// extra packages




//connect to db
const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication')


// routes

const authRouter = require('./routes/auth');
const TasksRouter = require('./routes/tasks')


// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/tasks', authenticateUser, TasksRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
