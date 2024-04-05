import { CheckCircleFilled, XOutlined } from '@ant-design/icons'
import React from 'react'

const ChooseLanguages = () => {

  const categories = [
    'Music', 'Entertainment', 'Sports', 'Gaming', 'Fashion & beauty',
    'Food', 'Business & finance', 'Arts & culture', 'Technology', 'Travel',
    'Outdoors', 'Fitness', 'Careers', 'Animation & comics', 'Family & relationships', 'Gaming',
  ];

  return (
    <div className='flex justify-center bg-gray-300'>
      <div className='flex flex-col  w-[500px] my-6 bg-white rounded-[1rem] pb-4'>
        <div className='text-[26px] py-2 flex justify-center '>
          <XOutlined />
        </div>
        <div className='pt-2 px-14'>
          <div className='text-3xl font-semibold'>
            What do you want to see on X?
          </div>
          <div className='text-sm py-2 text-gray-500 font-semibold'>
            Select at least 3 interests to personalize your X experience. They will be visible on your profile.
          </div>
          <div className="container mx-auto px-2 mt-4">
            <div className="grid grid-cols-3 gap-3 content-end">
              {categories.map(category => (
                <div key={category} className="border-2 text-sm font-semibold rounded-xl cursor-pointer flex flex-col justify-end h-20 p-2">
                  <span className="text-left">{category}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='flex mt-8 justify-between items-center'>
            <div className='text-xs text-gray-500'>
              0 of 3 selected
            </div>
            <div className='rounded-full px-4 p-1 text-center bg-gray-500'>
              <button className='text-sm font-bold text-white'>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseLanguages