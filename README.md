# Loja de Produtos 🛒 - Back-End
> - Proposta pela Digital College  
> - Projeto para treino  
## 📍 Objetivo do Projeto
> Fazer uma Loja de Produtos, utilizando a tecnologia NodeJS para fazer um sistema completo com banco de dados possuindo cadastramento de Clientes e Produtos.

## 🛠️ Feito com
- **NodeJS (v10.2.4)**
### 🔧 Dependências
- **sequelize (v6.37.5)**
- **express (v4.21.2)**
- **Bcrypt (v5.1.1)**
- **CORS (v2.8.5)**
- **nodemon (v3.1.9)**
- **mariadb (v3.4.0)**
- **mysql2 (v3.12.0)**
- **jsonwebtoken (v9.0.2)**

## 🧱 Estrutura das pastas:
```
/BACKEND-DC  
│── 📁src  
│   │── 📁controller
│   │   │── 📜controllerAuthentication.js
│   │   │── 📜controllerProducts.js
│   │   │── 📜controllerRecovery.js  
│   │   │── 📜controllerUser.js
│   │── 📁database  
│   │   │── 📜database.js  
│   │   │── 📜sync-table-database.js
│   │── 📁middleware
│   │   │── 📜authMiddleware.js   
│   │── 📁models    
│   │   │── 📜ItensOrders.js  
│   │   │── 📜Orders.js
│   │   │── 📜passwordRecovery.js 
│   │   │── 📜Product.js  
│   │   │── 📜ProductVariation.js  
│   │   │── 📜UserModel.js  
│   │── 📁routes
│   │   │── 📜authentication.js
│   │   │── 📜product.js
│   │   │── 📜recovery.js 
│   │   │── 📜user.js  
│   │── 📁service
│   │   │── 📜serviceAuthentication.js
│   │   │── 📜serviceProducts.js
│   │   │── 📜serviceRecovery.js
│   │   │── 📜serviceUser.js 
│   │── 📜index.js  
│   │── 📜server.js
│── 📜.gitignore  
│── 📜package-lock.json  
│── 📜package.json  
│── ℹ README.md
```  

## 🚀 Rotas API:  
**_SIGN_**
- **POST ➜ /sign** Login para acesso das rotas do projeto.

**_RECOVERY_**
- **POST ➜ /email** Fornecimento de código para recuperação por e-mail.
- **POST ➜ /recovery** Recuperação de senha.

**_PRODUCT_**  
- **GET ➜ /products** Lista todos os produtos disponíveis.  
- **POST ➜ /products** Utilizado para postar um produto novo.  
- **PUT ➜ /products/:id** Atualiza os produtos por ID.  
- **DELETE ➜ /products:id** Deleta produtos existentes por ID.
  
**_USER_**  
- **GET ➜ /user** Lista todos os usuários disponíveis.  
- **POST ➜ /products** Utilizado para cadastrar um usuário novo.  
- **PUT ➜ /products/:id** Atualiza os usuários por ID.  
- **DELETE ➜ /products:id** Deleta produtos existentes por ID.  

## 📦 Instalação e inicialização:

1. **Clone o repositório**  
```git clone https://github.com/PauloHenrrq/BackEnd-DC.git```

2. **Entre no diretório**  
```cd BackEnd-DC```

3. **Instale as depedências**  
```npm install```

4. **Execute o projeto**  
```npm run dev```
