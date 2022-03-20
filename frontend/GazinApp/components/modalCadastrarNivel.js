import styles from "../screens/Styles";
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import { TextInput, DefaultTheme } from "react-native-paper";
import React, { useContext } from 'react';
import { Context } from '../services/Context';
import instancia from "../services/api";

function ModalCadastrarNivel() {
     // Para o Modal Cadastro de Níveis
     const {modalNiveisVisible, setModalCadastrarNivelVisible} = useContext(Context);
     const {textLevel, setTextLevel} = useContext(Context);
     const handlePost = async () => {
        instancia
        .post('/api/niveis/addNiveis',
            {
                idniveis: null,
                nivel: textLevel,
            })
            .then((response) => {
                console.log("POST Response")
                console.log(response.data);
                setModalCadastrarNivelVisible(false);
            })
            .catch(function (error) {
                console.log("Erro ao Cadastrar");
            });
         };
    return(
        <Modal
            animationType="fade"
            statusBarTranslucent={true}
            transparent={true}
            visible={modalNiveisVisible}
            onRequestClose={() => {
            console.log('Modal has been closed.');
            setModalCadastrarNivelVisible(false);
            }}
        > 
            <TouchableOpacity 
            style={styles.centeredModalView} 
            onPress={() => setModalCadastrarNivelVisible(false)}
            activeOpacity={10}
            > 
                <TouchableOpacity 
                    style={styles.modalView} 
                    onPress={() => {}} 
                    activeOpacity={10}
                >
                    <Text style={styles.modalText}>Cadastrar Novo Nível</Text>
                    <TextInput
                        label="Digite O Nível"
                        value={textLevel}
                        mode='outlined'
                        outlineColor={'black'}
                        activeOutlineColor={'red'}
                        dense={true}
                        style={styles.Formulario}
                        theme={DefaultTheme}
                        onChangeText={textLevel => setTextLevel(textLevel)}
                    />
                    
                    <View style={styles.BotoesFormularios}>
                        <TouchableOpacity style={styles.buttonCancelar} onPress={() => setModalCadastrarNivelVisible(false)}>
                            <Text style={styles.textStyle}>Cancelar</Text>
                            </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCadastrar} onPress={handlePost}>
                            <Text style={styles.textStyle}>Cadastrar</Text>
                            </TouchableOpacity>
                    </View>
            
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalCadastrarNivel;