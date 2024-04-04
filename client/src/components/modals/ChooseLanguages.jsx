import { CheckCircleFilled, XOutlined } from '@ant-design/icons'
import React from 'react'

const ChooseLanguages = () => {
  return (
    <div className='flex justify-center bg-gray-300 h-[100vh]'>
      <div className='flex flex-col  w-[550px] my-10 bg-white rounded-[1rem]'>
        <div className='text-[26px] py-2 flex justify-center '>
          <XOutlined />
        </div>
        <div className='pt-2 px-16'>
          <div className='text-3xl font-semibold'>
            Which languages do you speak?
          </div>
          <div className='text-sm py-2 text-gray-500 font-semibold'>
            You'll be able to see posts, people and trends in any languages you choose.
          </div>
          <div className='overflow-auto h-72 mt-2 pr-4'>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>Bangla - বাংলা</span>
              <input type="checkbox" className='text-lg' />
            </div>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>English</span>
              <input type="checkbox" className='text-lg' />
            </div>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>Gujarati - ગુજરાતી</span>
              <input type="checkbox" className='text-lg' />
            </div>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>Hindi - हिन्दी</span>
              <input type="checkbox" className='text-lg' />
            </div>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>Kannada - ಕನ್ನಡ ಭಾಷೆ</span>
              <input type="checkbox" className='text-lg' />
            </div>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>Marathi - मराठी</span>
              <input type="checkbox" className='text-lg' />
            </div>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>Nepali - नेपाली</span>
              <input type="checkbox" className='text-lg' />
            </div>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>Punjabi - ਪੰਜਾਬੀ</span>
              <input type="checkbox" className='text-lg' />
            </div>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>Tamil - தமிழ்</span>
              <input type="checkbox" className='text-lg' />
            </div>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>Tamil - தமிழ்</span>
              <input type="checkbox" className='text-lg' />
            </div>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>Tamil - தமிழ்</span>
              <input type="checkbox" className='text-lg' />
            </div>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>Tamil - தமிழ்</span>
              <input type="checkbox" className='text-lg' />
            </div>
            <div className='flex justify-between border-b border-gray-100 py-2'>
              <span className='text-sm text-gray-500 font-medium'>Tamil - தமிழ்</span>
              <input type="checkbox" className='text-lg' />
            </div>
          </div>
          <div className='text-blue-400 text-sm font-medium text-center mt-4'>
            Show more
          </div>
          <div className='rounded-full p-2 text-center bg-black'>
            <button className='text-sm font-bold text-white'>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseLanguages