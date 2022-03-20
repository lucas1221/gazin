import styles from "../screens/Styles";
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import { TextInput, DefaultTheme } from "react-native-paper";
import React, { useContext } from 'react';
import { Context } from '../services/Context';
import instancia from "../services/api";

function ModalEditarDev() {
   // States para os Modais de Editar e Excluir Desenvolvedores
   const {modalEditarDevVisible, setModalEditarDevVisible} = useContext(Context);
   // Para os Formularios de Editar
   const {textEditarNome, setTextEditarNome} = useContext(Context);
   const {textEditarNivel, setTextEditarNivel} = useContext(Context);
   const {textEditarIdade, setTextEditarIdade} = useContext(Context);
   const {textEditarDataNascimento, setTextEditarDataNascimento} = useContext(Context);
   const {textEditarHobby, setTextEditarHobby} = useContext(Context);
   const {textEditarSexo,setTextEditarSexo} = useContext(Context);
   const {idEditarDev} = useContext(Context);
   
   

    const handlePut = async (idEditarDev) => {
    const id = idEditarDev;
    instancia
    .put(`/api/desenvolvedores/${id}`,
        {
            devnivel: textEditarNivel,
            nome: textEditarNome,
            sexo: textEditarSexo,
            datadenascimento: textEditarDataNascimento,
            hobby: textEditarHobby,
            idade: textEditarIdade
        })
        .then((response) => {
            console.log("PUT Response")
            console.log(response.data);
            setModalEditarDevVisible(false);
            instancia.get('/api/desenvolvedores/allDevs');  
        })
        .catch(function (error) {
            console.log("Erro ao Atualizar");
        });
     };
    
     return(
        <Modal
            animationType="fade"
            statusBarTranslucent={true}
            transparent={true}
            visible={modalEditarDevVisible}
            onRequestClose={() => {
            console.log('Modal has been closed.');
            setModalEditarDevVisible(false);
            }}> 
            <TouchableOpacity 
            style={styles.centeredModalView} 
            onPress={() => setModalEditarDevVisible(false)}
            activeOpacity={10}
            > 
                <TouchableOpacity 
                    style={styles.modalView} 
                    onPress={() => {}} 
                    activeOpacity={10}
                >
                    <Text style={styles.modalText}>Editar Dados do Desenvolvedor</Text>
                    <TextInput
                        label="Nível"
                        value={textEditarNivel}
                        mode='outlined'
                        outlineColor={'black'}
                        activeOutlineColor={'red'}
                        dense={true}
                        style={styles.Formulario}
                        theme={DefaultTheme}
                        onChangeText={textEditarNivel => setTextEditarNivel(textEditarNivel)}
                    />
                    <TextInput
                    label="Nome"
                    value={textEditarNome}
                    mode='outlined'
                    outlineColor={'black'}
                    activeOutlineColor={'red'}
                    dense={true}
                    style={styles.Formulario}
                    theme={DefaultTheme}
                    onChangeText={textEditarNome => setTextEditarNome(textEditarNome)}
                    />
                    <TextInput
                    label="Sexo"
                    value={textEditarSexo}
                    mode='outlined'
                    outlineColor={'black'}
                    activeOutlineColor={'red'}
                    dense={true}
                    style={styles.Formulario}
                    theme={DefaultTheme}
                    onChangeText={textEditarSexo => setTextEditarSexo(textEditarSexo)}
                    />
                    <TextInput
                    label="Data de Nascimento"
                    value={textEditarDataNascimento}
                    mode='outlined'
                    outlineColor={'black'}
                    activeOutlineColor={'red'}
                    dense={true}
                    style={styles.Formulario}
                    theme={DefaultTheme}
                    onChangeText={textEditarDataNascimento => setTextEditarDataNascimento(textEditarDataNascimento)}
                    />
                    <TextInput
                    label="Idade"
                    value={textEditarIdade}
                    mode='outlined'
                    outlineColor={'black'}
                    activeOutlineColor={'red'}
                    dense={true}
                    style={styles.Formulario}
                    theme={DefaultTheme}
                    onChangeText={textEditarIdade => setTextEditarIdade(textEditarIdade)}
                    />
                    <TextInput
                    label="Hobby"
                    value={textEditarHobby}
                    mode='outlined'
                    outlineColor={'black'}
                    activeOutlineColor={'red'}
                    dense={true}
                    style={styles.Formulario}
                    theme={DefaultTheme}
                    onChangeText={textEditarHobby => setTextEditarHobby(textEditarHobby)}
                    />
                        <View style={styles.BotoesFormularios}>
                            <TouchableOpacity style={styles.buttonCancelar} onPress={() => setModalEditarDevVisible(false)}>
                                <Text style={styles.textStyle}>Cancelar</Text>
                                </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonCadastrar} onPress={() => handlePut(idEditarDev)}>
                                <Text style={styles.textStyle}>Atualizar</Text>
                                </TouchableOpacity>
                        </View>
                        
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalEditarDev;