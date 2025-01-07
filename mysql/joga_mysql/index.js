const app = require('./utils/app');
const db = require('./utils/db');
const articleRoutes = require('./routes/articles')

app.use('/', articleRoutes);

app.listen(3006, () => {
    console.log('Web server is connected');
});