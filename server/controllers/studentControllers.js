const list = require('../models').list;
const service=require('../services/studentService');
module.exports = {
  
  listing(req,res) {
    service.listing(req,res);
  },

  create(req, res) {        
   service.create(req,res);
  },

  update(req,res){
  service.update(req,res);
  },

   destroy(req, res) {
   service.destroy(req,res);
   }
}
 
