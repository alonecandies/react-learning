import { configureStore } from '@reduxjs/toolkit'
import photoReducer from 'features/Photo/photoSlice'

const rootReducer = {
  photos: photoReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})
