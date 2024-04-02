const Sidebar2 = () => {
    return <div >

        <div className="bg-[#f7f9f9] mb-4 mt-1">
            <input
                className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none"
                placeholder="Search"
            />
        </div>
        <div className=" bg-[#f7f9f9] mb-4">
            <div>
                <h2>What happings</h2>

                <div className="p-2">
                    <div>tranding in world</div>
                    <div>#srk</div>
                    <div>5m post</div>
                </div>
                <div className="p-2">
                    <div>tranding in world</div>
                    <div>#srk</div>
                    <div>5m post</div>
                </div>
                <div className="p-2">
                    <div>tranding in world</div>
                    <div>#srk</div>
                    <div>5m post</div>
                </div>
            </div>
        </div>
        <div className="bg-[#f7f9f9]">

            <WhoToFollowCard></WhoToFollowCard>
        </div>

    </div>
}

export default Sidebar2



const SuggestedProfile = ({ profile }) => (
    <div className="flex items-center justify-between py-2 px-4">
        <div className="flex items-center">
            <img className="w-10 h-10 rounded-full" src={profile.avatar} alt={profile.name} />
            <div className="ml-3">
                <p className="text-sm font-semibold text-gray-800">{profile.name}</p>
                <p className="text-xs text-gray-600">@{profile.handle}</p>
            </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-sm">
            Follow
        </button>
    </div>
);

const WhoToFollowCard = () => {

    const profiles = [
        {
            name: 'Nature is Amazing',
            handle: 'AMAZINGNATURE',
            avatar: '/path/to/nature/avatar.jpg',
        },
        {
            name: 'Magic | マジック',
            handle: 'MagicStaysGod',
            avatar: '/path/to/magic/avatar.jpg',
        },
        {
            name: 'PlayStation',
            handle: 'PlayStation',
            avatar: '/path/to/playstation/avatar.jpg',
        },
    ];

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <div className="px-6 py-4">
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



