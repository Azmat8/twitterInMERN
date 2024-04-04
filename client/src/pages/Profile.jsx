import React from 'react'
import Sidebar from '../components/Sidebar'
import { ArrowLeftOutlined, CalendarOutlined, EllipsisOutlined } from '@ant-design/icons'

const Profile = () => {
  return (
    <div>
      <div className="flex justify-center gap-10">
        <div className="flex gap-2">
          <div>
            <Sidebar />
          </div>
          <div className="w-[600px] border-r border-l ">
            <div className="flex">
              <div className="flex gap-5 p-1 justify-center items-center ">
                <div className='p-1 px-3 rounded-full hover:bg-gray-200 transition-all'>
                  <span className='cursor-pointer'><ArrowLeftOutlined /></span>
                </div>
                <div>
                  <div className='text-lg font-semibold'>Sachin Dhayatadak</div>
                  <div className='text-sm text-gray-600'>1 post</div>
                </div>
              </div>
            </div>
            <div className=''>
              <div className="relative">
                <div className='bg-gray-300 relative w-full h-48'></div>
                <div className='flex pt-3 pr-4 justify-end items-center gap-2'>
                  <div className='p-1 px-2 rounded-full border border-gray-300'>
                    <span className='cursor-pointer text-[15.5px] font-semibold'>Edit Profile</span>
                  </div>
                  {/* // this will be used for peoples profile page
                  <div className='p-1 px-2 text-2xl font-bold rounded-full border border-gray-300 transition-all'>
                    <span className='cursor-pointer'><EllipsisOutlined /></span>
                  </div>
                  <div className='py-2 px-4 bg-black text-white font-semibold rounded-full'>
                    <span>Follow</span>
                  </div>
                   */}
                </div>
                <div className="bg-white relative w-full h-8"></div>
                <div className="absolute top-[70%] left-[14%] transform -translate-x-1/2 -translate-y-1/2">
                  <div className="rounded-full overflow-hidden border-[5px] border-white">
                    <img
                      src="https://pbs.twimg.com/profile_images/1271692990898036739/RJBGQNYZ_400x400.jpg"
                      alt="Profile Picture"
                      className="w-32 h-32 "
                    />
                  </div>
                </div>
              </div>
              <div className='pl-4'>
                <div className='text-xl font-bold '>Sachin Dhayatadak</div>
                <div className='text-sm'>
                  <div className='text-gray-500'>@SachinDhayatad1</div>
                  <div className='text-gray-500 mt-3'><CalendarOutlined /> Joined June 2020</div>
                  <div className='flex mt-2 gap-4'>
                    <div>
                      <span className='font-semibold'>21</span>
                      <span className='text-gray-500 '> Following</span>
                    </div>
                    <div>
                      <span className='font-semibold'>2</span>
                      <span className='text-gray-500 '> Followers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-between mt-4 text-gray-600 '>
                <div className='p-3 px-[1.6rem] hover:bg-gray-200 transition-all'>Posts</div>
                <div className='p-3 px-[1.6rem] hover:bg-gray-200 transition-all'>Replies</div>
                <div className='p-3 px-[1.6rem] hover:bg-gray-200 transition-all' >Highlights</div>
                <div className='p-3 px-[1.6rem] hover:bg-gray-200 transition-all'>Articles</div>
                <div className='p-3 px-[1.6rem] hover:bg-gray-200 transition-all'>Media</div>
                <div className='p-3 px-[1.6rem] hover:bg-gray-200 transition-all'>Likes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sachin Dhayatadak
// @SachinDhayatad1
// Joined June 2020
// 21 Following
// 2 Followers
// Posts
// Replies
// Highlights
// Articles
// Media
// Likes

export default Profile