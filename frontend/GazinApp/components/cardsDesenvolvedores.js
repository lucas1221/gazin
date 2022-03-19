import {Card, Paragraph, Button, Avatar}  from 'react-native-paper';
import { TouchableOpacity, View, Text } from 'react-native'; 
import styles from '../screens/Styles';
import React, { useState, useContext } from 'react';
import { Context } from '../services/Context';

// Avatar Para o Card dos Devs
const LeftContent = props => <Avatar.Icon {...props} icon="account-circle" />

function CardsDesenvolvedores() 
{
    // States para os Modais de Editar e Excluir Desenvolvedores
    const {modalEditarDevVisible, setModalEditarDevVisible} = useContext(Context);
    const {modalExcluirDevVisible, setModalExcluirDevVisible} = useContext(Context);
    return(
        <View>
            <Card style={styles.CardDevs}>
                <Card.Title title="Nome do Desenvolvedor" subtitle="Dados do Desenvolvedor:"  left={LeftContent}/>
                <Card.Content>
                    <View>
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph>Idade: </Paragraph>
                            <Paragraph>18 Anos</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph>Sexo: </Paragraph>
                            <Paragraph>M</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph>Data de Nascimento: </Paragraph>
                        <Paragraph>18/12/1990</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph>Hobby: </Paragraph>
                        <Paragraph>Passear no Parque</Paragraph>
                    </View>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <View style={styles.BotoesCards}>
                            <TouchableOpacity style={styles.buttonEditarCards} onPress={() => setModalEditarDevVisible(!modalEditarDevVisible)}>
                                
                                <Text style={styles.textStyle}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonExcluirCards} onPress={() => setModalExcluirDevVisible(!modalExcluirDevVisible)}>
                                
                                <Text style={styles.textStyle}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>
            <Card style={styles.CardDevs}>
                <Card.Title title="Nome do Desenvolvedor" subtitle="Dados do Desenvolvedor:"  left={LeftContent}/>
                <Card.Content>
                    <View>
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph>Idade: </Paragraph>
                            <Paragraph>18 Anos</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph>Sexo: </Paragraph>
                            <Paragraph>M</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph>Data de Nascimento: </Paragraph>
                        <Paragraph>18/12/1990</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph>Hobby: </Paragraph>
                        <Paragraph>Passear no Parque</Paragraph>
                    </View>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <View style={styles.BotoesCards}>
                            <TouchableOpacity style={styles.buttonEditarCards} onPress={() => setModalEditarDevVisible(!modalEditarDevVisible)}>
                                
                                <Text style={styles.textStyle}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonExcluirCards} onPress={() => setModalExcluirDevVisible(!modalExcluirDevVisible)}>
                                
                                <Text style={styles.textStyle}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>
            <Card style={styles.CardDevs}>
                <Card.Title title="Nome do Desenvolvedor" subtitle="Dados do Desenvolvedor:"  left={LeftContent}/>
                <Card.Content>
                    <View>
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph>Idade: </Paragraph>
                            <Paragraph>18 Anos</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph>Sexo: </Paragraph>
                            <Paragraph>M</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph>Data de Nascimento: </Paragraph>
                        <Paragraph>18/12/1990</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph>Hobby: </Paragraph>
                        <Paragraph>Passear no Parque</Paragraph>
                    </View>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <View style={styles.BotoesCards}>
                            <TouchableOpacity style={styles.buttonEditarCards} onPress={() => setModalEditarDevVisible(!modalEditarDevVisible)}>
                                
                                <Text style={styles.textStyle}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonExcluirCards} onPress={() => setModalExcluirDevVisible(!modalExcluirDevVisible)}>
                                
                                <Text style={styles.textStyle}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>
            <Card style={styles.CardDevs}>
                <Card.Title title="Nome do Desenvolvedor" subtitle="Dados do Desenvolvedor:"  left={LeftContent}/>
                <Card.Content>
                    <View>
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph>Idade: </Paragraph>
                            <Paragraph>18 Anos</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph>Sexo: </Paragraph>
                            <Paragraph>M</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph>Data de Nascimento: </Paragraph>
                        <Paragraph>18/12/1990</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph>Hobby: </Paragraph>
                        <Paragraph>Passear no Parque</Paragraph>
                    </View>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <View style={styles.BotoesCards}>
                            <TouchableOpacity style={styles.buttonEditarCards} onPress={() => setModalEditarDevVisible(!modalEditarDevVisible)}>
                                
                                <Text style={styles.textStyle}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonExcluirCards} onPress={() => setModalExcluirDevVisible(!modalExcluirDevVisible)}>
                                
                                <Text style={styles.textStyle}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>
            <Card style={styles.CardDevs}>
                <Card.Title title="Nome do Desenvolvedor" subtitle="Dados do Desenvolvedor:"  left={LeftContent}/>
                <Card.Content>
                    <View>
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph>Idade: </Paragraph>
                            <Paragraph>18 Anos</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                            <Paragraph>Sexo: </Paragraph>
                            <Paragraph>M</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph>Data de Nascimento: </Paragraph>
                        <Paragraph>18/12/1990</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph>Hobby: </Paragraph>
                        <Paragraph>Passear no Parque</Paragraph>
                    </View>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <View style={styles.BotoesCards}>
                            <TouchableOpacity style={styles.buttonEditarCards} onPress={() => setModalEditarDevVisible(!modalEditarDevVisible)}>
                                
                                <Text style={styles.textStyle}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonExcluirCards} onPress={() => setModalExcluirDevVisible(!modalExcluirDevVisible)}>
                                
                                <Text style={styles.textStyle}>Excluir</Text>
                            </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>
        </View>
    );
};

export default CardsDesenvolvedores;