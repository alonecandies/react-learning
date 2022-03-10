import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.scss'
import './assets/styles/global.scss'
import NotFound from 'components/NotFound'
import Header from 'components/Header'
import Home from 'features/Home'

const Photo = React.lazy(() => import('features/Photo'))

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="photos/*" element={<Photo />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
