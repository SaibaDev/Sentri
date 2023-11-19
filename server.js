const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


mongoose.connect('mongodb://localhost:27017/url_lang', { useNewUrlParser: true, useUnifiedTopology: true });


const urlSchema = new mongoose.Schema({
  url: String,
});


const Url = mongoose.model('Url', urlSchema);


app.use(bodyParser.json());


app.post('/api/save-url', (req, res) => {
  const { url } = req.body;

 
  const newUrl = new Url({ url });

  
  newUrl.save((err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send('URL saved successfully.');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


