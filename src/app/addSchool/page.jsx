"use client"
import React,{useState} from 'react'

const AddSchool = () => {
    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('')
    const [contact,setContact] = useState('')
    const [img,setImg] = useState(null)

    const addSchool = (e) =>{

      e.preventDefault()
      console.log(e.target.value)
    }

    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 shadow-md p-10">
        <div>
          <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>Add School</h2>
        </div>
        <form className="mt-2 space-y-6" onSubmit={addSchool}>
          
          <div className="rounded-md shadow-sm -space-y-px flex gap-4 flex-col">
            <div>
              <label htmlFor="name" className="mb-2">
                Name :
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                autoComplete="name"
                required
                className="mt-2 appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="address" className="mb-2">
                 Address :
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                autoComplete="address"
                required
                className="mt-2 appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Address"
              />
            </div>

            <div>
              <label htmlFor="city" className="mb-2">
                 City :
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                autoComplete="city"
                required
                className="mt-2 appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="City"
              />
            </div>


            <div>
              <label htmlFor="state" className="mb-2">
                 State :
              </label>
              <input
                id="state"
                name="state"
                type="text"
                autoComplete="state"
                required
                className="mt-2 appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="State"
              />
            </div>
            <div>
              <label htmlFor="contact" className="mb-2">
                 Contact :
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                value={contact}
                onChange={(e)=>setContact(e.target.value)}
                autoComplete="contact"
                required
                className="mt-2 appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contact"
              />
            </div>
            <div>
              <label htmlFor="file" className="mb-2">
                 Uplaod File :
              </label>
              <input
                id="file"
                name="file"
                type="file"
                onChange={(e)=>setFiel(e.target.value)}
                className="mt-2 appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>

          </div>
  
        
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center
              py-2 px-4 border border-transparent text-sm font-medium
               text-white bg-indigo-600 hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-indigo-500"
            >
  
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
    )
  
}

export default AddSchool