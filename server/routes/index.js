const student = require('../controllers').studentControllers;

module.exports = (app) => {
  app.get('/api/test', (req, res) => res.status(200).send({
    message: 'Welcome to the  API!',
  }));

   app.post('/students/post', student.create);
   app.get('/students/get',student.listing);
   app.put('/students/put/:Id', student.update);
   app.delete('/students/delete/:Id',student.destroy);


};