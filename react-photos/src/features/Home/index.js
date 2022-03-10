import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation()
  return <Navigate to="photos" state={{ from: location }} replace />
}

export default Home
