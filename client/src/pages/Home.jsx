import Sidebar from "../components/Sidebar";
import Sidebar2 from "../components/Sidebar2";
import { useSelector } from "react-redux";

const Home = () => {
    const user = useSelector((store) => store.user.name);
    console.log(user)
    return (
        <div className="flex justify-center gap-10">
            <div className="flex gap-2">
                <div className="mr-10 ">


                    <Sidebar />
                </div>
                <div className="w-[500px] border-r border-l">
                    <nav className="flex gap-4">
                        <div>For You</div>
                        <div>Following</div>
                        <div>Cummunities</div>
                        <div>Cummunities</div>
                        <div>Setting</div>
                    </nav>

                    <div className="border">
                        <div className="flex" >


                            <div className="w-10 ">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src="https://pbs.twimg.com/profile_images/1770736943707336704/OX0DcpkZ_bigger.jpg"
                                    alt="Profile"
                                />
                            </div>
                            <div className=" w-52">
                                <div>
                                    <input
                                        className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none"
                                        placeholder="What is happening?!"
                                    />
                                </div>

                                <div className="flex gap-x-20">
                                    <div className="flex gap-x-5">

                                        <div>IMG</div>
                                        <div>GIF</div>
                                        <div>POLL</div>
                                        <div>EMOJI</div>
                                        <div>CLR</div>
                                        <div>LCT</div>
                                    </div>
                                    <div className=" flex gap-x-2">

                                        <div className="gap-x-2">post</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="recommendation">
                        <TweetCard></TweetCard>
                    </div>

                </div>
                <div className="ml-10">
                    <Sidebar2 />
                </div>
            </div>
        </div>
    )
}

export default Home



const TweetCard = () => {
    return (
        <div>

            <div className="w-full flex">

                <div className="w-10">X</div>
                <div>
                    <div className="flex justify-between gap-10" >

                        <div className="flex gap-4">


                            <span>ElonMask</span>
                            <span>BlueTikc</span>
                            <span>X</span>
                            <span>@elonMaks</span>
                            <span>.</span>
                            <span>.mar 29</span>
                        </div>
                        <div>
                            <span className="text-lg">...</span>

                        </div>
                    </div>
                    <div>
                        <img src="https://pbs.twimg.com/media/GJ1mJ6cXoAAYBO9?format=jpg&name=900x900" alt="asdas" />
                    </div>
                    <div className="flex gap-4">
                        <div>Replay</div>
                        <div>Repost</div>
                        <div>like</div>
                        <div>View</div>
                        <div>Bookmark</div>
                        <div>share</div>

                    </div>
                </div>

            </div>

        </div>

    );
};


