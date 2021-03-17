const exec = require('child_process').exec

exec('cd server/orchestrator && nodemon app.js')
exec('cd server/services/movies && nodemon app.js')
exec('cd server/services/series && nodemon app.js')