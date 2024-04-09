
import { Link, useNavigate } from "react-router-dom"
import { BellOutlined, BookOutlined, CheckSquareOutlined, EllipsisOutlined, HomeOutlined, ImportOutlined, MailOutlined, MessageOutlined, ProfileOutlined, SearchOutlined, UserOutlined, UsergroupAddOutlined, XOutlined } from '@ant-design/icons';

import { logoutUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const Sidebar = () => {
    const user = useSelector((store) => store.user);

    // console.log(user)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutUser = async (e) => {
        e.preventDefault();
        try {
            await axios.get("http://localhost:8080/logout");
            dispatch(logoutUser());
            localStorage.removeItem("token"); // Remove token from local storage
            navigate("/login"); // Redirect to login page
            alert("Logout successful.");
        } catch (error) {
            console.error('Logout failed', error);
            alert("Logout failed. Please try again.");
        }
    };

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
                    <div className="text-sm font-semibold">{user?.name}</div>
                    <div className="text-sm text-gray-600">@{user?.name}</div>
                </div>
                <button className="ml-auto" onClick={handleLogoutUser}>
                    <span className="text-xl font-bold ml-6"><EllipsisOutlined /></span>
                </button>
            </div>
        </div>
    </div>
}

export default Sidebar