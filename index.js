const express  = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
//env var
const PORT = process.env.PORT        || 3000;
const db   = process.env.MONGODB_URI || 'mongodb://localhost/hellodb';
//obj constructor
const app = express();
//pug
app.set(`view engine`, `pug`);
app.set(`views`, `./views`);
//router
app.use('/', router);
//db 
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});