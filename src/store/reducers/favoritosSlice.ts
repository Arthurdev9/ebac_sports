import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ProdutoState = {
  itens: Produto[]
}

const initialState: ProdutoState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    alternarFavorito: (state, action: PayloadAction<Produto>) => {
      const produtoExiste = state.itens.some((p) => p.id === action.payload.id)
      if (produtoExiste) {
        state.itens = state.itens.filter((p) => p.id !== action.payload.id)
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { alternarFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
