import { ArrowLeftOutlined, ImportOutlined, XOutlined } from '@ant-design/icons'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBirthdate } from '../../features/user/userSlice'
import { useDispatch } from 'react-redux'
const AskBirthdate = ({ birthdate, setBirthdate }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const redirecyToAskUserName = () => {
        dispatch(getBirthdate(birthdate));
        navigate("/chooseUsername")

    }
    const backToSignupPage = () => {
        navigate("/")

    }



    return (
        <div className='flex justify-center bg-gray-300 h-[100vh]'>

            <button onClick={backToSignupPage}>
                <ArrowLeftOutlined />
            </button>
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
                        <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                    </div>
                    <div className='text-sm text-gray-500 font-medium'>By signing up, you agree to the <span className='text-blue-400'></span> and <span className='text-blue-400'>Privacy Policy</span>, including <span className='text-blue-400'>Cookie Use</span>. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <span className='text-blue-400'>Learn more</span>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <span className='text-blue-400'>here</span>.
                    </div>
                    <button onClick={redirecyToAskUserName} className=' cursor-pointer bg-black text-white rounded-full p-3 mt-20 text-center border border-gray-300'>
                        <span className=' block font-bold  w-96' s >Sign up</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AskBirthdate