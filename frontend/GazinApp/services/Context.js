import React, {useState} from 'react';
import { useReducer } from 'react/cjs/react.production.min';

export const Context = React.createContext({});

export default function Provider({children}) {

    // Para o Modal Cadastro de Devs
    const [modalVisible, setModalCadastrarDevVisible] = useState(false);
    const [textNome, setTextNome] = React.useState('');
    const [textNivel, setTextNivel] = React.useState('');
    const [textIdade,setTextIdade] = React.useState('');
    const [textDataNascimento, setTextDataNascimento] = React.useState('');
    const [textHobby, setTextHobby] = React.useState('');
    const [textSexo,setTextSexo] = React.useState('');

    // States para os Modais de Editar e Excluir Desenvolvedores
    const [modalEditarDevVisible, setModalEditarDevVisible] = useState(false);
    const [modalExcluirDevVisible, setModalExcluirDevVisible] = useState(false);
    // Para os Formularios de Editar
    const [textEditarNome, setTextEditarNome] = React.useState('');
    const [textEditarNivel, setTextEditarNivel] = React.useState('');
    const [textEditarIdade,setTextEditarIdade] = React.useState('');
    const [textEditarDataNascimento, setTextEditarDataNascimento] = React.useState('');
    const [textEditarHobby, setTextEditarHobby] = React.useState('');
    const [textEditarSexo,setTextEditarSexo] = React.useState('');

     // Para o Modal Cadastro de Níveis
     const [modalNiveisVisible, setModalCadastrarNivelVisible] = useState(false);
     const [textLevel, setTextLevel] = React.useState('');
    // States para os Modais
    const [modalEditarLevelVisible, setModalEditarLevelVisible] = useState(false);
    const [modalExcluirLevelVisible, setModalExcluirLevelVisible] = useState(false);
    // Para os Formularios
    const [textEditarLevel, setTextEditarLevel] = React.useState('');
    const [setIdEditarDev] = React.useState({});
    const [setIdExcluirDev] = React.useState({});
    const [setIdEditarLevel] = React.useState([]);
    const [setIdExcluirLevel] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [nivel, setNivel] = React.useState([]);
    /* Reducers Utilizados */
    // Reducer para Editar Devs
    function reducer(idEditarDev, action) {
        if (action.type === 'update users')
        {
            setModalEditarDevVisible(true);
            const editarDevID = action.payload;
            return editarDevID
        }
        return idEditarDev;
    }
    // Reducer para Excluir Devs
    function reducerExcluirDev(idExcluirDev, action) {
        if (action.type === 'delete users')
        {
            setModalExcluirDevVisible(true);
            const ExcluirDevID = action.payload;
            return ExcluirDevID
        }
        return idExcluirDev;
    }
    // Reducer para Editar Niveis
    function reducerLevel(idEditarLevel, action) {
        if (action.type === 'update levels')
        {
            setModalEditarLevelVisible(true);
            const editarNivelID = action.payload;
            return editarNivelID
        }
        return idEditarLevel;
    }
    // Reducer para Excluir Niveis
    function reducerExcluirLevel(idExcluirLevel, action) {
        if (action.type === 'delete levels')
        {
            setModalExcluirLevelVisible(true);
            const ExcluirLevelID = action.payload;
            return ExcluirLevelID
        }
        return idExcluirLevel;
    }
    const [idEditarDev, dispatch] = React.useReducer(reducer, data);
    const [idExcluirDev, dispatchExcluirDev] = React.useReducer(reducerExcluirDev, data);
    const [idEditarLevel, dispatchEditarLevel] = React.useReducer(reducerLevel, nivel);
    const [idExcluirLevel, dispatchExcluirLevel] = React.useReducer(reducerExcluirLevel, nivel);

    return( 
            <Context.Provider 
            value={{modalVisible, setModalCadastrarDevVisible, textNome, setTextNome, textNivel, setTextNivel, textIdade, setTextIdade, textDataNascimento, 
            setTextDataNascimento, textHobby, setTextHobby, textSexo, setTextSexo, modalEditarDevVisible, setModalEditarDevVisible, modalExcluirDevVisible, setModalExcluirDevVisible, 
            textEditarNome,setTextEditarNome, textEditarNivel, setTextEditarNivel, textEditarIdade, setTextEditarIdade, textEditarDataNascimento, setTextEditarDataNascimento, 
            textEditarHobby, setTextEditarHobby, textEditarSexo, setTextEditarSexo, modalNiveisVisible, setModalCadastrarNivelVisible, textLevel, setTextLevel, modalEditarLevelVisible, 
            setModalEditarLevelVisible, modalExcluirLevelVisible, setModalExcluirLevelVisible, textEditarLevel, setTextEditarLevel, idEditarDev, setIdEditarDev, idExcluirDev, setIdExcluirDev,
            idEditarLevel, setIdEditarLevel, idExcluirLevel, setIdExcluirLevel, data, setData, nivel, setNivel, dispatch, dispatchExcluirDev, dispatchEditarLevel, dispatchExcluirLevel}}>
            {children}
            </Context.Provider>
    );
}; 


