import { createSelector, createSlice } from '@reduxjs/toolkit'
import { initializePhoto } from './photoAPI'
import { v4 as uuidv4 } from 'uuid'

const initialState = initializePhoto()

export const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.push({
        id: uuidv4(),
        ...action.payload,
      })
    },
    removePhotoById: (state, action) => {
      state.splice(
        state.findIndex(photo => photo.id === action.payload),
        1
      )
    },
    updatePhotoById: (state, action) => {
      const photo = state.find(photo => photo.id === action.payload.id)
      Object.assign(photo, action.payload)
    },
  },
})

export const { addPhoto, removePhotoById, updatePhotoById } = photoSlice.actions

export const getAllPhotos = state => state.photos

export const getPhotoById = createSelector([state => state.photos, (state, id) => id], (photos, id) =>
  photos.find(photo => photo.id === id)
)

export default photoSlice.reducer
