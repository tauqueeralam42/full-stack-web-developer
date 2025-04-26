import React from 'react'

export default function Spinner() {
  return (
    <div className='flex flex-row items-center justify-center h-[70vh]'>
        <p className='font-bold text-xl'>
        Loading
        </p>
        <div className='spinner'></div>

    </div>
  )
}
