import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from 'components/NotFound'
import AddEdit from './pages/AddEdit'
import Main from './pages/Main'

function Photo() {
  return (
    <>
      <Routes>
        <Route path="" element={<Main></Main>}></Route>
        <Route path="add" element={<AddEdit></AddEdit>}></Route>
        <Route path=":photoId" element={<AddEdit></AddEdit>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default Photo
