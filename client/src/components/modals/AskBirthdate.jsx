import { XOutlined } from '@ant-design/icons'
import React from 'react'

const AskBirthdate = () => {
    return (
        <div className='flex justify-center bg-gray-300 h-[100vh]'>
            <div className='flex flex-col items-center w-[550px] my-10 bg-white rounded-[1rem]'>
                <div className='text-[26px] py-2 '>
                    <XOutlined />
                </div>
                <div className='px-16 pt-2 '>
                    <div className='text-3xl font-semibold'>
                        What's your birth date?
                    </div>
                    <div className='text-sm py-1 text-gray-500 font-semibold'>
                        This won't be public.
                    </div>
                    <div className='text-gray-500 py-4'>
                        <input type="date" />
                    </div>
                    <div className='text-sm text-gray-500 font-medium'>Terms of Service
                    By signing up, you agree to the <span className='text-blue-400'></span> and <span className='text-blue-400'>Privacy Policy</span>, including <span className='text-blue-400'>Cookie Use</span>. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <span className='text-blue-400'>Learn more</span>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <span className='text-blue-400'>here</span>.
                    </div>
                    <div className='bg-gray-500 rounded-full p-3 mt-48 text-center'>
                        <button className='text-white font-bold'>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskBirthdate