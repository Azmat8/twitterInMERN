import { Link } from "react-router-dom"
import { BellOutlined, BookOutlined, CheckSquareOutlined, EllipsisOutlined, HomeOutlined, MailOutlined, MessageOutlined, ProfileOutlined, SearchOutlined, UserOutlined, UsergroupAddOutlined, XOutlined } from '@ant-design/icons';

const Sidebar = () => {
    return <div>

        <div className="pl-4 pr-6 py-2 w-[250px] text-lg">
            <div className="py-2 text-3xl" >
                <Link to="/"><XOutlined /></Link>
            </div>
            <div className="py-2">
                <Link to="/home"><HomeOutlined /> &nbsp; Home</Link>
            </div>
            <div className="py-2">
                <Link to="/explore"><SearchOutlined /> &nbsp; Explore</Link>
            </div>
            <div className="py-2">
                <Link to="/notifications"><BellOutlined /> &nbsp; Notifications</Link>
            </div>
            <div className="py-2">
                <Link to="/messages"><MailOutlined /> &nbsp; Messages</Link>
            </div>
            <div className="py-2">
                <Link to="/grok"><CheckSquareOutlined /> &nbsp; Grok</Link>
            </div>
            <div className="py-2">
                <Link to="/lists"><ProfileOutlined /> &nbsp; Lists</Link>
            </div>
            <div className="py-2">
                <Link to="/bookmarks"><BookOutlined /> &nbsp; Bookmarks</Link>
            </div>
            <div className="py-2">
                <Link to="/communities"><UsergroupAddOutlined /> &nbsp; Communities</Link>
            </div>
            <div className="py-2">
                <Link to="/premium"><XOutlined /> &nbsp; Premium</Link>
            </div>
            <div className="py-2">
                <Link to="/profile"><UserOutlined /> &nbsp; Profile</Link>
            </div>
            <div className="py-2">
                <Link to="/more"><MessageOutlined /> &nbsp; More</Link>
            </div>
            <div className="w-52">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-full">
                    Post
                </button>
            </div>
            <div className="flex items-center py-4 pr-4 ">
                <img
                    src="https://pbs.twimg.com/profile_images/1770736943707336704/OX0DcpkZ_bigger.jpg"
                    alt="Profile"
                    className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                    <div className="text-sm font-semibold">Azmat Shaikh</div>
                    <div className="text-sm text-gray-600">@AzmatShaikh555</div>
                </div>
                <button className="ml-auto">
                    <span className="text-xl font-bold ml-6"><EllipsisOutlined /></span>
                </button>
            </div>
        </div>
    </div>
}

export default Sidebar