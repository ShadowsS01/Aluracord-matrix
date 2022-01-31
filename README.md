# Aluracord-matrix

[![licence mit](https://img.shields.io/badge/licence-MIT-blue)](LICENSE)
[![website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Faluracord-matrix2.vercel.app%2F)](https://aluracord-matrix2.vercel.app/)

Projeto usando Next.js.

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.dev)
- [React](https://pt-br.reactjs.org)
- [Next](https://nextjs.org)
- [Supabase](https://github.com/supabase/supabase)
- [SkynexUI](https://skynexui.dev)

## Como executar o projeto

Para executar o projeto você precisa ter o [Node.js](https://nodejs.dev) e o [Git](https://git-scm.com) instalados na sua maquina. Você também precisará do [Supabase](https://supabase.com/) e de um editor de código, eu utilizei o [VSCode](https://code.visualstudio.com).

1. Clone esse repositório.

```
git clone https://github.com/ShadowsS01/Aluracord-matrix.git
```

2. Acesse a pasta do projeto.

```
cd Aluracord-matrix
```

3. Coloque sua Anon Key e URL do seu Banco de Dados [Supabase](https://supabase.com/) em pages/chat.js

```
const SUPABASE_ANON_KEY = 'Coloque sua Anon Key aqui'
const SUPABASE_URL = 'Coloque a URL aqui'
```

3. Instale as dependências.

```
npm install
```

4. Execute a aplicação em modo de desenvolvimento.

```
npm run dev
```

## Licença

Este projeto esta sobe a licença [MIT](/LICENSE).
