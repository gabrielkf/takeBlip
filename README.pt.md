# Chatbot Valores Take

Contem o código para um servidor web (já em produção) e um fluxo de
chatbot, como solicitado nas especificações do desafio.


## Servidor

O servidor é uma aplicação Node.js escrito em Typescript, utilizando
os frameworks Express e Axios, com deploy feito no [Heroku](https://take-blip.herokuapp.com).

A linguagem escolhida foi Typescript para facilitar o debugging, assim como
garantir a padronização dos dados e obter os benefícios de produtividade
da IDE com uma dados fortemente tipados.

Ao receber uma solicitação GET, o servidor:
* Consulta a API do Github pelos repositórios da [Take](https://github.com/takenet)
* Filtra os 5 repositórios mais antigos com linguagem C#
* Retorna o seguinte objeto:
```
{
  repo_1: {
    avatar_url,
    full_name,
    description
  },
  repo_2: {
    avatar_url,
    full_name,
    description
  },

  {...},

  repo_5: {
    avatar_url,
    full_name,
    description
  }
}
```

## Chatbot

O fluxo do chatbot foi feito no [Portal da Blip](https://portal.blip.ai),
também seguindo as especificações do desafio, exceto por pequenas correções
na linguagem e os seguintes ajustes no fluxo:
* Erro padrão pergunta se o usuário quer ir para o começo
* Um block "Tchau", caso o usuário escolha "Não" no erro padrão. Esse
bloco por padrão retorna para o começo, caso o usuário interaja com o bot
posteriormente


### Outras Ferramentas de padronização

O código foi padronizado com:
- ESlint (padrão AirBnb)
- Prettier
