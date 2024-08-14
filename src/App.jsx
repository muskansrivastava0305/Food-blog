import React from 'react'


function App() {
  return (
    <div className=' bg-green-700 flex flex-col gap-10 sm:m-10 m-2 sm:pl-20 sm:pt-20 sm:pb-6 h-full p-10'>
      <div className=' flex justify-between '>
     <div className=' font-bold text-white text-5xl font-mono'>
        <h1>My Food</h1>
      </div>
      <nav>
        <ul  className=' flex gap-7  text-white text-xl pr-6'>
          <li>Home</li>
          <li>Recipe</li>
          <li>Tip</li>
          <li>Contact</li>
          <li><i class="fa-solid fa-magnifying-glass"></i></li>
        </ul>
      </nav>
      </div>

      <div className=' gap-4 justify-between flex-row md:flex'>
        
        <div className=' flex flex-col gap-3'>
          <h1 className='font-bold  text-white text-7xl '>BROWINE MAGIC</h1>
          <p className=' font-bold text-white text-xl'>5 Tips to how to make Broeines in the game</p>
          <div className=' flex gap-3'>
          <button className=' hover:bg-blue-700 text-white font-bold py- 1 px-2 rounded-3xl border border-white'>How to</button>
            <button className=' hover:bg-blue-700 text-white font-bold py- 1 px-2 rounded-3xl border border-white'>Baking</button>
          </div>
          <div>
            <button className='  hover:bg-blue-700 bg-black text-white font-bold py- 4 px-4 rounded-3xl '>Read Now</button>
          </div>
        </div>
        <div className=' '> 
        <img src='brownie_image.png' alt='' className=' h-96 border rounded-s-full rounded-e-full'/>
        </div>
      </div>
    </div>
  )
}

export default App