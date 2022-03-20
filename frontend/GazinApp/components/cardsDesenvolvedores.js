import {Card, Paragraph, Avatar}  from 'react-native-paper';
import { TouchableOpacity, View, Text } from 'react-native'; 
import styles from '../screens/Styles';
import React, { useContext } from 'react';
import { Context } from '../services/Context';
import instancia from '../services/api';
// Avatar Para o Card dos Devs
const LeftContent = props => <Avatar.Icon {...props} icon="account-circle" />

function CardsDesenvolvedores() 
{
    // Dispatches para os Modais de Editar e Excluir Desenvolvedores
    const {dispatch} = useContext(Context);
    const {dispatchExcluirDev} = useContext(Context);
    
    // useEffect  para a API ----> METODO GET
    React.useEffect( () => {
        instancia
          .get('/api/desenvolvedores/allDevs')
          .then((response) => {
            console.log("GET Response")
            console.log(response.data);
            setData(response.data);
            instancia.get('/api/desenvolvedores/allDevs');
        })
        .catch(function () {
            console.log("Erro ao fazer o fetch das updates");
        });  
    }, []);
    // Obter os Devs no Servidor
    const {data, setData} = useContext(Context);

    return(
        <View>
            {data.map(desenvolvedor => (
            <Card style={styles.CardDevs} key={desenvolvedor.id}>
                <Card.Title title={desenvolvedor.nome} subtitle="Dados do Desenvolvedor:"  left={LeftContent}/>
                <Card.Content>
                    <View>
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph style={{fontWeight: 'bold'}}>Nível: </Paragraph>
                            <Paragraph>{desenvolvedor.devnivel}</Paragraph>
                    </View>    
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph style={{fontWeight: 'bold'}}>Idade: </Paragraph>
                            <Paragraph>{desenvolvedor.idade}</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph style={{fontWeight: 'bold'}}>Sexo: </Paragraph>
                            <Paragraph>{desenvolvedor.sexo}</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph style={{fontWeight: 'bold'}}>Data de Nascimento: </Paragraph>
                        <Paragraph>{desenvolvedor.datadenascimento}</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph style={{fontWeight: 'bold'}}>Hobby: </Paragraph>
                        <Paragraph>{desenvolvedor.hobby}</Paragraph>
                    </View>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <View style={styles.BotoesCards}>
                            <TouchableOpacity style={styles.buttonEditarCards} onPress={() => dispatch({type: 'update users', payload: desenvolvedor.id})}>
                                <Text style={styles.textStyle}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonExcluirCards} onPress={() => dispatchExcluirDev({type: 'delete users', payload: desenvolvedor.id})}>
                                <Text style={styles.textStyle}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>
          ))}
        </View>
    );
};

export default CardsDesenvolvedores;