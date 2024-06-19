import React from 'react'
import { Link } from 'react-router-dom'

function Backed() {
  return (
    <div className='top__backed'>
        <h5 className='top__backed-title'>Backed by</h5>
        <ul className="top__backed-list">
            <li className='top__backed-item'>
                <Link className='top__backed-link' to={'#'}>
                    <img className='top__backed-icon'  src='./image/homepage/backed-1.png'/>
                </Link>
            </li>
            <li className='top__backed-item'>
                <Link className='top__backed-link' to={'#'}>
                    <img className='top__backed-icon'  src='./image/homepage/backed-2.png'/>
                </Link>
            </li>
            <li className='top__backed-item'>
                <Link className='top__backed-link' to={'#'}>
                    <img className='top__backed-icon'  src='./image/homepage/backed-3.png'/>
                </Link>
            </li>
            <li className='top__backed-item'>
                <Link className='top__backed-link' to={'#'}>
                    <img className='top__backed-icon'  src='./image/homepage/backed-4.png'/>
                </Link>
            </li>
            <li className='top__backed-item'>
                <Link className='top__backed-link' to={'#'}>
                    <img className='top__backed-icon'  src='./image/homepage/backed-5.png'/>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Backed