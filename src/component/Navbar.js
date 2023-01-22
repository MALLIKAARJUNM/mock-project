import React from 'react';

const Navbar = () => {
    
    return(<div class="ui inverted menu" >
        <div className="ui inverted pointing menu" >
        <a className="item" href="/Home">Home</a>
        <a className="item" href="/Contact">Contact</a>
        <a className="item" href="/About">About</a>
        <a className="item" href="/LoginForm" style={{marginLeft:'365%'}}>Login</a>
        </div>
        </div>)
}

export default Navbar;