import React from 'react'
import Card from '@/components/Card'
import Image from 'next/image'

const ShowSchools = ({loading}) => {

  const arr  = [1,2,3,4,5,6]
  return (
    <div>
         <div className='flex flex-col items-center gap-6'>
              <h1 className='text-5xl md:text-6xl text-center font-bold text-gray-900'>School Search</h1>
              <p className='text-base underline decoration-sky-500/30 italic  font-medium text-gray-400'>Find the right school for your child.</p>
              <div className='relative w-[400px] md:w-[800px] flex items-center gap-2'>
                  <Image 
                  className="absolute left-4" 
                  src="/search.svg" 
                  width={30} 
                  height={30} alt="search"/>
                  <input className='w-[500px] md:w-full py-4 px-14 text-[16px] rounded-md outline-none border' type="text" placeholder='School name..' />
                  <button className='text-lg font-bold  bg-green-500 text-white hover:bg-green-600 rounded-md py-3 px-6'>Search</button>
              </div>
         </div>

        <div className="max-w-xxl py-6 px-20 grid shadow-2xl h-max-content  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-5 mb-5">
        {arr.fill("kiwi", 1,5).map((food) => (
          <Card item={food} loading={loading} />
        ))}
      </div>
    </div>
  )
}

export default ShowSchools