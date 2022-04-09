const app = require('../index');
const assert = require('assert');
const request = require('supertest');
describe('POST /hotels', ()=> {
      let data = {
                
    "id": "6238d974583f19ac4b8b05e4",
    "nom": "Lawrence",
    "email": "lawrence@gmail.prod",
    "prix": "à partir de 21 euro",
    "address": "95 Madison Place, Westphalia, American Samoa",
    "offres": {
      "choix_chambre": "chambre triple",
      "activités": {
        "petit_déjeuner": "petit déjeuner inclus",
        "dinner": "inclus",
        "piscine": "sans piscine",
        "centre_de_fitness": "avec centre_de_fitness",
        "spa": "inclus",
        "étoiles": "2 étoile"
      },
      "localisation": {
        // "lat": 59.355184,
        "long": -39.798815
      }
    }
  }
               };
      
      
     it('respond with 201 created ', (done) => {
         request(app)
         .post('/hotels')
         .send(data)
         .set('Accept','application/json')
         .expect('Content-type',/json/)
         .expect(200)
         .end((erreur)=>{
                   if (erreur) return done(erreur);
                   done();
                   });
        });
  });
//false data
describe('POST /hotels', ()=> {
      let data = {
                
    "id": "6238d974583f19ac4b8b05e4",
    "nom": "Lawrence12",
    "email": "lawrence@gmail.prod",
    "prix": "à partir de 21 euro",
    "address": "95 Madison Place, Westphalia, American Samoa",
    "offres": {
      "choix_chambre": "chambre triple",
      "activités": {
        "petit_déjeuner": "petit déjeuner inclus",
        "dinner": "inclus",
        "piscine": "sans piscine",
        "centre_de_fitness": "avec centre_de_fitness",
        "spa": "inclus",
        "étoiles": "2 étoile"
      },
      "localisation": {
        "lat": 59.355184,
        "long": -39.798815
      }
    }
  
               }
      }
   it('respond with 400 not created ', (done) => {
         request(app)
         .post('/hotels')
         .send(data)
         .set('Accept','application/json')
         .expect('Content-type',/json/)
         .expect(400)
         .expect('"l'hôtel  n'est pas ajouté "')
         .end((erreur)=>{
                   if (erreur) return done(erreur);
                   done();
                   });
        });
// Get Route
  describe('get /hotels',(){
        it('it should get all the hôtels',(done){
         request(app)
         .get('/hotels')
         .set('Accept','application/json')
         .expect('Content-type',/json/)
         .expect(200,done)
  });
});

//get with id

describe('get /hotels/:id', () {

      
     it('respond with json containing a single state  ', (done)  {
         request(app)
         .get('/hotels/idexist')
         .set('Accept','application/json')
         .expect('Content-type',/json/)
         .expect(200)
         .end((erreur)=>{
                   if (erreur) return done(erreur);
                   done();
                   });
        });
  });
  //**get no exist id
describe('get /hotels/:id', () {

      
     it('respond with json non containing a single state  ', (done)  {
         request(app)
         .get('/hotels/idnoexist')
         .set('Accept','application/json')
         .expect('Content-type',/json/)
         .expect(404)
         .expect('"state not found"')
         .end((erreur)=>{
                   if (erreur) return done(erreur);
                   done();
                   });
        });
//delete with id
describe(' delete /hotels/:id', ()=> {
      
     it('delete an existing state ', (done) => {
         const id =1;
         request(app)
         .delete ("/hotels/" + id)
         .set('Accept','application/json')
         .expect('Content-type',/json/)
         .expect(200, done);
                   
        });
  });
//delete no exist id
describe(' delete /hotels/:id', ()=> {
      
     it('no  existing state ', (done) => {
         const id =700;
         request(app)
         .delete ("/hotels/" + id)
         .set('Accept','application/json')
         .expect('Content-type',/json/)
         .expect(404)
         .expect('"state not found"')
         .end((erreur)=>{
                   if (erreur) return done(erreur);
                   done();
                   });
        });
  });
