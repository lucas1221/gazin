import {Card, Avatar}  from 'react-native-paper';
import { View, TouchableOpacity, Text } from 'react-native'; 
import styles from '../screens/Styles';
import React, { useState, useContext } from 'react';
import { Context } from '../services/Context';
// Avatar Para o Card dos Níveis
const LeftContent = props => <Avatar.Icon {...props} icon="chevron-up-circle-outline" />

function CardsNiveis() 
{
    // States para os Modais
    const {modalEditarLevelVisible, setModalEditarLevelVisible} = useContext(Context);
    const {modalExcluirLevelVisible, setModalExcluirLevelVisible} = useContext(Context);

    return(
        <View>
            <Card style={styles.CardDevs}>
                <Card.Title title="Nível" left={LeftContent}/>
                <Card.Actions>
                    <View style={styles.BotoesCards}>
                            <TouchableOpacity style={styles.buttonEditarCards} onPress={() => setModalEditarLevelVisible(!modalEditarLevelVisible)}> 
                                <Text style={styles.textStyle}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonExcluirCards} onPress={() => setModalExcluirLevelVisible(!modalExcluirLevelVisible)}>
                                <Text style={styles.textStyle}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>

            <Card style={styles.CardDevs}>
                <Card.Title title="Nível" left={LeftContent}/>
                <Card.Actions>
                    <View style={styles.BotoesCards}>
                            <TouchableOpacity style={styles.buttonEditarCards} onPress={() => setModalEditarLevelVisible(!modalEditarLevelVisible)}> 
                                <Text style={styles.textStyle}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonExcluirCards} onPress={() => setModalExcluirLevelVisible(!modalExcluirLevelVisible)}>
                                <Text style={styles.textStyle}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>

            <Card style={styles.CardDevs}>
                <Card.Title title="Nível" left={LeftContent}/>
                <Card.Actions>
                    <View style={styles.BotoesCards}>
                            <TouchableOpacity style={styles.buttonEditarCards} onPress={() => setModalEditarLevelVisible(!modalEditarLevelVisible)}> 
                                <Text style={styles.textStyle}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonExcluirCards} onPress={() => setModalExcluirLevelVisible(!modalExcluirLevelVisible)}>
                                <Text style={styles.textStyle}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>

            <Card style={styles.CardDevs}>
                <Card.Title title="Nível" left={LeftContent}/>
                <Card.Actions>
                    <View style={styles.BotoesCards}>
                            <TouchableOpacity style={styles.buttonEditarCards} onPress={() => setModalEditarLevelVisible(!modalEditarLevelVisible)}> 
                                <Text style={styles.textStyle}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonExcluirCards} onPress={() => setModalExcluirLevelVisible(!modalExcluirLevelVisible)}>
                                <Text style={styles.textStyle}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>

            <Card style={styles.CardDevs}>
                <Card.Title title="Nível" left={LeftContent}/>
                <Card.Actions>
                    <View style={styles.BotoesCards}>
                            <TouchableOpacity style={styles.buttonEditarCards} onPress={() => setModalEditarLevelVisible(!modalEditarLevelVisible)}> 
                                <Text style={styles.textStyle}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonExcluirCards} onPress={() => setModalExcluirLevelVisible(!modalExcluirLevelVisible)}>
                                <Text style={styles.textStyle}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>
        </View>
    );
};

export default CardsNiveis;