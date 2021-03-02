const http = require('./app');
const port = process.env.PORT || 4002;

http.listen(port, () => console.log(`Listening on port ${port}`));