import { useState } from 'react'
import tistoryLogo from './assets/tistory.svg'
import instagramLogo from './assets/instagram.svg'
import githubLogo from './assets/github.svg'
import './App.css'

function App() {
  return (
    <>
      <section>
        <h1>Find Me!</h1>
        <Sns />
      </section>
    </>
  )
}

function Sns() {
  return (
    <>
      <a href="https://doseobujang.tistory.com" target="_blank" title="tistory">
        <img src= {tistoryLogo} />
      </a>
      <a href="https://www.instagram.com/doseobujang" target="_blank" title="instagram">
        <img src= {instagramLogo} />
      </a>
      <a href="https://github.com/doseobujang" target="_blank" title="github">
        <img src= {githubLogo} />
      </a>
    </>
  )
}

export default App
