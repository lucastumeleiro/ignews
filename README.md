<h1 align="center">

<img src="https://raw.githubusercontent.com/lucastumeleiro/ignews/main/public/images/avatar.svg" alt="rocketshoes" width="100px"/>

</h1>

<h1 align="center">
  <img alt="Logo" src="./public/images/logo.svg" alt="ig.News">
</h1>
<br>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-configuracoes">Configurações</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; &#xa0; | &#xa0;
</p>
<br>

## :dart: Sobre ##

O projeto Ignews tem como objetivo o desenvolvimento de um aplicação em ReactJS e NextJS para acesso a posts através da aquisição de uma assinatura.

O blog utiliza além do NextJS e o consumo de API externas, NextAuth, SSR (Server Side Rendering), SSG (Static Site Generation), compras de assinatura integradas ao Stripe, os dados são persistidos no banco de dados FaunaDB e a geração de conteúdo é feita através do Prismic CMS. Sendo uma aplicação Serverless, todo o projeto segue o padrão de arquitetura JAMStack

## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Next-Auth](https://next-auth.js.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)

## :white_check_mark: configuracoes ##

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

## :checkered_flag: Começando ##

```bash
# Clone o projeto
$ git clone https://github.com/lucastumeleiro/ignews.git

# Entre na pasta clonada
$ cd ignews

# Instale as dependências
$ yarn

# Na raiz do projeto crie uma cópia do arquivo .env.local.example
# Siga os passos descritos nesse arquivo
# para configurar as variaveis de ambiente
$ yarn dev

#Execute o stripe listen para ouvir os eventos do webhook do stripe
$ yarn stripe

#por fim inicie a aplicação
$yarn dev

# The server will initialize in the <http://localhost:3000>
```