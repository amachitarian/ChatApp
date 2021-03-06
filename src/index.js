import Peer from 'simple-peer'
import React, { createElement } from 'react'
import { render } from 'react-dom'

const root = (
  <div>
    <h1>Its all elements</h1>
    <a
      title = 'Read the docs'
      href = 'https://facebook.github.io/react/'
    >
      Hello, React!
    </a>
  </div>
)

const container = document.getElementById('app-container')
render(
  root,     // The element
  container // Where to render it - see next slide
)

const p1 = Peer({trickle: false, initiator: true})
const p2 = Peer({trickle: false})
// --- P1 ------------------------------------------------------------
p1.on('signal', (data) => {
  console.log('p1 signal', data)
  p2.signal(data)
})
p1.on('connect', () => {
  console.log('p1 connected')
  p1.send('Hello, p2. How are you?')
})
p1.on('data', (data) => console.log('p1 received', data.toString('utf-8')))
p1.on('error', (error) => console.error('p1 error', error))
p1.on('close', () => console.log('p1 connection closed'))
// --- P2 ------------------------------------------------------------
p2.on('signal', (data) => {
  console.log('p2 signal', data)
  p1.signal(data)
})
p2.on('connect', () => console.log('p2 connected'))
p2.on('data', (data) => {
  console.log('p2 received', data.toString('utf-8'))
  p2.send("I'm fine. Thanks. How are you, p1?")
})
p2.on('error', (error) => console.error('p2 error', error))
p2.on('close', () => console.log('p2 connection closed'))
