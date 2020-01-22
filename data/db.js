const perfis = [
  { id: 1, nome: 'Comum' }, 
  { id: 2, nome: 'Administrador' }
]

const usuarios = [{
  id: 1,
  nome: 'João Silva',
  email: 'jsilva@zemail.com',
  idade: 29,
  perfil_id: 1,
  status: 'ATIVO'
}, {
  id: 2,
  nome: 'Marcus Trindade',
  email: 'marcao@zemail.com',
  idade: 20,
  perfil_id: 2,
  status: 'INATIVO'
}, {
  id: 3,
  nome: 'Rafael Martini',
  email: 'rafael@zemail.com',
  idade: 33,
  perfil_id: 1,
  status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis }
