const { ApolloServer, gql} = require('apollo-server')

const usuarios = [{
  id: 1,
  nome: 'João Silva',
  email: 'jsilva@zemail.com',
  idade: 29
}, {
  id: 2,
  nome: 'Marcus Trindade',
  email: 'marcao@zemail.com',
  idade: 20
}, {
  id: 3,
  nome: "Rafael Martini",
  email: "rafael@zemail.com",
  idade: 33
}]

// Mapear e modelar os dados (Schema da api)
const typeDefs = gql`
  scalar Date

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  type Usuario {
    id: ID
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

  # Pontos de entrada da API
  type Query {
    ola: String!
    horaAtual: Date!
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
    numerosMegaSena: [Int!]!
    usuarios: [Usuario]
    usuario(id: Int): Usuario  
  }
`

const resolvers = {
  Produto: {
    precoComDesconto(produto){
      if(produto.desconto)
        return produto.preco * (1 - produto.desconto)
      else
        return produto.preco
    }
  },
  Usuario: {
    salario(usuario){
      return usuario.salario_real
    }
  },
  Query: {
    ola() {
      return 'Boa Noite!'
    },
    horaAtual() {
      return `${new Date()}`
    },
    usuarioLogado() {
      return {
        id: 1,
        nome: 'Marcus da Web',
        email: 'marcusdaweb@gmail.com',
        idade: 22,
        salario_real: 1234.56,
        vip: true
      }
    },
    produtoEmDestaque() {
      return {
        nome: 'ZenFone1',
        preco: 100.00,
        desconto: 0.5
      }
    },
    numerosMegaSena() {
      // return [4, 8, 13, 27, 33, 54]
      const crescente = (a, b) => a - b
      return Array(6).fill(0)
        .map(n => parseInt(Math.random() * 60 + 1))
        .sort(crescente)
    },
    usuarios() {
      return usuarios
    },
    usuario(_, { id }){
      const sels = usuarios
        .filter(u => u.id === id)
      return sels ? sels[0] : null
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})