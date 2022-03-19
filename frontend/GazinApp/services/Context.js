import React, {useState} from 'react';

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

    return( 
            <Context.Provider 
            value={{modalVisible, setModalCadastrarDevVisible, textNome, setTextNome, textNivel, setTextNivel, textIdade, setTextIdade, textDataNascimento, 
            setTextDataNascimento, textHobby, setTextHobby, textSexo, setTextSexo, modalEditarDevVisible, setModalEditarDevVisible, modalExcluirDevVisible, setModalExcluirDevVisible, 
            textEditarNome,setTextEditarNome, textEditarNivel, setTextEditarNivel, textEditarIdade, setTextEditarIdade, textEditarDataNascimento, setTextEditarDataNascimento, 
            textEditarHobby, setTextEditarHobby, textEditarSexo, setTextEditarSexo, modalNiveisVisible, setModalCadastrarNivelVisible, textLevel, setTextLevel, modalEditarLevelVisible, 
            setModalEditarLevelVisible, modalExcluirLevelVisible, setModalExcluirLevelVisible, textEditarLevel, setTextEditarLevel}}>
            {children}
            </Context.Provider>
    );
}; 


