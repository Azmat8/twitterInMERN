import { CheckCircleFilled, XOutlined } from '@ant-design/icons'
import React from 'react'

const sports = {

    basketball: {},
    tennis: {},
    baseball: {},

    running: {},
    volleyball: {},
    badminton: {},
    swimming: {},
    boxing: {},
    "table tennis": {},
    cricket: {},
    football: {},
    "other sports": {},

};
const entertainment = {

    Movies: {},
    Theatre: {},
    hollywood: {},
    bollywood: {},
    Serial: {},
    "Web Series": {},
    Drama: {},
    video: {},
    "other entertainment": {},

};
const music = {

    "pup Song": {},
    "romantic song": {},
    hollywood: {},
    bollywood: {},
    "rap song": {},
    "Web Series": {},
    "punjabi song": {},
    "marati song": {},
    "other song": {},


};
const news = {

    "world news": {},
    "india news": {},
    "hollywood news": {},
    "bollywood news": {},
    "hindi news": {},
    "marathi news": {},
    "urdu news": {},
    "english news": {},
    "other news": {},


};
const games = {

    "action game": {},
    "advanture game": {},
    "mind game": {},
    "play sations game": {},
    "video game": {},
    "gta": {},
    "other game": {},


};

const it = {

    "Programming": {},
    "AI": {},
    "Apple": {},
    "Andriod": {},
    "microsoft": {},
    "Software engineers ": {},
    "software developers ": {},




};




const ChooseSubtopics = () => {

    const sportsArray = Object.keys(sports);
    const entertainmentArray = Object.keys(entertainment)
    const musicArray = Object.keys(music)
    const newsArray = Object.keys(news)
    const gamesArray = Object.keys(games)
    const itArray = Object.keys(it)



    return (
        <div className='flex justify-center bg-gray-300 h-[100vh]'>
            <div className='flex flex-col  w-[600px] my-10 bg-white rounded-[1rem]'>
                <div className='text-[26px] py-2 flex justify-center '>
                    <XOutlined />
                </div>
                <div className='pt-2 px-16 overflow-auto'>
                    <div className='text-3xl font-semibold'>
                        What do you want to see on X?
                    </div>
                    <div className='text-sm py-2 text-gray-500 font-semibold'>
                        Interests are used to personalize your experience and will be visible on your profile.
                    </div>
                    {/* sports */}
                    <div>


                        <div className=' font-extrabold'>
                            Sports
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4">
                            {sportsArray.map((sport, index) => (
                                <div key={index} className="flex justify-center">
                                    <div className="rounded-full border border-gray-300 flex justify-center items-center p-4 cursor-pointer  hover:bg-slate-100 ">
                                        <span className=' text-nowrap'>{sport}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* entertement */}
                    <div>


                        <div className=' font-extrabold'>
                            Entertainment
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4">
                            {entertainmentArray.map((sport, index) => (
                                <div key={index} className="flex justify-center">
                                    <div className="rounded-full border border-gray-300 flex justify-center items-center p-4 cursor-pointer hover:bg-slate-100">
                                        <span className=' text-nowrap'>{sport}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* music */}
                    <div>


                        <div className=' font-extrabold'>
                            Music
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4">
                            {musicArray.map((sport, index) => (
                                <div key={index} className="flex justify-center">
                                    <div className="rounded-full border border-gray-300 flex justify-center items-center p-4 cursor-pointer  hover:bg-slate-100">
                                        <span className=' text-nowrap'>{sport}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* News */}
                    <div>


                        <div className=' font-extrabold'>
                            News
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4">
                            {newsArray.map((sport, index) => (
                                <div key={index} className="flex justify-center">
                                    <div className="rounded-full border border-gray-300 flex justify-center items-center p-4  cursor-pointer hover:bg-slate-100">
                                        <span className=' text-nowrap'>{sport}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* games */}

                    <div class="flex flex-col">
                        <div class="font-extrabold">
                            Games
                        </div>
                        <div class="flex flex-wrap justify-center p-4">
                            {gamesArray.map((sport, index) => (
                                <div key={index} class="m-2">
                                    <div class="rounded-full border border-gray-300 flex justify-center items-center p-4 cursor-pointer  hover:bg-slate-100 ">
                                        <span class='whitespace-nowrap'>{sport}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* it */}
                    <div class="flex flex-col">
                        <div class="font-extrabold">
                            Information Technology
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4">
                            {itArray.map((sport, index) => (
                                <div key={index} className="flex justify-center">
                                    <div className="rounded-full border border-gray-300 flex justify-center items-center p-4  hover:bg-slate-100 cursor-pointer">
                                        <span className=' text-nowrap'>{sport}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>





                    <div className='bg-black text-white rounded-full p-3 m-5 text-center border border-gray-300'>
                        <button className='font-bold'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseSubtopics





