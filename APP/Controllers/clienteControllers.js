//const cliente=require("../models/clienteModel.js");
module.exports ={
    create:(req,res)=>{
        console.log(req.body);
    }
    ,
    delete:function(req,res){
    console.log(req.params.id);
    }
}