import React from 'react'

const fetchUser = async (id) => {
    const user = await fetch(`https://dummyjson.com/users/${id}`);
    return user.json()
}

const Page = async ({ params }) => {

    console.log("params", params)

    const id = params.id;

    console.log("id", id)

    const user = await fetchUser(id);

    console.log("user", user)

    return (
        <>
            <div className='flex items-center justify-center border-2 border-black bg-slate-900 text-white rounded-lg w-3/4 mx-auto gap-20 px-10 py-14 mt-20'>
                <img src={user.image} alt="" />
                <div className='flex flex-col'>
                    <div className='flex'><p className='font-bold'>Firstname and Lastname :</p> <p className='ml-3 mr-2'> {user.firstName}</p> <p>{user.lastName}</p> </div>
                    <div className='flex'><p className='mr-2 font-bold'>Age :</p> {user.age}</div>
                    <div className='flex'><p className='mr-2 font-bold'>Gender :</p> {user.gender}</div>
                    <div className='flex'><p className='mr-2 font-bold'>Mail :</p>{user.email}</div>
                    <div className='flex'><p className='mr-2 font-bold'>Phone :</p>{user.phone}</div>
                    <div className='flex'><p className='mr-2 font-bold'>Birth Date :</p>{user.birthDate}</div>
                </div>
            </div>
        </>
    )
}

export default Page
