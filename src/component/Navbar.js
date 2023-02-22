import React from 'react';


const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Moders MCQ</a>
                        <a href='/contact'><button type='button' className='btn btn-secondary me-2'>ContactUS</button></a>
                        <a href='/about'><button type='button' className='btn btn-secondary'>AboutUS</button></a>
                    </div>
                    <div>
                        <a href='/loginform'><button type='button' className='btn btn-secondary'>Login</button></a>
                    </div>
                </div>
            </nav>
        </div>)
}

export default Navbar;