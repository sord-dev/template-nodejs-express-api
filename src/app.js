const express = require('express');
const cors = require('cors');
const { ErrorHandlingService } = require('./services');
const handleError = require('./middleware/handleError');
const morgan = require('morgan');

const app = express();

app.use(express.json({ limit: '50mb', type: 'application/json' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }))
app.use(morgan('dev'))

app.use('/api/v1/tasks', require('./routes/tasks.routes'))

process.on('unhandledRejection', (err) => {
    ErrorHandlingService.handleError(err)
    if (ErrorHandlingService.isOperationalError(err)) {
        process.exit(1)
    }
})

app.use(handleError);

module.exports = app;