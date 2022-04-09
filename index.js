const express = require('express');
const app = express();
const hotels = require('./hotel.json');

app.use(express.json());


// get all services for hotel
app.get('/hotels', (req,res) => {
    res.status(200).json(hotels)
});


// get service hotel with id
app.get('/hotels/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const hotel = hotels.find(hotel => hotel.id === id)
    res.status(200).json(hotel)
});



app.post('/hotels', (req,res) => {
    hotels.push(req.body)
    res.status(200).json(hotels)
});


app.post('/hotels',(req, res,next)=>{
    delete req.body._id;
    const hotel = new hotel({
       ...req.body
    });
    hotel.save()
    .then(()=> res.status(201).json({
        message : "hotel added"
    }))
    .catch(error => res.status(400).json({
        error
    }));
});
app.get('/api/flight', (req, res, next) => {
    hotel.find()
      .then(hotels => res.status(200).json(hotels))
      .catch(error => res.status(400).json({ error }));
  });



app.put('/hotels/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let hotel = hotels.find(hotel => hotel.id === id)
    hotel.nom =req.body.nom,
    hotel.adresse =req.body.adresse,
    hotel.prix =req.body.prix,
    res.status(200).json(hotel)
});

app.delete('/hotels/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let hotel = hotels.find(hotel => hotel.id === id)
    hotels.splice(hotels.indexOf(hotel),1)
    res.status(200).json(hotels)
});

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
});