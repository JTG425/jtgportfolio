import React from 'react'
import { TypeAnimation } from 'react-type-animation';


function Home() {

  return (
    <div className="Home">
      <TypeAnimation
        className='type-animation'
        sequence={[
          3000,
          'Hello, My Name is Joshua',
        ]}
        wrapper='h1'
        cursor={false}
        speed={50}
        repeat={1}
      />

      <TypeAnimation
        className='type-animation'
        sequence={[
          5000,
          'An Aspiring Web Developer',
        ]}
        wrapper='h2'
        cursor={false}
        speed={50}
        repeat={1}
      />
    </div>

  )
}




export default Home;
