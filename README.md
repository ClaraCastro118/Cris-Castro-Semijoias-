<div align="center">

# 💎 Cris Castro Semijoias

### Full Stack E-commerce Platform

Uma plataforma de e-commerce desenvolvida para a gestão e comercialização de semijoias, unindo experiência de compra, gerenciamento administrativo e uma arquitetura Full Stack moderna.

<br>






\

<br>

**Projeto Full Stack desenvolvido como portfólio profissional em desenvolvimento web.**

</div>

---

## 📑 Índice

* [Sobre o Projeto](#-sobre-o-projeto)
* [Objetivo](#-objetivo)
* [Funcionalidades](#-funcionalidades)
* [Arquitetura](#️-arquitetura)
* [Estrutura do Projeto](#-estrutura-do-projeto)
* [Fluxo da Aplicação](#-fluxo-da-aplicação)
* [Tecnologias](#-tecnologias)
* [Banco de Dados](#️-banco-de-dados)
* [Segurança](#-segurança)
* [Ambiente de Desenvolvimento](#-ambiente-de-desenvolvimento)
* [Pré-requisitos](#-pré-requisitos)
* [Instalação](#️-instalação)
* [Variáveis de Ambiente](#-variáveis-de-ambiente)
* [Execução](#-execução)
* [Testes](#-testes)
* [Documentação](#-documentação)
* [Roadmap](#️-roadmap)
* [Decisões Técnicas](#-decisões-técnicas)
* [Desenvolvedora](#️-desenvolvedora)
* [Licença](#-licença)

---

# 📌 Sobre o Projeto

O **Cris Castro Semijoias** é uma aplicação Full Stack desenvolvida para representar uma operação de e-commerce de semijoias, contemplando desde a apresentação dos produtos até o gerenciamento de pedidos e operações administrativas.

O projeto foi estruturado com foco em:

* arquitetura organizada;
* separação entre frontend e backend;
* modelagem relacional;
* segurança;
* escalabilidade;
* manutenção do código;
* boas práticas de desenvolvimento;
* experiência do usuário;
* documentação técnica.

A aplicação utiliza uma arquitetura moderna baseada em **React no frontend**, **NestJS no backend**, **PostgreSQL como banco de dados** e **Prisma como ORM**.

---

# 🎯 Objetivo

O principal objetivo é desenvolver uma plataforma de e-commerce completa e escalável para uma loja de semijoias.

A aplicação busca atender dois principais contextos:

### 🛍️ Experiência do cliente

Permitir que clientes possam:

* visualizar produtos;
* consultar detalhes;
* navegar por categorias;
* adicionar produtos ao carrinho;
* realizar pedidos;
* acompanhar informações relacionadas à compra.

### ⚙️ Gestão administrativa

Permitir que a administração possa:

* cadastrar produtos;
* organizar categorias;
* controlar estoque;
* gerenciar informações de clientes;
* acompanhar pedidos;
* administrar informações relacionadas à operação da loja.

---

# ✨ Funcionalidades

## 🛒 Área do Cliente

* [ ] Cadastro de usuário
* [ ] Login e autenticação
* [ ] Recuperação de acesso
* [ ] Visualização de produtos
* [ ] Busca de produtos
* [ ] Filtro por categorias
* [ ] Visualização detalhada do produto
* [ ] Controle de carrinho
* [ ] Finalização de pedido
* [ ] Histórico de pedidos
* [ ] Acompanhamento do pedido

## 📦 Produtos

* [ ] Cadastro de produtos
* [ ] Edição de produtos
* [ ] Exclusão de produtos
* [ ] Cadastro de categorias
* [ ] Associação entre produtos e categorias
* [ ] Gerenciamento de imagens
* [ ] Controle de preços
* [ ] Controle de disponibilidade

## 📊 Estoque

* [ ] Controle de quantidade disponível
* [ ] Atualização de estoque
* [ ] Controle de movimentações
* [ ] Validação de disponibilidade durante pedidos

## 🧾 Pedidos

* [ ] Criação de pedidos
* [ ] Itens do pedido
* [ ] Cálculo de valores
* [ ] Status do pedido
* [ ] Histórico de pedidos
* [ ] Integração com pagamento
* [ ] Integração com envio

## 🔐 Segurança

* [ ] Autenticação baseada em JWT
* [ ] Senhas protegidas com bcrypt
* [ ] Controle de acesso
* [ ] Validação de dados
* [ ] Proteção de rotas
* [ ] Variáveis sensíveis utilizando `.env`
* [ ] Separação de permissões entre usuários

> As funcionalidades marcadas acima representam o escopo do projeto e seu processo de desenvolvimento. Os itens serão atualizados conforme forem efetivamente implementados.

---

# 🏗️ Arquitetura

A aplicação segue uma arquitetura separada entre frontend e backend.

```text
                    ┌─────────────────────────┐
                    │        CLIENTE          │
                    │    Navegador / Web      │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │        FRONTEND         │
                    │                         │
                    │ React + Vite            │
                    │ TypeScript               │
                    │ TailwindCSS              │
                    │ React Router             │
                    │ Axios                    │
                    └────────────┬────────────┘
                                 │
                              HTTP/API
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │        BACKEND          │
                    │                         │
                    │ NestJS                  │
                    │ TypeScript              │
                    │ JWT                     │
                    │ bcrypt                  │
                    │ Validações              │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │         PRISMA          │
                    │          ORM            │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │       POSTGRESQL        │
                    │      Banco de Dados     │
                    └─────────────────────────┘
```

---

# 📂 Estrutura do Projeto

```text
Cris-Cas
tro-Semijoias/
│
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── categories/
│   │   ├── products/
│   │   ├── inventory/
│   │   ├── customers/
│   │   ├── cart/
│   │   ├── orders/
│   │   ├── payments/
│   │   ├── shipping/
│   │   ├── common/
│   │   └── prisma/
│   │
│   ├── test/
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── routes/
│   │   └── types/
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
│
├── docs/
│   ├── architecture/
│   ├── database/
│   └── requirements/
│
├── .env.example
├── .gitignore
├── docker-compose.yml
├── LICENSE
└── README.md
```

> A estrutura poderá evoluir conforme novas funcionalidades forem implementadas.

---

# 🔄 Fluxo da Aplicação

O fluxo principal da plataforma foi planejado considerando a jornada completa de compra:

```text
Produto
   ↓
Estoque
   ↓
Foto
   ↓
Preço
   ↓
Carrinho
   ↓
Pagamento
   ↓
Envio
   ↓
Pedido
   ↓
Administração
```

Esse fluxo permite separar responsabilidades e facilita a evolução da aplicação.

---

# 💻 Tecnologias

## Frontend

| Tecnologia   | Utilização              |
| ------------ | ----------------------- |
| React        | Construção da interface |
| TypeScript   | Tipagem estática        |
| Vite         | Build e desenvolvimento |
| TailwindCSS  | Estilização             |
| React Router | Roteamento              |
| Axios        | Comunicação com API     |

## Backend

| Tecnologia | Utilização        |
| ---------- | ----------------- |
| Node.js    | Runtime           |
| NestJS     | Framework backend |
| TypeScript | Tipagem estática  |
| JWT        | Autenticação      |
| bcrypt     | Hash de senhas    |
| Jest       | Testes            |

## Banco de Dados

| Tecnologia     | Utilização                |
| -------------- | ------------------------- |
| PostgreSQL     | Banco de dados relacional |
| Prisma         | ORM                       |
| Prisma Migrate | Migrações                 |
| Prisma Seed    | Dados iniciais            |

## DevOps e Ferramentas

| Tecnologia     | Utilização                 |
| -------------- | -------------------------- |
| Docker         | Containerização            |
| Docker Compose | Ambiente local             |
| Git            | Controle de versão         |
| GitHub         | Hospedagem e versionamento |

---

# 🗄️ Banco de Dados

O banco de dados utiliza **PostgreSQL**, com o **Prisma ORM** responsável pela comunicação entre a aplicação e o banco.

A modelagem busca representar as principais entidades do negócio:

```text
User
 │
 └── Customer
       │
       └── Order
             │
             └── OrderItem
                    │
                    └── Product
                           │
                           ├── Category
                           ├── Inventory
                           ├── ProductImage
                           └── Price
```

### Principais entidades

* `User`
* `Customer`
* `Category`
* `Product`
* `ProductImage`
* `Inventory`
* `Price`
* `Cart`
* `CartItem`
* `Order`
* `OrderItem`
* `Payment`
* `Shipping`

A estrutura será evoluída conforme as regras de negócio forem consolidadas.

---

# 📅 Controle de Datas

As entidades de negócio que podem sofrer alterações ao longo do tempo utilizam informações de auditoria como:

```text
criado_em
atualizado_em
```

A decisão segue uma regra simples:

> Entidades que representam dados ativos e editáveis possuem controle de atualização. Registros essencialmente históricos podem manter apenas sua data de criação.

Essa abordagem evita adicionar campos de atualização sem necessidade e mantém o modelo de dados coerente com o comportamento de cada entidade.

---

# 🔐 Segurança

A segurança da aplicação é tratada como parte da arquitetura desde o início do desenvolvimento.

Entre as práticas planejadas estão:

* autenticação utilizando JWT;
* armazenamento seguro de senhas com bcrypt;
* autorização baseada em permissões;
* proteção de endpoints;
* validação de dados recebidos pela API;
* utilização de variáveis de ambiente;
* não versionamento de informações sensíveis;
* separação das responsabilidades entre frontend e backend.

Informações como credenciais do banco, secrets e tokens não devem ser armazenadas diretamente no código-fonte.

---

# 🐳 Ambiente de Desenvolvimento

O projeto utiliza Docker para facilitar a configuração do ambiente de desenvolvimento.

A ideia é permitir que serviços necessários para execução da aplicação sejam inicializados de maneira padronizada.

Exemplo:

```bash
docker compose up -d
```

Para encerrar:

```bash
docker compose down
```

---

# 📋 Pré-requisitos

Antes de executar o projeto, recomenda-se ter instalado:

* Node.js
* npm
* PostgreSQL
* Git
* Docker
* Docker Compose

Verifique as versões:

```bash
node --version
npm --version
git --version
docker --version
```

---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/Cris-Castro-Semijoias.git
```

Entre no projeto:

```bash
cd Cris-Castro-Semijoias
```

Instale as dependências do backend:

```bash
cd backend
npm install
```

Instale as dependências do frontend:

```bash
cd ../frontend
npm install
```

---

# 🔑 Variáveis de Ambiente

Crie os arquivos `.env` conforme os exemplos fornecidos no projeto.

Backend:

```bash
cp .env.example .env
```

Exemplo:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/cris_castro_semijoias"

JWT_SECRET="sua_chave_secreta"
JWT_EXPIRES_IN="1d"
```

> Nunca publique arquivos `.env` contendo credenciais reais no GitHub.

---

# 🧬 Prisma

Na pasta do backend, execute as migrações:

```bash
npx prisma migrate dev
```

Para gerar o Prisma Client:

```bash
npx prisma generate
```

Para executar o seed, quando configurado:

```bash
npx prisma db seed
```

Para visualizar o banco através do Prisma Studio:

```bash
npx prisma studio
```

---

# ▶️ Execução

## Backend

```bash
cd backend
npm run start:dev
```

O backend ficará disponível na porta configurada pela aplicação.

## Frontend

Em outro terminal:

```bash
cd frontend
npm run dev
```

O frontend será disponibilizado pelo Vite na URL exibida no terminal.

---

# 🧪 Testes

O projeto utiliza Jest para testes automatizados.

Executar os testes:

```bash
npm test
```

Modo de observação:

```bash
npm run test:watch
```

Cobertura:

```bash
npm run test:cov
```

A estratégia de testes será expandida conforme novos módulos e regras de negócio forem implementados.

---

# 📚 Documentação

A documentação técnica do projeto está organizada dentro da pasta:

```text
docs/
```

A documentação poderá incluir:

* decisões arquiteturais;
* modelagem do banco;
* regras de negócio;
* endpoints;
* autenticação;
* fluxos da aplicação;
* instruções de desenvolvimento.

---

# 🛣️ Roadmap

### 🟢 Fundação

* [ ] Definição inicial do projeto
* [ ] Definição da stack
* [ ] Estrutura inicial do repositório
* [ ] Definição da arquitetura
* [ ] Planejamento do banco de dados

### 🟡 Backend

* [ ] Configuração do NestJS
* [ ] Configuração do Prisma
* [ ] Modelagem PostgreSQL
* [ ] Migrations
* [ ] Seed
* [ ] Autenticação
* [ ] Usuários
* [ ] Categorias
* [ ] Produtos
* [ ] Estoque
* [ ] Carrinho
* [ ] Pedidos
* [ ] Pagamentos
* [ ] Envio

### 🟡 Frontend

* [ ] Estrutura React
* [ ] Identidade visual
* [ ] Página inicial
* [ ] Catálogo
* [ ] Página de produto
* [ ] Carrinho
* [ ] Checkout
* [ ] Área do cliente
* [ ] Área administrativa

### 🔵 Qualidade

* [ ] Testes unitários
* [ ] Testes de integração
* [ ] Tratamento global de erros
* [ ] Validações
* [ ] Documentação da API
* [ ] Melhorias de acessibilidade
* [ ] Otimização de performance

### 🟣 Deploy

* [ ] Containerização
* [ ] Configuração de produção
* [ ] Deploy do backend
* [ ] Deploy do frontend
* [ ] Banco PostgreSQL em produção
* [ ] CI/CD

---

# 🧠 Decisões Técnicas

O projeto foi estruturado considerando princípios de organização, manutenção e evolução.

### Separação Frontend / Backend

A divisão entre frontend e backend permite que cada camada tenha responsabilidades bem definidas.

### TypeScript

O TypeScript foi escolhido para aumentar a segurança durante o desenvolvimento por meio de tipagem estática e melhor manutenção do código.

### NestJS

O NestJS fornece uma estrutura modular adequada para organizar regras de negócio, controllers, services, autenticação e integrações.

### Prisma

O Prisma facilita a comunicação com o PostgreSQL e permite trabalhar com uma camada de acesso a dados tipada.

### PostgreSQL

O PostgreSQL foi escolhido por ser um banco relacional robusto e adequado para relacionamentos entre produtos, clientes, pedidos, pagamentos e estoque.

### Modularização

Os módulos do backend são separados de acordo com responsabilidades de negócio, facilitando manutenção e evolução.

### Controle de histórico

O uso de campos como `criado_em` e `atualizado_em` é definido de acordo com o comportamento de cada entidade, evitando uma aplicação indiscriminada desses campos.

---

# 🎨 Identidade Visual

A identidade visual do projeto busca transmitir:

* elegância;
* sofisticação;
* delicadeza;
* modernidade;
* simplicidade.

A paleta visual utiliza como referência principal o **azul Tiffany**, combinado com elementos neutros para manter uma estética premium.

---

# 👩🏻‍💻 Desenvolvedores

<div align="center">

### Maria Clara Castro $ Gustavo Silva 

Estudantes de **Análise e Desenvolvimento de Sistemas**, em formação Full Stack e em processo de construção de experiência prática através de projetos próprios.

Nosso foco está no desenvolvimento de aplicações web, buscando unir:

**Frontend + Backend + Banco de Dados + Arquitetura + Boas Práticas**

<br>

💻 Desenvolvimento Full Stack
🗄️ Banco de Dados
☁️ Cloud Computing
🔐 Segurança
🚀 Desenvolvimento Web

</div>

---

# 💡 Sobre o Projeto como Portfólio

Este projeto faz parte da construção do meu portfólio profissional e tem como objetivo demonstrar, na prática, conhecimentos relacionados ao desenvolvimento Full Stack.

Mais do que apresentar uma interface, o projeto busca demonstrar a construção de uma aplicação completa, envolvendo:

```text
Requisitos
   ↓
Modelagem
   ↓
Banco de Dados
   ↓
API
   ↓
Frontend
   ↓
Autenticação
   ↓
Regras de Negócio
   ↓
Testes
   ↓
Deploy
```

O desenvolvimento é realizado de forma incremental, permitindo que novas funcionalidades sejam adicionadas sem comprometer a organização da aplicação.

---

# 📄 Licença

Este projeto está licenciado sob a **MIT License**.

A MIT é uma licença permissiva que permite uso, modificação, distribuição e criação de versões derivadas do software, desde que o aviso de copyright e a licença sejam mantidos.

Consulte o arquivo [`LICENSE`](./LICENSE) para acessar o texto completo da licença.

---

<div align="center">

## 💎 Cris Castro Semijoias

**Full Stack E-commerce Platform**

Desenvolvido por **Maria Clara Castro $ Gustavo Silva **

<br>

⭐ Se este projeto for útil ou interessante para você, considere deixar uma estrela no repositório.

</div>
