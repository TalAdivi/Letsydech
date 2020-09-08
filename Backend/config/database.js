module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: `mongodb+srv://${env('DATABASE_USERNAME')}:${env('DATABASE_PASSWORD')}@${env('DATABASE_HOST')}/${env('DATABASE_NAME')}?retryWrites=true&w=majority`
      },
      options: {
        ssl: true
      },
    },
  },
});
