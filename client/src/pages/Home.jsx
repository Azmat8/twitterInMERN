import Sidebar from "../components/Sidebar";
import Sidebar2 from "../components/Sidebar2";
import { useSelector } from "react-redux";
import posts from "../posts.json";
import { BarChartOutlined, BookOutlined, CameraOutlined, CheckCircleOutlined, EllipsisOutlined, EnvironmentOutlined, FileImageOutlined, GifOutlined, HeartOutlined, RetweetOutlined, SettingOutlined, SmileOutlined, UploadOutlined, WechatWorkOutlined } from '@ant-design/icons'
import moment from "moment";
const Home = () => {

 
  const user = useSelector((store) => store.user.name);
  console.log(user)
  return (
    <div className="flex justify-center gap-10">
      <div className="flex justify-center gap-10">
        <div className="flex gap-2">
          <div>
            <Sidebar />
          </div>
          <div className="w-[600px] border-r border-l ">
            <div className="flex justify-between items-center">

              <nav className="flex gap-6 m-3 font-semibold text-gray-500">
                <div>For You</div>
                <div>Following</div>
                <div>Newsroom</div>
                <div>Podcasters of India</div>
                <div>Animals</div>
              </nav>
              <div className="pr-4"><SettingOutlined /></div>
            </div>

            <div className="border-y">
              <div className="flex" >
                <div className="w-10 my-4 ml-4">
                  <img
                    className="w-10 h-10 rounded-full border-y border-gray-200"
                    src="https://pbs.twimg.com/profile_images/1770736943707336704/OX0DcpkZ_bigger.jpg"
                    alt="Profile"
                  />
                </div>
                <div className="w-full">
                  <div>
                    <input
                      className="flex-1 mt-4 mb-2 p-2 text-xl w-full focus:outline-none"
                      placeholder="What is happening?!"
                    />
                  </div>

                  <div className="flex justify-between gap-x-20 mb-2 mr-3">
                    <div className="flex justify-center items-center gap-x-5">
                      <div className="text-blue-500 text-lg"><CameraOutlined /></div>
                      <div className="text-blue-500 text-xl"><GifOutlined /></div>
                      <div className="text-blue-500"><SmileOutlined /></div>
                      <div className="text-blue-500"><EnvironmentOutlined /></div>
                    </div>
                    <div className="gap-x-2 px-4 py-1 bg-sky-300 rounded-full">
                      <span className="text-white  font-bold">Post</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="recommendation">
              {
                posts.map((post) => (
                  <TweetCard key={post.id} post={post}/>
                ))
              }
            </div>

          </div>
          <div className="ml-5">
            <Sidebar2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

const TweetCard = ({ post }) => {
  const { user, created_at, text, entities } = post;
  const formattedDate = moment(created_at).format('MMM D');

  const renderMedia = (media) => {
    return media.map((item, index) => {
      switch (item.type) {
        case 'photo':
          return <img key={index} className="rounded-2xl mt-2 w-[80%]" src={item.media_url_https} alt="" />;
        case 'video':
          return (
            <div key={index} className="w-[30rem]  mt-2">
              <video controls autoPlay loop  className='w-full h-auto rounded-lg'>
                <source src={item.media_url_https} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="border-b hover:bg-gray-50 transition-all cursor-pointer">
      <div className="flex p-3 mr-2">
        <div className="w-14">
          <img className="rounded-full" src={user.profile_image_url_https} alt={user.name} />
        </div>
        <div className="ml-2">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <span className="font-semibold">{user.name}</span>
              <span className="text-blue-500"><CheckCircleOutlined /></span>
              <span className="text-gray-500 text-sm">@{user.screen_name}</span>
              <span className="text-gray-500 text-sm">&middot;</span>
              <span className="text-gray-500 text-sm">{formattedDate}</span>
            </div>
            <div>
              <span><EllipsisOutlined /></span>
            </div>
          </div>
          <div className="text-gray-700 mb-3">
            <p>{text}</p>
          </div>
          {entities.media && renderMedia(entities.media)}
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-16">
              <div className="flex items-center gap-1 text-gray-500">
                <WechatWorkOutlined/>
                <span>50</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <RetweetOutlined />
                <span>2.9K</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <HeartOutlined />
                <span>475</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <BarChartOutlined />
                <span>151K</span>
              </div>
            </div>
            <div className="flex gap-2">
              <BookOutlined className="text-gray-500" />
              <UploadOutlined className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const TweetCard = ({ post }) => {
//   // Destructure for easier access to nested properties
//   const { user, created_at, text, entities } = post;
//   const imageUrl = entities.media && entities.media.length > 0 ? entities.media[0].media_url_https : '';
//   const formattedDate = moment(created_at).format('MMM D'); // 'Apr 3' for example

//   return (
//     <div className="border-b">
//       <div className="flex p-3 mr-2">
//         <div className="w-14">
//           <img className="rounded-full" src={user.profile_image_url_https} alt="" />
//         </div>
//         <div className="ml-2">
//           <div className="flex justify-between">
//             <div className="flex gap-2 items-center">
//               <span className="font-semibold">{user.name}</span>
//               <span className="text-blue-500"><CheckCircleOutlined /></span>
//               <span className="text-gray-500 text-sm">@{user.screen_name}</span>
//               <span className="text-gray-500 text-sm">&middot;</span>
//               <span className="text-gray-500 text-sm">{formattedDate}</span>
//             </div>
//             <div>
//               <span><EllipsisOutlined /> </span>
//             </div>
//           </div>
//           <div className="text-gray-700 mb-3">
//             <p>{text}</p>
//           </div>
//           {imageUrl && (
//             <div>
//               <img className="rounded-2xl" src={imageUrl} alt="" />
//             </div>
//           )}
//           <div className="flex justify-between items-center mt-3">
//             <div className="flex gap-14 ml-2 ">
//               <div className="flex justify-center items-center gap-1 text-gray-700"><WechatWorkOutlined />
//                 <span className="text-xs">50</span>
//               </div>
//               <div className="flex justify-center items-center gap-1 text-gray-700"><RetweetOutlined />
//                 <span className="text-xs">2.9K</span>
//               </div>
//               <div className="flex justify-center items-center gap-1 text-gray-700"><HeartOutlined />
//                 <span className="text-xs">475</span>
//               </div>
//               <div className="flex justify-center items-center gap-1 text-gray-700"><BarChartOutlined />
//                 <span className="text-xs">151K</span>
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <div className="text-gray-700"><BookOutlined /></div>
//               <div className="text-gray-700"><UploadOutlined /></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TweetCard = (post) => {

//   console.log("data", post.user.name );
//   return (
//     <div className="bg-gray-50">
//       <div className="flex p-3 mr-2">
//         <div className="w-14">
//           <img className="rounded-full" src="https://pbs.twimg.com/profile_images/914888589670043654/KVvwjcWA_400x400.jpg" alt="" />
//         </div>
//         <div className="ml-2">
//           <div className="flex justify-between" >
//             <div className="flex gap-2 items-center">
//               <span className="font-semibold">{user.name}</span>
//               <span className="text-blue-500"><CheckCircleOutlined /></span>
//               <span className="text-gray-500 text-sm">{user.screen_name}</span>
//               <span className="text-gray-500 text-sm">&middot;</span>
//               <span className="text-gray-500 text-sm ">{created_at}</span>
//             </div>
//             <div>
//               <span><EllipsisOutlined /> </span>
//             </div>
//           </div>
//           <div className="text-sm">
//             <p>How refraction can paint a 30-meter loblolly pine forest in a drop of water.</p>
//             <p className="pt-4 pb-2">[📸 Fallout99]</p>
//           </div>
//           <div>
//             <img className="rounded-2xl" src="https://pbs.twimg.com/media/GKF15vqWYAARfEm?format=jpg&name=small" alt="asdas" />
//           </div>
//           <div className="flex justify-between items-center mt-3">
//             <div className="flex gap-14 ml-2 ">

//               <div className="flex justify-center items-center gap-1 text-gray-700"><WechatWorkOutlined />
//                 <span className="text-xs">50</span>
//               </div>
//               <div className="flex justify-center items-center gap-1 text-gray-700"><HeartOutlined />
//                 <span className="text-xs">475</span>
//               </div>
//               <div className="flex justify-center items-center gap-1 text-gray-700"><RetweetOutlined />
//                 <span className="text-xs">2.9K</span>
//               </div>
//               <div className="flex justify-center items-center gap-1 text-gray-700"><BarChartOutlined />
//                 <span className="text-xs">151K</span>
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <div className="text-gray-700"><BookOutlined /></div>
//               <div className="text-gray-700"><UploadOutlined /></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };