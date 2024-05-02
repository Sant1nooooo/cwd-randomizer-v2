'use client'
import  "@/app/styles/analytics.css"
import { useState } from "react";
import Image from "next/image";
export default function Analytics()
{
    const [totalWinner, setTotalWinner] = useState(80);
    const [nextEvent, setNextEvent] = useState('February 06, 2024');
    const [recentPlayed, setRecentPlayed] = useState('January 01, 2024');
    const [days, setDays] = useState(30);
    return(
        <>
            <div className="analytics-container">
                <div className="winner">
                    <div className="img-container">
                        <Image src='/assets/trophy.png' width={88} height={85} alt="Trophy Image" priority/>
                    </div>
                    <div className='description'>
                        <p className='description-title'>Total Winners</p>
                        <p className='sub-text'>{totalWinner}</p>
                        <p className='sub-text'>For the past {days} Day (s)</p>
                    </div>
                </div>
                <div className="event">
                    <div className="img-container">
                        <Image src='/assets/calendar.png' width={78} height={87} alt="Calendar Image" priority/>
                    </div>
                    <div className="description">
                        <p className='description-title'>Next Event</p>
                        <p className='sub-text'>{nextEvent}</p>
                    </div>
                </div>
                <div className="recent">
                    <div className="img-container">
                        <Image src='/assets/cone.png' width={87} height={87} alt="Celebration Cone Image" priority/>
                    </div>
                    <div className="description">
                        <p className='description-title'>Recently Played</p>
                        <p className='sub-text'>{recentPlayed}</p>
                    </div>
                </div>
            </div>
        </>
    );
}