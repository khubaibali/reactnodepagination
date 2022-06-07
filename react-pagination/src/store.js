import { configureStore } from '@reduxjs/toolkit'
import selectallreducer from './features/selectAllSlice'
export const store = configureStore({
  reducer: {
      selectAll:selectallreducer,
  },
})




