# Semana OmniStack 11 - Be The Hero

## Introdução

Be The Hero é uma aplicação de cadastro de ONGs e casos onde pessoas podem contribuir com doações de quantias para realizar os procedimentos de cada caso, como por exemplo uma cirurgia para uma cadelinha atropelada.

No app mobile é listado os casos cadastrados por cada ONG com e caso alguém se interesse a ajudar, pode-se entrar em contato diretamente por whatsapp ou e-mail.

## Como usar a aplicação

Clone o repositório ou faça download em .zip

## Instalar dependencias

```
# backend
$ cd backend
$ npm install

# frontend
$ cd frontend
$ npm install

# mobile
$ cd mobile
$ npm install
```

## Subir a API

```
# backend
$ cd backend
$ npm start
```
A API irá receber requisições no endereço http://localhost:3333

## Subir a aplicação Web

```
# frontend
$ cd frontend
$ npm start
```

A aplicação Web irá funcionar no endereço http://localhost:3000

## App mobile

Existem 2 possibilidades de rodar o app mobile, com um emulador de android/iOS como por exemplo o android studio, genymotion ou o próprio emulador iOS que vem com o Xcode, ou com o seu próprio dispositivo físico utilizando o expo-cli que é como irei mostrar aqui.

### Expo-Cli

```
$ npm install -g expo-cli
```

## Subir o app mobile

```
# mobile
$ cd mobile
$ npm start
```

Quando o app mobile executar, irá abrir uma página do expo informando que está pronto, nesse momento se faz necessário fazer download do app expo na sua loja de aplicativos google play ou app store.

[Expo - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)
[Expo - App Store](https://apps.apple.com/us/app/expo-client/id982107779)

Após a instalação do app expo, abra a camera do seu dispositivo físico e aponte para o QR Code que fica na página que o expo abriu quando foi iniciado e clique no ícone para ir para o link copiado. Pronto isso fará com que a aplicação inicie utilizando o app expo.

## Algumas imagens da aplicação

#### Logon
![alt text](https://media-exp1.licdn.com/dms/image/C4E22AQFWMJ62QNsMSw/feedshare-shrink_1280/0?e=1588204800&v=beta&t=5rCmnGYM8gQ-R-A-y1gKk1jBtRWZZ3-K7YHzwIn4HdE "Tela de Logon")

#### Cadastro de ONG
![alt text](https://media-exp1.licdn.com/dms/image/C4E22AQEwZBARCXmUVw/feedshare-shrink_1280/0?e=1588204800&v=beta&t=RGbq_M9Gl4ResMgvAY3-l8IZjgCwIGJsDny7S2hvUJU "Tela de cadastro de ONG")

#### Casos cadastrados
![alt text](https://media-exp1.licdn.com/dms/image/C4E22AQHnPFhqRqNq1A/feedshare-shrink_1280/0?e=1588204800&v=beta&t=BIfEXtz1VVB5UijDHKSTpwbI3GBtCrWA8GgI9xRn-S8 "Tela de casos cadastrados")

#### Cadastro de novo caso
![alt text](https://media-exp1.licdn.com/dms/image/C4E22AQEjq_0Kt_IwJQ/feedshare-shrink_1280/0?e=1588204800&v=beta&t=xWzC7KaHh4c-7iDq1y00z6f_V15R3ooh4GWH_WdBkE4 "Tela de cadastro de novo caso")

#### Splash screen app mobile
![alt text](https://media-exp1.licdn.com/dms/image/C4E22AQFR9K8tl1Wxwg/feedshare-shrink_800/0?e=1588204800&v=beta&t=8oiCT3F2JqGnx4CbXbAxAD6_wUQyHz2y2K1HQnUJWng "Splash screen app mobile")

#### Lista de casos app mobile
![alt text](https://media-exp1.licdn.com/dms/image/C4E22AQHmT_1jOPJwNw/feedshare-shrink_800/0?e=1588204800&v=beta&t=q-UKX74TpuC5sVui3r3HitT5M6kOhDq5xcGOmlMiS-o "Lista de casos app mobile")

#### Detalhes do caso
![alt text](https://media-exp1.licdn.com/dms/image/C4E22AQEoNtr3PR3m7A/feedshare-shrink_800/0?e=1588204800&v=beta&t=h5-yX6QPWKYr2TCTSW1wZMiZYa91a55N_vfzlqmuxRc "Detalhes do caso")