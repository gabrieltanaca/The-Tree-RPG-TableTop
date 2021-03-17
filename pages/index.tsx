import Head from 'next/head'
import React from 'react'
import { AnimBackground } from '../src/components/AnimBackground'
import { Navbar } from '../src/components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Tree | Tabletop RPG</title>
      </Head>
      <Navbar />
      <AnimBackground />
    </div>
  )
}
