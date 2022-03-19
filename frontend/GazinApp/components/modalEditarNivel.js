import styles from "../screens/Styles";
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import { TextInput, DefaultTheme } from "react-native-paper";
import React, { useContext } from 'react';
import { Context } from '../services/Context';

function ModalEditarNivel() {
  // Editar Nivel
  const {modalEditarLevelVisible, setModalEditarLevelVisible} = useContext(Context);
  const {textEditarLevel, setTextEditarLevel} = useContext(Context);
    return(
        <Modal
            animationType="fade"
            statusBarTranslucent={true}
            transparent={true}
            visible={modalEditarLevelVisible}
            onRequestClose={() => {
            console.log('Modal has been closed.');
            setModalEditarLevelVisible(false);}}
        > 
            <TouchableOpacity 
            style={styles.centeredModalView} 
            onPress={() => setModalEditarLevelVisible(false)}
            activeOpacity={10}
            > 
                <TouchableOpacity 
                    style={styles.modalView} 
                    onPress={() => {}} 
                    activeOpacity={10}
                >
                    <Text style={styles.modalText}>Editar o Nível</Text>
                    <TextInput
                        label="Atualizar o Nível"
                        value={textEditarLevel}
                        mode='outlined'
                        outlineColor={'black'}
                        activeOutlineColor={'red'}
                        dense={true}
                        style={styles.Formulario}
                        theme={DefaultTheme}
                        onChangeText={textEditarLevel => setTextEditarLevel(textEditarLevel)}
                    />
                    <View style={styles.BotoesFormularios}>
                        <TouchableOpacity style={styles.buttonCancelar} onPress={() => setModalEditarLevelVisible(false)}>
                            <Text style={styles.textStyle}>Cancelar</Text>
                            </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCadastrar}>
                            <Text style={styles.textStyle}>Atualizar</Text>
                            </TouchableOpacity>
                    </View>
                
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalEditarNivel;