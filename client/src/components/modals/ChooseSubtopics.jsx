import { CheckCircleFilled, XOutlined } from '@ant-design/icons'
import React from 'react'

const ChooseSubtopics = () => {
    return (
        <div className='flex justify-center bg-gray-300 h-[100vh]'>
            <div className='flex flex-col  w-[550px] my-10 bg-white rounded-[1rem]'>
                <div className='text-[26px] py-2 flex justify-center '>
                    <XOutlined />
                </div>
                <div className='pt-2 px-16'>
                    <div className='text-3xl font-semibold'>
                        What should we call you?
                    </div>
                    <div className='text-sm py-2 text-gray-500 font-semibold'>
                        Your @username is unique. You can always change it later.
                    </div>
                    <div className='text-gray-500 p-2 my-7 border border-gray-300 rounded'>
                        <div className='text-[0.8rem]'>Username</div>
                        <div className='flex justify-between'>
                            <input
                                type="text"
                                placeholder='@ username'
                                className='outline-none'
                            />
                            <div className='text-green-500 pr-1'><CheckCircleFilled /></div>
                        </div>
                    </div>
                    <div className='text-blue-400 text-sm font-medium'>
                        <div >
                            <span>@sahu74728, </span>
                            <span>@RakeshSahu</span>
                        </div>
                        <div className='mt-3'>
                            Show more
                        </div>
                    </div>
                        <div className='rounded-full p-3 mt-56 text-center border border-gray-300'>
                        <button className='font-bold'>Skip for now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseSubtopics