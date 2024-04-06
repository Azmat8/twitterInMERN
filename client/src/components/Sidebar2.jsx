import { CheckCircleOutlined, EllipsisOutlined , CheckCircleFilled} from "@ant-design/icons";
import SearchBar from "./Searchbar";

const Sidebar2 = () => {
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
            <WhoToFollowCard/>
        </div>

    </div>
}

export default Sidebar2



const SuggestedProfile = ({ profile }) => (
    <div className="flex items-center justify-between py-2 px-4">
        <div className="flex items-center">
            <img className="w-10 h-10 rounded-full" src={profile.avatar} alt={profile.name} />
            <div className="ml-3">
                <p className="text-sm font-semibold text-gray-800">{profile.name}
                    <span> {profile.isverified}</span>
                </p>
                <p className="text-xs text-gray-600">@{profile.handle}</p>
            </div>
        </div>
        <button className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-sm">
            Follow
        </button>
    </div>
);

const WhoToFollowCard = () => {

    const profiles = [
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
            <div className="bg-[#f7f9f9] mb-4 p-3 rounded-2xl">
            <div className="">
                <div className="font-bold text-xl mb-2">Who to follow</div>
                {profiles.map((profile) => (
                    <SuggestedProfile key={profile.handle} profile={profile} />
                ))}
                <button className="text-blue-500 hover:text-blue-600 text-sm font-semibold py-2">
                    Show more
                </button>
            </div>
        </div>
    );
};



