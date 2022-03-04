import React from 'react'
import { data } from '../data/data'
import {Link, Outlet} from 'react-router-dom'

export default function Test() {
  return (
    <div style={{display:"flex"}}>
      <nav>
        {data.map(item => (
          <Link key={item.id} to={item.id.toString()}>{item.name} |</Link> 
        ))}
      </nav>
      <Outlet/>
    </div>
  )
}
