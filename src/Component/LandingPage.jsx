import React from 'react'
import landImage from '../images/pebbles-arragement-top-view.jpg'
import arizo from '../images/logo1.png'

const LandingPage = () => {
    return (
        <div>
            <div
               
                className='bg-[#2a2a2c] w-full h-screen fixed top-0 left-0 bottom-0'
            >
                <div className='pl-10 pt-6 '>
                    <img src={arizo} alt="logo" className=' rounded-lg w-24' />
                </div>

                <div className='flex justify-between p-3'>
                    <div className=' pt-4 pl-8 w-full md:w-1/2 text-[#d9b348]'>
                        <p className='py-4'>Welcome to Arizona chipping</p>
                        <p className='text-3xl md:text-2xl'>Please select location you are ordering from.</p>
                        <div className='border-b-2 w-24 mt-6'></div>
                        <form className='py-8 md:py-4'>
                            <select className='p-4 rounded-md focus:bg-[#d9b348] text-sm text-gray-400 w-full'>
                                <option value="">Select Location</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Anambra">Anambra</option>
                                <option value="Ebonyi">Ebonyi</option>
                            </select>
                            <p className='py-3 text-xs' style={{ marginTop: '10px' }}>Select from the dropdown below</p>
                            <button type="submit" className=' rounded-lg text-[#2a2a2c] bg-[#97969a] mt-6 px-2 py-[1rem] w-40 '>
                                Start ordering
                            </button>
                        </form>
                    </div>
                    <div> 
                        <img src={landImage} className='w-[300px] hidden md:block h-[300px] rounded-full ' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
