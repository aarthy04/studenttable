 const list = require('../models').list;
module.exports={

    listing(req,res){
       return list.all()
        .then(list => res.send(list))
        .catch(error => res.send({message:"error found"}));
    },

    create(req,res){
        return list
        .create({
            name: req.body.name,
            maths:req.body.maths,
            science:req.body.science,
            social:req.body.social
          })
          .then(list => res.send(list))
       
          .catch(error => res.send({message:"error found"}));
    },

    update(req,res){
        return list
      .findById(req.params.Id)
      .then(lists => {
        if (!lists) {
          return res.send({
            message: 'Id Not Found',
          });
        }
        return lists
            .update({           
               name: req.body.name || lists.name,
               maths: req.body.maths || lists.maths,
               science: req.body.science || lists.science,
               social: req.body.social || lists.social
  
             })
  
            .then((lists) => res.send(lists))  
            .catch((error) => res.send({message:"error found"}));
       })
            .catch((error) => res.send({message:"error found"}));
          },

          destroy(req, res) {
            list.findById(req.params.Id)
                .then(lists => {
                  if (!lists) {
                    return res.send({
                      message: 'Id Not Found',
                    });
                  }
                  return lists 
                    .destroy()
                    .then(() => res.send({message:"id deleted successfully"}))
                    .catch(error => res.send({message:"error found"}));
                })
                .catch(error => res.send({message:"error found"}));
             }
}

