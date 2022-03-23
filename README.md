# Gazin-Tech-Challenge
Essa é minha implementação para o Desafio Full Stack: https://github.com/gazin-tech/Desafio-FullStack

"O projeto consiste em uma aplicação onde o candidato deverá desenvolver uma aplicação na linguagem que desejar, criando um Backend e um Frontend que deverão estar interligados através de uma API REST JSON."

# Backend
![image](https://user-images.githubusercontent.com/51690058/158933009-f3c19eef-f9b6-4d6b-b527-e1734cf397a2.png)

Para o Desenvolvimento do Backend (API REST JSON) foi escolhida a seguinte STACK: 
* Node.js 
* Express 
* MySQL ( Por meio do pacote XAMPP )
* Sequelize ( É uma ORM que facilita demais a manipulação/transações SQL )
* Nodemon: Ajudou no desenvolvimento do servidor (evitando ter que derrubar o mesmo a cada alteração feita)

O Servidor está configurado na porta 8080, localhost

Todas as requisições de GET,PUT,POST,DELETE implementadas 

## Estrutura do Banco de Dados: 
![image](https://i.imgur.com/FrlGUBJ.jpg)

## Estrutura das Pastas da API:
Os diretórios do projeto estão divididos da seguinte maneira: 
* Pasta Principal: 'gazin'
* Subpastas: 'backend', 'frontend'
* Dentro da pasta backend: 
* * 'config': Contém o arquivo 'dbconfig.js' ( utilizado na configuração do Banco de Dados MySQL )
* * 'controllers': Contém os arquivos para configurações de Controllers da API 
* *  'models': Contém os arquivos para configurações de Models da API  
* *  'routes': Contém os arquivos para configurações de Rotas 
* *  'SQL e Imagens': Contém o  do Banco de Dados e a modelagem mostrada na seção acima
## Como executar e iniciar a API: 
Para a inicialização da API, é necessário: 
- [XAMPP](https://www.apachefriends.org/pt_br/download.html)
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/getting-started/install) para instalar as dependências

Após a instalação deles:
* Clonar o repositório: 
```bash
git clone https://github.com/lucas1221/gazin.git
```
* Instalação de Dependência: 
```bash
npm install
``` 
ou

```bash
yarn install
``` 
* Executar: 

Inicializar o XAMPP: Ativar as opções: APACHE e MySQL apenas 
* O  do Banco de Dados está no diretório: gazin/backend/SQL e Imagens/gazin.sql
* Deve ser utilizado para ser importado ao XAMPP no PHPMyAdmin

* Por fim: 
Acessar o diretório do backend
```bash
cd caminho do backend../backend/ 
``` 
Executar com: 

```bash
nodemon server.js
``` 
ou 

```bash
node server.js
``` 
E o servidor estará rodando ! 

* Obs: lembrando que o  do Banco de Dados está na Pasta: gazin/backend/SQL e Imagens/gazin.sql 
caso haja algum problema com o banco

# FrontEnd
![image](https://user-images.githubusercontent.com/51690058/158938308-1d52f67b-f3bb-4010-bcde-394530d30ed2.png)

O Frontend foi completamente desenvolvido com React Native em conjunto com o Expo ( para facilitar a execução do mesmo e evitar problemas com dependências )

Para o Desenvolvimento do FrontEnd, Foram escolhidas as seguintes bibliotecas: 
* React/React Native 
* Axios ( Manipulação de dados com a API )  
* React-Native-Paper ( UI )
* React-Native-Paper-Tabs
# Imagens do App: 
![image](https://i.imgur.com/vfZbYx9.jpg)
![image](https://i.imgur.com/8Ce52I8.jpg)
![image](https://i.imgur.com/uzdsi7g.jpg)
![image](https://i.imgur.com/xO5OOgD.jpg)
![image](https://i.imgur.com/jzNTUZq.jpg)
![image](https://i.imgur.com/6aKeBJx.jpg)
![image](https://i.imgur.com/GUGXsiT.jpg)
![image](https://i.imgur.com/ESCSKZc.jpg)
## Estrutura das Pastas do APP:
Os diretórios do projeto estão divididos da seguinte maneira: 
* Pasta Principal: 'gazinApp': Contém o App.js  ( só passei os Providers ) 
* Subpastas: 'Screens', 'Components' e 'Services' 
* * 'Services': Contém os arquivos 'api' e 'Context' ( Extremamente uteis para configurar Hooks, Context API e a API em si )
* * 'Components': Dividi o código em diversos Components para ficar bem organizado 
* *  'Screens': No caso a Tela Principal e os Styles  
* *  'Assets': Para recursos visuais, porém não foram muito utilizados 

## Considerações 
Desenvolvi usando o belo padrão Material Design, a API e a Aplicativo são um CRUD Completo e fiz muito uso de Context e Reducers. 
Futuramente Adicionarei Features como Busca e Alterar/Remover Devs ou Níveis pelo Float Action Button
Foi um Excelente Desafio !!!! Agradeço pela Oportunidade 

## Como executar e iniciar o APP:
Para a inicialização da API, é necessário: 
- [Expo]()
```bash
npm install -g expo-cli
``` 

Após a instalação do Expo:
* Instalação de Dependência: 
```bash
npm install
``` 
ou

```bash
yarn install
``` 
* Executar:
* Caso queira no seu Android:  
```bash
yarn android
``` 
* Versão Web achei até interessante, mas não está otimizada, o foco foi o mobile
```bash
yarn web
```
# Relembrando a Ordem de Inicializar: 
* Xampp: Apache e Mysql 
* BackEnd: Iniciar o server.js com 'nodemon server.js'
* FrontEnd: Iniciar o App 'yarn android'
## License
[MIT](https://choosealicense.com/licenses/mit/)







