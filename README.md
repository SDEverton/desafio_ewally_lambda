<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://www.ewally.com.br/wp-content/uploads/2020/06/logotipo-1.svg" alt="Project logo"></a>
</p>

<h3 align="center">Desafio Ewally (Lambda)</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/SDEverton/iclinic_test/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/SDEverton/iclinic_test/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Descrição do projeto
    <br>
</p>

## 📝 Índice

- [Sobre](#about)
- [Instalação](#getting_started)
- [Testes](#tests)
- [Autor](#authors)

## 🧐 Sobre <a name = "about"></a>

O desafio consiste em escrever um programa em Node.js que expõe uma API na qual é dada
como entrada uma linha digitada de um boleto e que contemple as boas práticas (TDD, SOLID, 12Factor) da programação utilizando Node JS.
Desenvolver os recursos em API Rest que realizam operações bancárias.


## 🏁 Iniciando <a name = "getting_started"></a>

### Pré-requisitos

- [NodeJS](https://nodejs.org/en/) - Server Environment
- [Serverless]

### Principais técnologias envolvidas (libs e outros)

Jest
date-fns

Para criar a aplicação foi utilizado o famoso Serverless facilitando o deploy de um lambda.

### Startando aplicação

Para iniciar a aplicação basta seguir o comando abaixo

```
yarn or npm i

yarn dev

```

Com o container no ar basta digitar a url no navegador

```
http://localhost:3000/dev/boleto/{code}
```

Para realizar o deploy na AWS (com o ambiente local configurado https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)

```
sls deploy

```

Caso queira testar em um ambiente real (AWS) digite

```
https://irf1dl0igd.execute-api.us-east-1.amazonaws.com/dev/boleto/{code}

```

## 🔧 Rodando os testes <a name = "tests"></a>

```
yarn test or npm run test
```

## ✍️ Autor <a name = "authors"></a>

- [Everton Oliveira](https://github.com/SDEverton)
