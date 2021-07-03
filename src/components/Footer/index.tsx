import React from 'react'
import image from '../../images/footer.png'
function Footer() {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 w-full">
            <img  src={image} alt=""  />
              <div className="text-center m-auto py-5 text-white">
              <h1 className="text-2xl mb-4">Start A project with me</h1>
              <div className="w-1/4 bg-white h-1 text-center m-auto mb-5">.</div>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, tempore!</p>
             <button className="bg-white p-2 text-black shadow-lg" type="submit">HIRE ME</button>
              </div>
            
        </div>
    )
}

export default Footer
