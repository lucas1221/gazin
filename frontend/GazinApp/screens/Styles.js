import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get('window').width; // para obter as dimensoes do dispositivo

const styles = StyleSheet.create({
    // estilo geral 
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // estilo da NavBar
    navbar : {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 27,
      backgroundColor: 'red',
    },
    tituloHeader: {
      fontSize: 23,
    },
    // Estilo do FAB
    fab: {
      width: 60,  
      height: 60,   
      borderRadius: 50,            
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',                                    
    },
    // View dos Cards
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FAEBE8',
    },
    // Estilo Geral dos Cards para Devs e Niveis
    CardDevs: {
        width: width *.9,
        maxWidth: width *.9, 
        margin: 10, 
        justifyContent: 'center', 
        alignSelf: 'center', 
        borderRadius: 35,
        borderColor: 'black',
        borderWidth: 1,
      },
    /*para Modal*/
    // View do Modal
    centeredModalView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    // Estilo do Modal Interno
    modalView: {
      margin: 50,
      backgroundColor: 'white',
      borderRadius: 30,
      borderColor: 'black',
      borderWidth: 5,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.50,
      shadowRadius: 4,
      elevation: 10,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: 'red',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop: 30
    },
    buttonCadastrar: {
      backgroundColor: 'green',
      borderRadius: 25,
      padding: 10,
      elevation: 2,
      marginTop: 20,
      marginLeft: 30,
    },
    buttonCancelar: {
      backgroundColor: 'red',
      borderRadius: 25,
      padding: 10,
      elevation: 2,
      marginTop: 20,
      marginRight: 30,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
    },
    modalText: {
      textAlign: 'center',
      fontSize: 25,
    },
    // Forms do App
    Formulario: {
      maxHeight: 60,
      maxWidth: width * .75,
      width: width * .75,
      margin: 10,
    },
    BotoesFormularios: {
      flexDirection: 'row',
      marginHorizontal: 20,
    },
    // Não foi Utilizado
    iconeBotao: {
      flexDirection: 'row',
      marginHorizontal: 20,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red'
    },
    buttonExcluirCards: {
      backgroundColor: 'red',
      borderRadius: 15,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: width * .28,
      flexDirection: 'row',
    },
    buttonEditarCards: {
      backgroundColor: 'red',
      borderRadius: 15,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: width * .25,
      flexDirection: 'row',
    },
    BotoesCards: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
  });
  
export default styles;


