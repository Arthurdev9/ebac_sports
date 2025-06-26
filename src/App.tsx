import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './store/reducers/apiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/index'
import { adicionarProduto } from './store/reducers/carrinhoSlice'
import { alternarFavorito } from './store/reducers/favoritosSlice'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { data: produtos, isLoading, error } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const dispatch = useDispatch()

  const favoritar = (produto: Produto) => {
    dispatch(alternarFavorito(produto))
  }

  const adicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionarProduto(produto))
  }

  if (isLoading) return <p>Carregando produtos...</p>
  if (error) return <p>Erro ao carregar produtos!</p>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos ?? []}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
