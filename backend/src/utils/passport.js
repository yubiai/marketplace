const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const { Profile } = require('../models/Profile')
const opts = {}

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.JWT_PRIVATE_KEY || 'pepe'

module.exports = (passport) => {
  passport.use(
    new JWTStrategy(opts, (jwt_payload, done) => {
      Profile.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user)
          }
          return done(null, false)
        })
        .catch((err) => console.error(err))
    }),
  )
}
