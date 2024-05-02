'use client'
import Image from "next/image";
import { useState } from "react";
export default function Navigation()
{
    const [showNav, setShowNav] = useState(false);
    return (
        <>
            <div className="navigation-container">
                <ul>
                    <li className='menu'>
                        <Image src={`/assets/big-randomizer-1.png`} width={205} height={40} priority onClick={()=>{setShowNav(prevValue => !prevValue)}}alt="Randomizer-picture"/>
                    </li>
                    {showNav && 
                    (
                        <li className="menu-icons">
                            <div className="icons home">
                                <Image src={`/assets/home.png`} width={32} height={32} priority alt="Randomizer-picture"/>
                            </div>
                            <div className="icons upload">
                                <Image src={`/assets/upload.png`} width={32} height={32} priority alt="Randomizer-picture"/>
                            </div>
                            <div className="icons winner">
                                <Image src={`/assets/winner.png`} width={32} height={32} priority alt="Randomizer-picture"/>
                            </div>
                            <div className="icons settings">
                                <Image src={`/assets/settings.png`} width={32} height={32} priority alt="Randomizer-picture"/>
                            </div>
                        </li>
                    )}
                    <li className='logo'>
                        <Image src={`/assets/cwd-logo.png`} width={65} height={65} priority alt="Randomizer-picture"/>
                        <p>Cloudwalk Digital</p>
                    </li>
                    <li>
                        <button className='raffle-button'><span>Raffle</span></button>
                    </li>
                </ul>
            </div>
        </>
    );
}