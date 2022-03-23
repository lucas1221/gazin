import styles from "../screens/Styles";
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../services/Context';
import instancia from "../services/api";

function ModalExcluirDev() {
    const {modalExcluirDevVisible, setModalExcluirDevVisible} = useContext(Context);
    const {idExcluirDev} = useContext(Context);


    const handleDelete = async (idExcluirDev) => {   
         await instancia
        .delete(`/api/desenvolvedores/${idExcluirDev}`)        
        .then((response) => {
                console.log("Delete do Dev Response")
                console.log(response.data);
                setModalExcluirDevVisible(false);
                instancia.get('/api/desenvolvedores/allDevs');
            })
            .catch(function (error) {
                console.log("Erro ao Deletar");
            });
        };
    
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
                    <TouchableOpacity style={styles.buttonCadastrar} onPress={() => handleDelete(idExcluirDev)}>
                        <Text style={styles.textStyle}>Sim</Text>
                        </TouchableOpacity>
                </View>
            
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalExcluirDev;