import React from 'react';

const Navbar = () => {
    return (
<div className="navbar bg-base-100  max-w-[1270px] mx-auto border-b-1 rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Download</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-[15px] md:text-xl">CS — Ticket System</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Download</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end ">
                <a className="btn w-[115px] md:w-[145px] h-[35px] md:h-[45px] font-semibold text-[12px] md:text-[16px] bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white">+ New Ticket</a>
            </div>
        </div>
    );
};

export default Navbar;