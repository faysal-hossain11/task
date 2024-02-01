import React from 'react';
import Logo from '../assets/img/logo.png'; 
import Image from 'next/image';
const Sidebar = () => {
    return (
        <div className='w-[100px] h-[927px] bg-white rounded-[24px] '>
            <div>
                <Image src={Logo} alt='logo'/>
            </div>
        </div>
    );
};

export default Sidebar;