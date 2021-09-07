import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
     <div>
      <li>
      <h1> Hallo World</h1>
      </li>
      <li>
        <Link href="/About">
        <a>
          About
        </a>
        </Link>
      </li>
    </div>
  )
}
