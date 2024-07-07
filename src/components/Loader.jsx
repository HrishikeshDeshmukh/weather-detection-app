import React from 'react'

const Loader = () => {
    return (
        <div className='fixed inset-0 flex justify-center items-center'>
            <div className="flex-col gap-4 w-full flex items-center justify-center">
                <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                    {/* Optional: You can add a spinner icon or text here if needed */}
                </div>
            </div>
        </div>
    )
}


export default Loader
