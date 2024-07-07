import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities = [ 
        {
            id: 1,
            name: "Mumbai"
        },

        {
            id: 2,
            name: "Pune"
        },

        {
            id: 3,
            name: "Nashik"
        },

        {
            id: 4,
            name: "Nagpur"
        },

        {
            id: 5,
            name: "Delhi"
        }
    ]
  return (
    <div className='flex items-center justify-around my-6'>

        { cities.map((city) => (
            <button className='text-lg font-medium hover:bg-gray-700/20 md:px-3 py-2 rounded-md transition ease-in' key={city.id}
             onClick={() => setQuery( {q: city.name} )}
            >{city.name}</button>
        ))}
       
    </div>
  )
}

export default TopButtons
