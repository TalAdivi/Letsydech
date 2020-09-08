module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('JWT_SECRET', 'c2bbfcbe2e058644b1e60fb48191d1ec'),
    },
  },
});
