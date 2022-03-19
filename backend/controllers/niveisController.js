// Imports
const db = require('../models')

// criar o Main Model 
const Niveis = db.niveis
// ==============================================================
/* OPERACÕES COM AS TABELAS DOS NÍVEIS*/
// ==============================================================

// 1. Cadastrar o Nível: 
const addNivel = async (req, res) => {
    let nivel = {
        idniveis: req.body.idniveis,
        nivel: req.body.nivel
    }

    const niveis = await Niveis.create(nivel)
    res.status(200).send(niveis)
    console.log(niveis)
}

// 2. Obter todos os Níveis: 
const getAllNiveis = async (req, res) => {

    let levels = await Niveis.findAll({})
    res.status(200).send(levels)

}


// 3. UPDATE no Nível
const updateNivel = async (req, res) => {

    let idniveis = req.params.idniveis

    const niveis = await Niveis.update(req.body, { where: { idniveis: idniveis }})

    res.status(200).send(niveis)
   

}

// 4. deletar Nivel by ID
const deleteNivel = async (req, res) => {

    let idniveis = req.params.idniveis
    
    await Niveis.destroy({ where: { idniveis: idniveis }} )

    res.status(200).send('Nivel foi Excluído!')

}

module.exports = {
    addNivel,
    getAllNiveis,
    updateNivel,
    deleteNivel
}