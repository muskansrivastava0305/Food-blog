import React from 'react'


function App() {
  return (
    <div>
      <div>
     <div>
        <h1>My Food</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Recipe</li>
          <li>Tip</li>
          <li>Contact</li>
          <li><i class="fa-solid fa-magnifying-glass"></i></li>
        </ul>
      </nav>
      </div>

      <div>
        <div>
          <h1 className='font-bold'>BROWINE MAGIC</h1>
          <p className=' text-red-600'>5 Tips to how to make Broeines in the game</p>
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