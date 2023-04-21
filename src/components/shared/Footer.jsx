import React from 'react'
import './shared.css'
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
        <h1> © {year} #VANLIFE</h1>
    </footer>
  )
}
