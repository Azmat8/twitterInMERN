import { CheckCircleOutlined, EllipsisOutlined, CheckCircleFilled } from "@ant-design/icons";
import axios from "axios"
import SearchBar from "./Searchbar";
import userSlice from "../features/user/userSlice";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { followUnfollowUser, followUser, unfollowUser } from '../features/user/userSlice';


const Sidebar2 = () => {

    const [followers, setFollowers] = useState()


    const dispatch = useDispatch();
    const followerses = useSelector(state => state.user.following);


    // get all users
    const getAllUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/getAllUsers");
            setFollowers(response.data?.user, "response: all data of user");
            console.log(response)
        } catch (error) {
            console.log(error);
            console.log("Internal server error");
        }
    };
    console.log(followers, "setters")

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


    return <div >
        <div className="mb-4 mt-[6px]">
            <SearchBar />
        </div>
        <div className=" bg-[#f7f9f9] mb-4 p-3 rounded-2xl">
            <div>
                <h2 className="text-xl mb-1 font-bold">What’s happening</h2>
                <div className="p-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Trending in India</span>
                        <span className="text-sm text-gray-700"><EllipsisOutlined /></span>
                    </div>
                    <div className="font-semibold">#india</div>
                    <div className="text-sm text-gray-500">101K posts</div>
                </div>
                <div className="p-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Trending in world</span>
                        <span className="text-sm text-gray-700"><EllipsisOutlined /></span>
                    </div>
                    <div className="font-semibold">#srk</div>
                    <div className="text-sm text-gray-500">5m post</div>
                </div>
                <div className="p-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Entertainment · Trending</span>
                        <span className="text-sm text-gray-700"><EllipsisOutlined /></span>
                    </div>
                    <div className="font-semibold">#Thalapathy69</div>
                    <div className="text-sm text-gray-500">6,643 posts</div>
                </div>
                <div className="p-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Trending in India</span>
                        <span className="text-sm text-gray-700"><EllipsisOutlined /></span>
                    </div>
                    <div className="font-semibold">#Taiwan</div>
                    <div className="text-sm text-gray-500">106K posts</div>
                </div>
                <div className="p-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Sports · Trending</span>
                        <span className="text-sm text-gray-700"><EllipsisOutlined /></span>
                    </div>
                    <div className="font-semibold">#RCBvsLSG</div>
                    <div className="text-sm text-gray-500">65K posts</div>
                </div>
            </div>
        </div>
        <div>
            <WhoToFollowCard followers={followers} />
        </div>



    </div>
}

export default Sidebar2



// const SuggestedProfile = ({ follow }) => {

//     console.log(follow, "hellow mama")

//     return <>



//         <div className="flex items-center justify-between py-2 px-4">
//             <div className="flex items-center">
//                 <img className="w-10 h-10 rounded-full" src="azoo.jpg" alt={"azmat"} />
//                 <div className="ml-3">
//                     <p className="text-sm font-semibold text-gray-800">{follow.name}
//                         <span> {follow.verified ? <span>bluetick</span> : ""}</span>
//                     </p>
//                     <p className="text-xs text-gray-600">{follow.username}</p>
//                 </div>
//             </div>
//             <button className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-sm">
//                 Follow
//             </button>
//         </div>
//     </>
// };

// chat gpt
const SuggestedProfile = ({ follow }) => {
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
            {isFollowing ? (
                <button className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-sm" onClick={() => handleUnfollow(follow._id)}>
                    Unfollow
                </button>
            ) : (
                <button className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-sm" onClick={() => handleFollow(follow._id)}>
                    Follow
                </button>
            )}
        </div>
    );
};


// const WhoToFollowCard = ({ followers }) => {

//     console.log(followers)

//     return (
//         <>
//             <div className="bg-[#f7f9f9] mb-4 p-3 rounded-2xl">
//                 <div className="">
//                     <div className="font-bold text-xl mb-2">Who to follow</div>
//                     {followers && followers.map((follow) => (
//                         <SuggestedProfile key={Math.random()} follow={follow} />
//                     ))}
//                     <button className="text-blue-500 hover:text-blue-600 text-sm font-semibold py-2">
//                         Show more
//                     </button>
//                     {/* {follow?.isFollowing ? (
//                         <button onClick={() => handleUnfollow(follow.id)}>Unfollow</button>
//                     ) : (
//                         <button onClick={() => handleFollow(follow.id)}>Follow</button>
//                     )} */}
//                 </div>
//             </div>
//         </>
//     );
// };
s


const WhoToFollowCard = ({ followers }) => {
    return (
        <div className="bg-[#f7f9f9] mb-4 p-3 rounded-2xl">
            <div className="">
                <div className="font-bold text-xl mb-2">Who to follow</div>
                {followers && followers.map(follow => (
                    <SuggestedProfile
                        key={follow._id}
                        follow={follow}
                    />
                ))}
                <button className="text-blue-500 hover:text-blue-600 text-sm font-semibold py-2">
                    Show more
                </button>
            </div>

            {followers?.map((follow) => (
                <div key={follow._id}>
                    {follow.name}
                    <button onClick={() => handleFollow(follow._id)}>Follow</button>
                    <button onClick={() => handleUnfollow(follow._id)}>Unfollow</button>
                </div>
            ))}
        </div>
    );
};