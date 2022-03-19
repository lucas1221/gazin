import styles from "../screens/Styles";
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../services/Context';

function ModalExcluirDev() {
    const {modalExcluirDevVisible, setModalExcluirDevVisible} = useContext(Context);
    return(
        <Modal
            animationType="fade"
            statusBarTranslucent={true}
            transparent={true}
            visible={modalExcluirDevVisible}
            onRequestClose={() => {
            console.log('Modal has been closed.');
            setModalExcluirDevVisible(false);
        }}> 
            <TouchableOpacity 
            style={styles.centeredModalView} 
            onPress={() => setModalExcluirDevVisible(false)}
            activeOpacity={10}
            > 
                <TouchableOpacity 
                    style={styles.modalView} 
                    onPress={() => {}} 
                    activeOpacity={10}
                >
                <Text style={styles.modalText}>Deseja Realmente Excluir esse Desenvolvedor ?</Text>
                
                <View style={styles.BotoesFormularios}>
                    <TouchableOpacity style={styles.buttonCancelar} onPress={() => setModalExcluirDevVisible(false)}>
                        <Text style={styles.textStyle}>Não</Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCadastrar}>
                        <Text style={styles.textStyle}>Sim</Text>
                        </TouchableOpacity>
                </View>
            
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalExcluirDev;