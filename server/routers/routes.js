const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');
const SessionConstroller = require('../controllers/SessionController');
const SpotConstroller = require('../controllers/SpotController');
const DashboardController = require ('../controllers/DashboardController');
const BookingsController = require ('../controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);
/*
routes.get('/users', (req,res)=>{
    return res.json( { idade:req.query.idade}); //http://localhost:3333/users?idade=20
    // req.query = Acessar query params (para filtros)
});

routes.put('/users/:id', (req,res)=>{
    return res.json( {id: req.params.id}); // http://localhost:3333/users/2
    // req.params = Acessar route params (para edição, delete)
});

routes.delete('/users/:id', (req,res)=>{
    return res.json( {id: req.params.id}); // http://localhost:3333/users/2
    // req.params = Acessar route params (para edição, delete)
});
*/

//routes.use(express.json());
routes.post('/sessions', SessionConstroller.store);

routes.get('/spots', SpotConstroller.index);
routes.post('/spots', upload.single('thumbnail') ,SpotConstroller.store);
routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingsController.store);
// ele já é uma json
    //req.body Acessar corpo da requisição (para criação, edição)


module.exports =  routes;