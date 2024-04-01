const Sidebar = () => {
    return <div>

        <div className="px-4 py-2 w-[250px] ">
            <div className="py-2">
                X
            </div>
            <div className="py-2">
                Home
            </div>
            <div className="py-2">
                Explore
            </div>
            <div className="py-2">
                Notification
            </div>
            <div className="py-2">
                Messages
            </div>
            <div className="py-2">
                Grok
            </div>
            <div className="py-2">
                List
            </div>
            <div className="py-2">
                Bookmarks
            </div>
            <div className="py-2">
                communities
            </div>
            <div className="py-2">Premium</div>
            <div className="py-2">Profil</div>
            <div className="py-2">More</div>
            <div className="w-52">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                    Post
                </button>
            </div>
            <div className="flex items-center p-4">
                <img
                    src="path_to_your_image"
                    alt="Profile"
                    className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                    <div className="font-bold">Azmat Shaikh</div>
                    <div className="text-sm text-gray-600">@AzmatShaikh555</div>
                </div>
                <button className="ml-auto">
                    <span className="text-lg">&#x22EE;</span>
                </button>
            </div>
        </div>
    </div>
}

export default Sidebar