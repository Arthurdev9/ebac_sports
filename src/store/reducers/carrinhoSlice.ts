import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ProdutoState = {
  itens: Produto[]
}

const initialState: ProdutoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      const existe = state.itens.some((p) => p.id === action.payload.id)
      if (existe) return
      state.itens.push(action.payload)
    }
  }
})

export const { adicionarProduto } = carrinhoSlice.actions
export default carrinhoSlice.reducer
