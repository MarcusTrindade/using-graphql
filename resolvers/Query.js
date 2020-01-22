const { usuarios, perfis } = require('../data/db')

module.exports = {
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
  },
  perfis() {
    return perfis
  },
  perfil(_, { id }){
    const sels = perfis
      .filter(p => p.id === id)
    return sels ? sels[0] : null
  }
}
