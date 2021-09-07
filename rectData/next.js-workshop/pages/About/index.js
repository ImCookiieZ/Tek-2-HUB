import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <li>
      <h1> this is about </h1>
      </li>
      <li>
        <Link href="/">
        <a>
          Home
        </a>
        </Link>
      </li>
    </div>
  )
}