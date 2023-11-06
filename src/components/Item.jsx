"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


const Item = ({ item }) => {

    const router = useRouter();

    return (
        <>
            <div className='mb-3 relative w-[300px] h-[300px] bg-red-400 hover:cursor-pointer' onClick={() => router.push(`/${item.id}`)}>
                <div className='absolute top-0 w-full px-5 py-3 font-bold text-2xl'>{item.firstName}</div>
                <img className='w-full h-full' src={item.image} alt="" />
            </div>
        </>
    )
}

export default Item
