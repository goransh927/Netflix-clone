import React from 'react'
import './Nav.css';

function Nav() {
    return (
        <div className='nav'>
            <img 
                className='nav__logo'
                // src="https://upload.wikimedia.org/wikipedia/commons/0/0f"
                src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=681&h=383&crop=1"
            />
            <img 
                className='nav__avatar'
                // src="https://pbs.twing.com/profile_images/124011999041155"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOrQpQ_xH-h3H8_K-maor_cyVdAYOOOoXrYA&usqp=CAU"
            />

        </div>
    )
}

export default Nav
