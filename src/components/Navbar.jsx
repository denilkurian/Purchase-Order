import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { FaShoppingCart } from 'react-icons/fa';


export const Navbar = () => {
    return (
        <div>

            <nav className='flex w-full space-x-20 h-10 nav-bg justify-between pr-9'>
                <div className='emblem p-5'>
               <Link to='/'> <img style={{width:'4rem'}} src='https://img.freepik.com/premium-vector/br-logo-design_853558-567.jpg'/></Link>
                </div>

                <Link to='/create-item'><button className='create flex justify-between'>Products <span className='flex items-center justify-end'><FaShoppingCart /></span></button></Link>
            </nav>


        </div>
    )
}


