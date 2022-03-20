import styles from "../screens/Styles";
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../services/Context';
import instancia from "../services/api";

function ModalExcluirNivel() {
     
    const {modalExcluirLevelVisible, setModalExcluirLevelVisible} = useContext(Context);
    const {idExcluirLevel} = useContext(Context);

    const handleDeleteLevels = async (idExcluirLevel) => {   
        const id = idExcluirLevel;
        instancia
       .delete(`/api/niveis/${id}`)        
       .then((response) => {
               console.log("Delete do Level Response")
               console.log(response.data);
               setModalExcluirLevelVisible(false);
               instancia.get('/api/niveis/allNiveis');
               alert("Nivel Excluido com Sucesso!")
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
            visible={modalExcluirLevelVisible}
            onRequestClose={() => {
            console.log('Modal has been closed.');
            setModalExcluirLevelVisible(false);}}
        > 
            <TouchableOpacity 
                style={styles.centeredModalView} 
                onPress={() => setModalExcluirLevelVisible(false)}
                activeOpacity={10}
            > 
                <TouchableOpacity 
                    style={styles.modalView} 
                    onPress={() => {}} 
                    activeOpacity={10}
                >
                    <Text style={styles.modalText}>Deseja Realmente Excluir esse Nível ?</Text>
                    
                    <View style={styles.BotoesFormularios}>
                        <TouchableOpacity style={styles.buttonCancelar} onPress={() => setModalExcluirLevelVisible(false)}>
                            <Text style={styles.textStyle}>Não</Text>
                            </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCadastrar} onPress={() => handleDeleteLevels(idExcluirLevel)}>
                            <Text style={styles.textStyle}>Sim</Text>
                            </TouchableOpacity>
                    </View>
                
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalExcluirNivel;