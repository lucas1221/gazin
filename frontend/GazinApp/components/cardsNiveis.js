import {Card, Avatar}  from 'react-native-paper';
import { View, TouchableOpacity, Text } from 'react-native'; 
import styles from '../screens/Styles';
import React, { useContext } from 'react';
import { Context } from '../services/Context';
import instancia from '../services/api';

// Avatar Para o Card dos Níveis
const LeftContent = props => <Avatar.Icon {...props} icon="chevron-up-circle-outline" />


function CardsNiveis() 
{
    // useEffect  para a API ----> METODO GET
    React.useEffect( () => {
            instancia
              .get('/api/niveis/allNiveis')
              .then((response) => {
                console.log("GET Response")
                console.log(response.data);
                setNivel(response.data);
            })
            .catch(function (error) {
                console.log("Erro ao fazer o fetch das updates");
            });  
    }, []);

    // Hook para os Modais de Editar e Excluir Desenvolvedores
    const {dispatchEditarLevel} = useContext(Context);
    const {dispatchExcluirLevel} = useContext(Context);
    // Obter os Níveis no Servidor
    const {nivel, setNivel} = useContext(Context);

    return(
                <View>
                    {nivel.map(nivel => (
                    <Card style={styles.CardDevs} key={nivel.idniveis}>
                        <Card.Title title={nivel.nivel} left={LeftContent}/>
                        <Card.Actions>
                            <View style={styles.BotoesCards}>
                                    <TouchableOpacity style={styles.buttonEditarCards} onPress={() => dispatchEditarLevel({type: 'update levels', payload: nivel.idniveis})}> 
                                        <Text style={styles.textStyle}>Editar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonExcluirCards} onPress={() => dispatchExcluirLevel({type: 'delete levels', payload: nivel.idniveis})}>
                                        <Text style={styles.textStyle}>Excluir</Text>
                                    </TouchableOpacity>
                            </View>
                        </Card.Actions>
                    </Card>
                    ))}
                </View>
            );
};


export default CardsNiveis;