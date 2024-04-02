import { Link } from "react-router-dom"

const Sidebar = () => {
    return <div>

        <div className="px-4 py-2 w-[250px] ">
            <div className="py-2">
                <Link to="/">X</Link>
            </div>
            <div className="py-2">
                <Link to="/home">Home</Link>
            </div>
            <div className="py-2">
                <Link to="/explore">Explore</Link>
            </div>
            <div className="py-2">
                <Link to="/notifications">Notifications</Link>
            </div>
            <div className="py-2">
                <Link to="/messages">Messages</Link>
            </div>
            <div className="py-2">
                <Link to="/grok">Grok</Link>
            </div>
            <div className="py-2">
                <Link to="/lists">Lists</Link>
            </div>
            <div className="py-2">
                <Link to="/premium">Premium</Link>
            </div>
            <div className="py-2">
                <Link to="/profile">Profile</Link>
            </div>
            <div className="py-2">
                <Link to="/bookmarks">Bookmarks</Link>
            </div>
            <div className="py-2">
                <Link to="/communities">Communities</Link>
            </div>
            <div className="py-2">
                <Link to="/more">More</Link>
            </div>
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