import { CheckCircleFilled, CheckCircleOutlined, XOutlined } from '@ant-design/icons'

import axios from 'axios';
import { useEffect, useState } from "react";


import { useNavigate } from 'react-router-dom'


import { useDispatch, useSelector } from 'react-redux';

import { followUnfollowUser, followUser, unfollowUser } from '../../features/user/userSlice';

const FollowPeople = ({ data, birthdate, username, selectedLanguages, selectedInterests }) => {
  const [error, setError] = useState(null)
  const [allUser, setAllUser] = useState([])

  const [following, setFollowing] = useState([])
  const [followers, setFollowers] = useState([])

  const dispatch = useDispatch();
  const navigate = useNavigate()



  console.log(username)

  const redirectToLogin = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;

    console.log(data)
    try {
      const response = await axios.post("http://localhost:8080/signup", { name, email, password, birthdate, username, selectedLanguages, selectedInterests, following, followers });
      console.log(response, "response:all data of user")


      navigate("/login");
      alert("Sign up successful. Please log in.");

    } catch (error) {
      console.log(error);
      if (error.response.data.error === 'User already exists') {
        setError('User already exists');
      } else {
        setError('Sign up failed. Please try again.');
      }
    }
  };


  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getAllUsers");
      setAllUser(response.data?.user, "response: all data of user");
      console.log(response)
    } catch (error) {
      console.log(error);
      console.log("Internal server error");
    }
  };
  console.log(allUser, "setters")

  useEffect(() => {

    getAllUsers();

  }, []);



  const handleFollow = (userId) => {
    dispatch(followUnfollowUser(userId));
    dispatch(followUser(userId));
  };

  const handleUnfollow = (userId) => {
    dispatch(followUnfollowUser(userId));
    dispatch(unfollowUser(userId));
  };



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

          <WhoToFollowCard allUser={allUser} handleFollow={handleFollow} handleUnfollow={handleUnfollow} />

          <button onClick={redirectToLogin} className=' cursor-pointer mb-5 bg-black text-white rounded-full p-3 mt-20 text-center border border-gray-300' >
            <span className=' block font-bold  w-96'>Next</span>
          </button>
        </div>

        {error && <div>{error}</div>}
      </div>
    </div>
  )
}

export default FollowPeople


const SuggestedProfile = ({ follow, handleFollow, handleUnfollow }) => {

  console.log(follow._id, "OneMan")
  return (
    <div className="flex items-center justify-between py-2 px-4">
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full" src="azoo.jpg" alt={"azmat"} />
        <div className="ml-3">
          <p className="text-sm font-semibold text-gray-800">{follow.name}
            {follow.verified && <span>bluetick</span>}
          </p>
          <p className="text-xs text-gray-600">{follow.username}</p>
        </div>
      </div>
      <button onClick={() => handleFollow(follow._id)}>Follow</button>
      <button onClick={() => handleUnfollow(follow._id)}>Unfollow</button>
    </div>
  );
};

const WhoToFollowCard = ({ allUser, handleUnfollow, handleFollow }) => {
  return (
    <div className="bg-[#f7f9f9] mb-4 p-3 rounded-2xl">
      <div className="">
        <div className="font-bold text-xl mb-2">Who to follow</div>
        {allUser && allUser.map(follow => (
          <SuggestedProfile
            key={follow._id}
            follow={follow}
            handleUnfollow={handleUnfollow}
            handleFollow={handleFollow}

          />
        ))}
        <button className="text-blue-500 hover:text-blue-600 text-sm font-semibold py-2">
          Show more
        </button>
      </div>
    </div>
  );
};









