import styles from "../screens/Styles";
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import { TextInput, DefaultTheme } from "react-native-paper";
import React, { useContext } from 'react';
import { Context } from '../services/Context';

function ModalCadastrarDev() {
    // Para o Modal Cadastro de Devs
    const {modalVisible, setModalCadastrarDevVisible} = useContext(Context);
    const {textNome, setTextNome} = useContext(Context);
    const {textNivel, setTextNivel} = useContext(Context);
    const {textIdade,setTextIdade} = useContext(Context);
    const {textDataNascimento, setTextDataNascimento} = useContext(Context);
    const {textHobby, setTextHobby} = useContext(Context);
    const {textSexo,setTextSexo} = useContext(Context);
    return(
        <Modal
            animationType="fade"
            statusBarTranslucent={true}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            console.log('Modal has been closed.');
            setModalCadastrarDevVisible(false);
            }}> 
            <TouchableOpacity 
            style={styles.centeredModalView} 
            onPress={() => setModalCadastrarDevVisible(false)}
            activeOpacity={10}
            > 
                <TouchableOpacity 
                    style={styles.modalView} 
                    onPress={() => {}} 
                    activeOpacity={10}
                >
                    <Text style={styles.modalText}>Cadastrar Novo Desenvolvedor</Text>
                    <TextInput
                        label="Nível"
                        value={textNivel}
                        mode='outlined'
                        outlineColor={'black'}
                        activeOutlineColor={'red'}
                        dense={true}
                        style={styles.Formulario}
                        theme={DefaultTheme}
                        onChangeText={textNivel => setTextNivel(textNivel)}
                    />
                    <TextInput
                    label="Nome"
                    value={textNome}
                    mode='outlined'
                    outlineColor={'black'}
                    activeOutlineColor={'red'}
                    dense={true}
                    style={styles.Formulario}
                    theme={DefaultTheme}
                    onChangeText={textNome => setTextNome(textNome)}
                    />
                    <TextInput
                    label="Sexo"
                    value={textSexo}
                    mode='outlined'
                    outlineColor={'black'}
                    activeOutlineColor={'red'}
                    dense={true}
                    style={styles.Formulario}
                    theme={DefaultTheme}
                    onChangeText={textSexo => setTextSexo(textSexo)}
                    />
                    <TextInput
                    label="Data de Nascimento"
                    value={textDataNascimento}
                    mode='outlined'
                    outlineColor={'black'}
                    activeOutlineColor={'red'}
                    dense={true}
                    style={styles.Formulario}
                    theme={DefaultTheme}
                    onChangeText={textDataNascimento => setTextDataNascimento(textDataNascimento)}
                    />
                    <TextInput
                    label="Idade"
                    value={textIdade}
                    mode='outlined'
                    outlineColor={'black'}
                    activeOutlineColor={'red'}
                    dense={true}
                    style={styles.Formulario}
                    theme={DefaultTheme}
                    onChangeText={textIdade => setTextIdade(textIdade)}
                    />
                    <TextInput
                    label="Hobby"
                    value={textHobby}
                    mode='outlined'
                    outlineColor={'black'}
                    activeOutlineColor={'red'}
                    dense={true}
                    style={styles.Formulario}
                    theme={DefaultTheme}
                    onChangeText={textHobby => setTextHobby(textHobby)}
                    />
                    <View style={styles.BotoesFormularios}>
                        <TouchableOpacity style={styles.buttonCancelar} onPress={() => setModalCadastrarDevVisible(false)}>
                            <Text style={styles.textStyle}>Cancelar</Text>
                            </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCadastrar}>
                            <Text style={styles.textStyle}>Cadastrar</Text>
                            </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalCadastrarDev;