import { configureStore } from '@reduxjs/toolkit'
import selectallreducer from './features/selectAllSlice'
import singleselectreducer from './features/selectedEvents'
export const store = configureStore({
  reducer: {
      selectAll:selectallreducer,
      selectSingle:singleselectreducer
  },
})