const api = require('user-api-client')

api.protocol = process.env.REACT_APP_API_PROTOCOL
api.host = process.env.REACT_APP_API_HOST
api.port = process.env.REACT_APP_API_PORT


module.exports = api