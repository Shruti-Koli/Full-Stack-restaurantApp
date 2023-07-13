const Order = require('../models/orders');

exports.getOrders = async (req,res,next)=>{
    try{
        const order = await Order.findAll();
        res.status(200).json({allOrders: order})
    }catch(err){
        console.log('Get user is failing',JSON.stringify(error));
        res.status(500).json({error:err})
    }
}

exports.postOrder = async (req,res,next)=>{
    try{
        if(!req.body.dish || !req.body.price || !req.body.table){
            throw new Error('All fields are Mandatory')
        }
        console.log(req.body)
        const dish = req.body.dish;
        const price = req.body.price;
        const table = req.body.table;

        const data = await Order.create({
            dish: dish,
            price : price,
            table : table
        })
        res.status(201).json({orderDetails: data})
    }catch(err){
        res.status(500).json({error:err})
    }
}


exports.deleteOrder = async(req, res, next)=>{
    try{
        const id = req.params.id;
        console.log(id);
        const item = await Order.findByPk(req.params.id);

        await Order.destroy({where:{id:id}})
        return res.status(200).json();
    }
    catch(err){
        res.status(500).json({error:err})
    }
}