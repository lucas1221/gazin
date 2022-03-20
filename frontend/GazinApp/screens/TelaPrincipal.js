import { View, ScrollView } from 'react-native';
import {
  Appbar,
  Searchbar,
  FAB,
  Portal, 
  Provider,
  DefaultTheme, 
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  Tabs,
  TabScreen,
} from 'react-native-paper-tabs';
import React, { useContext } from 'react';
import styles from './Styles';
import CardsDesenvolvedores from '../components/cardsDesenvolvedores';
import CardsNiveis from '../components/cardsNiveis';
import { Context } from '../services/Context';
import ModalCadastrarDev from '../components/modalCadastrarDev';
import ModalEditarDev from '../components/ModalEditarDev';
import ModalExcluirDev from '../components/modalExcluirDev';
import ModalCadastrarNivel from '../components/modalCadastrarNivel';
import ModalEditarNivel from '../components/modalEditarNivel';
import ModalExcluirNivel from '../components/modalExcluirNivel';

function TelaPrincipal()  
{     
    // Para as Cores do Aplicativo
    const theme = {
    ...DefaultTheme,
    roundness: 3,
    colors: {
        ...DefaultTheme.colors,
        primary: 'red',
        accent: 'red',
        backdrop: 'red',
        notification: 'red',
        },
    };

    /*Divisão dos States Necessários */
    // Para fazer a busca ( Feature Futura )
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    
    // Para o FAB ( Botão Vermelho flutuante )
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    // Para os Modais de Cadastro, Editar e Excluir Devs
    const {modalVisible, setModalCadastrarDevVisible} = useContext(Context);
    const {modalEditarDevVisible} = useContext(Context);
    const {modalExcluirDevVisible} = useContext(Context);

    // Para o Modal Cadastro de Níveis
    const {modalNiveisVisible, setModalCadastrarNivelVisible} = useContext(Context);
    // States para os Modais
    const {modalEditarLevelVisible} = useContext(Context);
    const {modalExcluirLevelVisible} = useContext(Context);
    // Para os Formularios

    return(
        <PaperProvider theme={theme}>
            <Appbar style={styles.navbar}>
                <Appbar.Content title="Sistema de Cadastro de Devs" titleStyle={styles.tituloHeader} color="white" />
            </Appbar>
                
            <Searchbar
                placeholder="Digite o nome do Desenvolvedor"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            <Tabs
                defaultIndex={0} 
                style={{ backgroundColor:'#fff' }} 
                mode="fixed"
            >
            
            <TabScreen 
                label="Desenvolvedores" 
                icon="xml"
            >

                <View style={styles.centeredView}>
                    { modalVisible ? <ModalCadastrarDev/> : null }
                    { modalEditarDevVisible ? <ModalEditarDev/>: null }
                    { modalExcluirDevVisible ? <ModalExcluirDev/>  : null }
                    <ScrollView>
                        <CardsDesenvolvedores/>
                    </ScrollView>    
                    
                    <Provider>
                    <Portal>
                        <FAB.Group
                            open={open}
                            icon={open ? 'window-close' : 'pencil-plus-outline'}
                            color="white"
                            theme={DefaultTheme}
                            fabStyle={styles.fab}
                            actions={[
                                {
                                icon: 'plus',
                                label: 'Adicionar Desenvolvedor',
                                onPress: () => setModalCadastrarDevVisible(true),
                                small: false,
                                labelTextColor: 'black',
                                color: 'black',
                                },
                                {
                                icon: 'pencil-outline',
                                label: 'Atualizar Desenvolvedor',
                                onPress: () => console.log('Pressed Atualizar Dev'),
                                small: false,
                                disabled: true,
                                labelTextColor: 'black',
                                color: 'black',
                                },
                                {
                                icon: 'trash-can-outline',
                                label: 'Remover Desenvolvedor',
                                disabled: true,
                                onPress: () => {console.log('Pressed Remover Dev')},
                                small: false,
                                labelTextColor: 'black',
                                color: 'black',
                                },
                            ]}
                            onStateChange={onStateChange}
                            onPress={() => {
                                if (open) {
                                
                                }
                            }}
                        />
                    </Portal>
                   </Provider>
                    
                </View>
            </TabScreen>
            <TabScreen
                label="Níveis"
                icon="chevron-triple-up"
            >
                <View style={styles.centeredView}>
                { modalNiveisVisible ? <ModalCadastrarNivel/> : null }
                { modalEditarLevelVisible ? <ModalEditarNivel/>: null }
                { modalExcluirLevelVisible ? <ModalExcluirNivel/> : null }
                <ScrollView>
                    <CardsNiveis/>
                </ScrollView>
                <Provider>
                    <Portal>
                        <FAB.Group
                        open={open}
                        icon={open ? 'window-close' : 'pencil-plus-outline'}
                        color="white"
                        theme={DefaultTheme}
                        fabStyle={styles.fab}
                        onStateChange={onStateChange}
                        onPress={() => {
                            if (open) {
                            
                            }
                        }}
                        actions={[
                            {
                            icon: 'plus',
                            label: 'Adicionar Nível',
                            onPress: () => setModalCadastrarNivelVisible(true),
                            small: false,
                            labelTextColor: 'black',
                            color: 'black',
                            },
                            {
                            icon: 'pencil-outline',
                            label: 'Atualizar Nível',
                            onPress: () => console.log('Pressed Atualizar Nível'),
                            small: false,
                            labelTextColor: 'black',
                            color: 'black',
                            },
                            {
                            icon: 'trash-can-outline',
                            label: 'Remover Nível',
                            onPress: () => console.log('Pressed Remover Nível'),
                            small: false,
                            labelTextColor: 'black',
                            color: 'black',
                            },
                        ]}
                        />
                    </Portal>
                    </Provider>
                </View>
            </TabScreen>
            </Tabs>             
        </PaperProvider>
    );
};

export default TelaPrincipal;