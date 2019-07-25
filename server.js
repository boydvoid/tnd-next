const express = require('express')
const app = express()
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const path = require('path')
const mongoose = require('mongoose');
const PORT  = 3001;
const passport = require('passport')
const expressValidator = require('express-validator');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session)
const db = require('./Models');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
//routes imports
const User = require('./Routes/userRoutes');
const Blogs = require('./Routes/blogRoutes')
const Slider = require('./Routes/sliderRoutes')
// Create the Express-Next App
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()



//Start the app
nextApp.prepare().then(() => {
  const server = express()

  server.use(express.urlencoded({ extended: true }))
  server.use(express.json())
  server.use(expressValidator())

  mongoose.connect(process.env.MONGOLAB_ORANGE_URI || 'mongodb://localhost/tnd', { useNewUrlParser: true }).then(() => {
  });
  
  // store the session in mongo db
  const store = new MongoDBStore({
    uri: process.env.MONGOLAB_ORANGE_URI || 'mongodb://localhost/tnd',
    collection: 'sessions',
  });
  
  // session
  server.use(session({
    secret: '4u9824389ijofsf982u4josafasfd938afdapldksfj poia a0 f2p0jr',
    resave: false,
    saveUninitialized: false,
    store,
  }));
  
  // passport
  server.use(passport.initialize());
  server.use(passport.session());
  
  //route definitions
  server.use('/api', User)
  server.use('/api', Blogs)
  server.use('/api', Slider)
  
  //  Passport use
  passport.use(new LocalStrategy(
    ((username, password, done) => {
      // When username is sent, find match in database.
      db.users.findOne({
        username,
      }).then((user) => {
        if (user === null) {
          // User was not found in the database.
          done(null, false);
        }
        const passwordCheck = bcrypt.compareSync(password, user.password);
  
        // User was found in the database.
        if (passwordCheck === true) {
          return done(null, user);
        }
  
        return done(null, false);
      }, (error) => {
        console.log(error);
      });
    }),
  ));

  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})