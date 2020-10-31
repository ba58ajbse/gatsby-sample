import React from "react"
import { Link } from 'gatsby'

export default function Home() {
  return (
    <div>
      Hello world!
      <Link to='/about'>to about</Link>
    </div>
  )
}
