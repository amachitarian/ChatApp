import Peer from 'simple-peer'
const p1 = Peer({trickle: false, initiator: true})
const p2 = Peer({trickle: false})

p1.on('signal', (data) => console.log('p1 signal', data))
p1.on('connect', () => console.log('p1 connected'))
p1.on('data', (data) => console.log('p1 received'))
p1.on('error', (error) => console.error('p1 error', error))
p1.on('close', () => console.log('p1 connection closed'))


p2.on('signal', (data) => console.log('p2 signal', data))
p2.on('connect', () => console.log('p2 connected'))
p2.on('data', (data) => console.log('p2 received'))
p2.on('error', (error) => console.error('p2 error', error))
p2.on('close', () => console.log('p2 connection closed'))
