'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ChangeRandomizer() {
    const [imgNumber, setImgNumber] = useState(1);
    const [imageUrl, setImageUrl] = useState(`/assets/big-randomizer-${imgNumber}.png`);

    useEffect(() => {
        const intervalID = setInterval(() => {
            const newImgNumber = (imgNumber % 4) + 1; // Ensures loop between 1 and 5
            setImageUrl(`/assets/big-randomizer-${newImgNumber}.png`);
            setImgNumber(newImgNumber);
        }, 500);
        return () => {
            console.log('Cleaning up the interval from the previous useEffect');
            clearInterval(intervalID)
        };
    }, [imageUrl]);
    //1
    return (
        <>
            <Image src={imageUrl} width={365} height={60} priority alt="Randomizer-picture"/>
        </>
  );
}
