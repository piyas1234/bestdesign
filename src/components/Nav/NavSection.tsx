import React from 'react'
import LargeNav from './LargeNav'
import SmallNav from './SmallNav'
function NavSection() {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 w-full">
            <LargeNav/>
            <SmallNav/>
        </div>
    )
}

export default NavSection
