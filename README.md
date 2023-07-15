# LEADSTER TEST

Este é um teste realizado para a LEADSTER, em que o objetivo era criar uma home page utilizando Next.js + Styled Components.

## Link do deploy


https://leadster-test-nine.vercel.app/



# Comandos de inicialização

- Iniciar app
    
        yarn dev

- Testar

        yarn test

- Storybook

        yarn storybook

- Build

        yarn build

- Type check

        yarn typecheck
    

# Primeiros passos

## Levantamento de Requisitos

Avaliei primeiro oque foi solicitado pela empresa para cumprir o básico do teste.

- Uma landing page, com o framework NextJS;
- Para a listagem de vídeos, use um arquivo de configuração {JSON} para 
     alterar as urls dos vídeos que abrem nos modais;
- Seja fiel ao layout.
- Utilização de padrões e de um código simples e autoexplicativo.
- HTML5 escrito da maneira semântica;
- Preocupação com a usabilidade da página;
- Styled Components;
- Layout responsivo

A pagina contem seções transversais simples em que uma delas tem uma lista de vídeos apresentados com paginação e com filtros.

A pagina contem um modal com um player dentro.

## Decidir as bibliotecas

Sabendo que iria ter que usar NextJS escolhi usar a pasta pages como gerador de paginas, pois o novo modelo, app, ainda esta com a documentação incompleta e algumas bibliotecas ainda tem conflito com a nova versão.

Para ter um controle do nome dos meus componentes e tornar o código mais amigável para quem venha refatorar depois decidi usar só o Styled Components para gerar o css do projeto.

Tendo em vista que precisaria renderizar uma lista de items utilizando paginação e criar um modal decidi usar a biblioteca ANTD, poise e simples de se usar, mais leve que as outras. A ideia e utilizar componentes mais complexos delas e não usar ela para criar divs ou textos.

Decidi usar jest para realizar os unitários e de integração e cypress para testes E2E.

Husky + lint-staged + commitlint para controle dos commits e evitar que erros subam para o repositório.

Storybook para documentar os componentes.

Eslint + Prettier para manter o padrão de código.

Para o CI decidi usar github actions. Ele faz o build, roda o lint e os testes para garantir a integridade da pr.

## Decidir a arquitetura

Analisando a página e possível ver que ela esta separada por seções horizontais, portanto decidi criar Layouts para as paginas com componentes que representam essas seções.

A pagina home esta dividia em três seções:

- Banner
- VideoList
- CTA

O nome dos componentes respeita a seguinte lógica:
    
    NomeDaPagina + NomeDaSeção 

Caso algum componente seja criado dentro dessa seção esse nome deve ser extentido.

    NomeDaPagina + NomeDaSeção + NomeDoComponente


Todo o app está dentro da pasta src.

Dentro de src temos:

### @types: 
    
Definição dos tipos globais usados na aplicação.

### componets:

Pasta com todos os componentes renderizados em tela.

As patas devem as seguintes regras:

    - Todos os componentes que serão utilizados fora das pastas a seguir devem ser exportados no index das mesmas.

    - Pastas responsáveis pelos componentes devem estar em PascalCase assim como o nome dos arquivos criados.

    - Os componentes criados devem conter 4 arquivos:

        * Component.tsx - Arquivo do componente
        * Component.styles.tsx - Arquivo com componetes estilizados do styled components
        * Component.stories.tsx - Arquivo com a story no Storybook
        * Component.spec.tsx - Arquivo de teste do componente
    
    - Os componentes podem ter as seguintes pastas:

        * components - Com componentes utilizados somente neste componente
        * hooks - Com hooks utilizados somente nestes.

    - Os componentes que serão utilizados fora de suas pastas devem ser exportados no index das mesmas.


As patas são as seguintes:

- common:  Componentes utilizados em mais de um local dentro do app.

- layouts: Componentes de layout utilizados pela paginas na pasta /pages.


### constants:

Pasta com as constantes utilizadas pelos componentes.

### contexts:

Pastas com os contextos.

### enums:

Pasta com os enums.

### hooks

Pasta com os hooks utilizados em mais de um local no app.

### interfaces 

Pasta com as interfaces utilizadas em mais de um local no app.

### pages

Pasta com as paginas do app.

Esta contem uma rota em sua api chamada videos que retorna um array de videos, simulando uma integração com uma api externa.

### providers

Pasta com os providers utilizados por toda a app, como provedores de tema e contextos.

### styles

Pasta com o tema e o global styles do app.

### utils

Pasta com as funções utilitárias utilizadas em mais de um local no app.


## Criando o projeto

Primeiro iniciei o repositório com todas as bibliotecas e realizei a configuração do ambiente com as tecnologias escolhidas.

Durante o desenvolvimento do projeto não tive maiores dificuldades e consegui seguir oque decidi no começo.

Criei uma rota na api do next para simular uma integração com uma api externa que retorna um array de videos. Como não e possivel acessar a api pelo server side do next, fiz a chamda dentro do contesto mesmo.

Pensando em um projeto com integração com uma api externa talvez não faria essa escolha. Usaria o React Query para realizar as requisições e fazer esse gerenciamento de estados para mim. Utilizando o React Query eu poderia fazer o prefetch dos dados e carregar eles no server side e depois passar para um context ou hook junto com as funções de filtragem. Isso evitaria de ter que fazer requests no client e ja traria os dados prontos para serem usados do server.Esse senario seria possivel tanto no caso de usar a pasta app como pages.

O context api e util mais acaba perdendo performance em aplicações maiores e com o React Query conseguiria tratar melhor os possíveis erros e não iria precisa usar useEffect para carregar o estado.

Outro problema que encontrei foi com a biblioteca do Antd. Ela causa diversos erros que prejudicam a usabilidade e SEO da pagina. Todos os erros ainda reportados vem da biblioteca e não do meu código. Para continuar o projeto acredito que trocaria o Antd pelo radix ou outra biblioteca leve e sem extilização ja que eu so iria utilizar os componentes mais complexos dela e não quero problemas com o SEO e acessibilidade do app.





