const User = require('../models/User');


module.exports = {
    async store(req,res){ //post
        const {email}= req.body; //desestruturação, buscando email dentro do body
        
        let user = await User.findOne({email}); // busca o usuario
        
        if (!user){ // se não existir ira criar
         user = await User.create({email});
        }
        return res.json(user);
    }
};