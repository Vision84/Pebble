import React from 'react'

type ProfileProps = {
    image?: any
    name: string
    title: string
}

const Profile = (props:ProfileProps) => {
  return (
    <div className='flex flex-col flex-1 gap-3 items-center'>
        <div className='flex-1 items-center flex-col border-black dark:border-white border-solid border'>
          <img className='object-cover h-full' alt={props.name} src={props.image} />
        </div>
        <div className='flex-shrink w-full items-center flex-col text-center'>
            <h1 className='flex-1 text-2xl'>{props.name}</h1>
            <h2 className='flex-1 text-1xl italic'>{props.title}</h2>
        </div>
    </div>
  )
}

export default Profile