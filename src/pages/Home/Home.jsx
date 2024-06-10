import React from 'react'
import Header from '../../components/Header/Header'
import About from '../About/About'

const Home = () => {
  return (
    <div className='home'>
      <header>
        <Header />
      </header>
      <main>
        <About />
      </main>
    </div>
  )
}

export default Home