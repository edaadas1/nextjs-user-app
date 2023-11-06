import React from 'react'
import Item from './../components/Item';


const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/users");
    return res.json();
}


const Page = async () => {

    const data = await fetchData();

    console.log("data", data)

    return (
        <div className='flex flex-wrap gap-9 items-start px-5 mt-10'>
            {
                data.users.map((item) => (
                    <Item item={item} />
                ))
            }
        </div>
    )
}

export default Page
