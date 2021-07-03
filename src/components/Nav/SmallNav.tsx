import React from 'react'
import logo from '../../images/logo_white.png'
import logo2 from '../../images/menu.png'
function SmallNav() {
    return (
        <div className="flex lg:hidden md:hidden xl:hidden 2xl:hidden block justify-between">
            <img width="60%"   src={logo} alt=""   />
            <img  width="50px" className="p-1"   src={logo2} alt=""   />
            
        </div>
    )
}

export default SmallNav
