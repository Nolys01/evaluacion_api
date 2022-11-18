const Encuesta = require('../models/encuesta');

const getEncuesta = async (req,res)=>{
    const encuesta1 = await Encuesta.find();
    res.json({
        msg:"ENCUESTA GET API",
        encuesta1
    })
}


const postEncuesta = async (req,res)=>{
    const{nombreEncuesta,fecha,documentoEncuestado,nombreEncuestado,edad,genero,empleado}=req.body;
    const encuesta1 = new Encuesta({nombreEncuesta,fecha,documentoEncuestado,nombreEncuestado,edad,genero,empleado});
    await encuesta1.save();
    res.json({
        msg:"ENCUESTA POST API",
        encuesta1
    })
}
const putEncuesta = async (req,res)=>{
    const{nombreEncuesta,fecha,documentoEncuestado,nombreEncuestado,edad,genero,empleado}=req.body;
    const encuesta1 = await Encuesta.findOneAndUpdate({nombreEncuesta:nombreEncuesta},
        {fecha:fecha, documentoEncuestado:documentoEncuestado, nombreEncuestado:nombreEncuestado, edad:edad, genero:genero, empleado:empleado});
        res.json({
            msg:'ENCUESTA PUT API',
            encuesta1
        })
}
const patchEncuesta = async (req,res)=>{
    const{nombreEncuesta,fecha,documentoEncuestado,nombreEncuestado,edad,genero,empleado}=req.body;
    const encuesta1 = await Encuesta.findOneAndUpdate({nombreEncuesta:nombreEncuesta},
        {nombreEncuestado:nombreEncuestado});
        res.json({
            msg:'ENCUESTA PATCH API',
            encuesta1
        })
}
const deleteEncuesta = async(req,res)=>{
    const { nombreEncuesta }=req.query
    const encuesta1 = await Encuesta.findOneAndDelete({nombreEncuesta:nombreEncuesta});
    res.json({
        msg:'ENCUESTA API DELETE',
        encuesta1
    })
}


module.exports={
    getEncuesta,
    postEncuesta,
    putEncuesta,
    patchEncuesta,
    deleteEncuesta
}


