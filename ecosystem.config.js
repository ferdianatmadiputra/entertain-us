module.exports = {
  apps: [
    {
       name: 'entertainme - Client',
       script: 'cd client && npm install && npm start',
    },
    {
      name: 'entertainme - Orchestrator',
      script: 'cd server/orchestrator && npm install && nodemon app.js',
      env: {
        PORT: 4000
      },
    },
    {
      name: 'entertainme - Service Movies',
      script: 'cd server/services/movies && npm install && nodemon app.js',
      env: {
        DATABASE_NAME: "EntertainMe",
        COLLECTION_NAME: "Movies",
        PORT: 4001
      },
    },
    {
      name: 'entertainme - Service TV Series',
      script: 'cd server/services/series && npm install && nodemon app.js',
      env: {
        DATABASE_NAME: "EntertainMe",
        COLLECTION_NAME: "TvSeries",
        PORT: 4002
      },
    },
  ],
};