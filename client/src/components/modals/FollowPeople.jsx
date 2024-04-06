import { CheckCircleFilled, CheckCircleOutlined, XOutlined } from '@ant-design/icons'
import React from 'react'

const FollowPeople = () => {
  return (
    <div className='flex justify-center bg-gray-300'>
      <div className='flex flex-col  w-[500px] my-10 bg-white rounded-[1rem]'>
        <div className='text-[26px] py-2 flex justify-center '>
          <XOutlined />
        </div>
        <div className='pt-2 px-16'>
          <div className='text-3xl font-semibold'>
            Don't miss out
          </div>
          <div className='text-sm py-2 text-gray-500 font-semibold'>
            When you follow someone, you'll see their posts in your Timeline. You'll also get more relevant recommendations.
          </div>

          <WhoToFollowCard />

          <div className='rounded-full p-2 mb-10 text-center bg-gray-500'>
            <button className='text-sm font-bold text-white'>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowPeople


const SuggestedProfile = ({ profile }) => (
  <div className="flex items-center justify-between py-2 px-4  hover:bg-gray-200 rounded transition-all" >
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full" src={profile.avatar} alt={profile.name} />
      <div className="ml-3">
        <p className="text-sm font-semibold text-gray-800">{profile.name}
          <span> {profile.isverified}</span>
        </p>
        <p className="text-xs text-gray-600">@{profile.handle}</p>
      </div>
    </div>
    <button className="bg-black hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-sm transition-all">
      Follow
    </button>
  </div>
);

const WhoToFollowCard = () => {

  const profiles = [
    {
      name: 'Narendra Modi',
      handle: 'narendramodi',
      avatar: 'https://pbs.twimg.com/profile_images/1700051019525488640/VRqy0bTE_400x400.jpg',
    },
    {
      name: 'Nature is Amazing',
      handle: 'AMAZINGNATURE',
      avatar: 'https://pbs.twimg.com/profile_images/1675131429003427841/dahpFfla_400x400.jpg',
      isverified: (
        <span className="text-blue-500"><CheckCircleFilled /></span>
      )
    },
    {
      name: 'Magic | マジック',
      handle: 'MagicStaysGod',
      avatar: 'https://pbs.twimg.com/profile_images/1627496447527768070/V-GicvkF_400x400.jpg',
    },
    {
      name: 'PlayStation',
      handle: 'PlayStation',
      avatar: 'https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_400x400.jpg',
    },
  ];

  return (
    // <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg ">
    <div className=" mb-4 p-3 rounded">
      <div className="">
        <div className="font-bold text-lg mb-2">Follow 1 or more accounts</div>
        {profiles.map((profile) => (
          <SuggestedProfile key={profile.handle} profile={profile} />
        ))}
        {/* <button className="text-blue-500 hover:text-blue-600 text-sm font-semibold py-2">
                    Show more
                </button> */}
      </div>
    </div>
  );
};










