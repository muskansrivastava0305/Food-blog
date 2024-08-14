import React from 'react'


function App() {
  return (
    <div className=' bg-green-700 flex flex-col gap-10 m-5 p-10'>
      <div className=' flex justify-between '>
     <div className=' font-bold text-white text-5xl font-mono'>
        <h1>My Food</h1>
      </div>
      <nav>
        <ul  className=' flex gap-7  text-white text-xl'>
          <li>Home</li>
          <li>Recipe</li>
          <li>Tip</li>
          <li>Contact</li>
          <li><i class="fa-solid fa-magnifying-glass"></i></li>
        </ul>
      </nav>
      </div>

      <div>
        
        <div className=' justify-center '>
          <h1 className='font-bold  text-white text-7xl '>BROWINE MAGIC</h1>
          <p className=' '>5 Tips to how to make Broeines in the game</p>
          <div>
            <button>How to</button>
            <button>Baking</button>
          </div>
          <div>
            <button>Read Now</button>
          </div>
        </div>
        <div>
        <img src='brownie_image.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default App