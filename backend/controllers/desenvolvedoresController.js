// Import
const db = require('../models')

// criar o Main Model 
const Desenvolvedores = db.desenvolvedores;
// ==============================================================
/* OPERACÕES COM AS TABELAS DOS DESENVOLVEDORES*/
// ==============================================================
// 1. Cadastrar o Dev: 
const addDev = async (req, res) => {
    let dev = {
        id: req.body.id,
        devnivel: req.body.devnivel,
        nome: req.body.nome,
        sexo: req.body.sexo,
        datadenascimento: req.body.datadenascimento,
        hobby: req.body.hobby,
        idade: req.body.idade
    }

    const desenvolvedores = await Desenvolvedores.create(dev)
    res.status(200).send(desenvolvedores)
    console.log(desenvolvedores)
}

// 2. Obter todos os Devs: 

const getAllDevs = async (req, res) => {

    let dev = await Desenvolvedores.findAll({})
    res.status(200).send(dev)

}

// 3. Obter Dados de um Dev por ID

/*const getOneDev = async (req, res) => {

    let id = req.params.id
    let dev = await Desenvolvedores.findOne({ where: { id: id }})
    res.status(200).send(dev)

}*/

// 4. UPDATE no Dev

const updateDev = async (req, res) => {

    let id = req.params.id

    const desenvolvedores = await Desenvolvedores.update(req.body, { where: { id: id }})

    res.status(200).send(desenvolvedores)
   

}

// 5. deletar Desenvolvedor by id

const deleteDev = async (req, res) => {

    let id = req.params.id
    
    await Desenvolvedores.destroy({ where: { id: id }} )

    res.status(200).send('Desenvolvedor foi Excluído!')

}


module.exports = {
    addDev,
    getAllDevs,
    //getOneDev,
    updateDev,
    deleteDev
}