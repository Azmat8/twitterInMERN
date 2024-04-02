

import { useState } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';

import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const signupUser = async (e) => {
        e.preventDefault();

        const { name, email, password } = data;
        try {
            await axios.post("http://localhost:8080/signup", {
                name,
                email,
                password,
            });
            setData({
                name: "",
                email: "",
                password: "",
            });
            alert("Sign up successful. Please log in.");
            navigate("/login");
        } catch (error) {
            console.log(error);
            alert("Sign up failed. Please try again.");
        }
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (<div>
        <div className="text-white h-[100vh] flex justify-center items-center bg-[#00BAF5]">
            <div className="bg-blue-100  rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h2 className="text-4xl text-white-bold text-center mb-6 font-bold">
                    SignUp
                </h2>
                <form onSubmit={signupUser}>
                    <div className="relative my-4">
                        <label>Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={data.name}
                            className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300  appearance-none dark:focus:border-blue-950 focus:outline-none focus:ring-0 focus:text-white  focus:border-gray-400 peer: input-email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="relative my-4">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            value={data.email}
                            className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300  appearance-none dark:focus:border-blue-950 focus:outline-none focus:ring-0 focus:text-white  focus:border-gray-400 peer: input-email"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={data.password}
                            className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300  appearance-none dark:focus:border-blue-950 focus:outline-none focus:ring-0 focus:text-white  focus:border-gray-400 peer: input-email"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mb-4 text-[18px] mt-6 rounded-full  bg-zinc-700 text-white font-bold py-2 hover:bg-black hover:text-gray-300 transition-colors duration-500 transitio "
                    >
                        Signup
                    </button>
                </form>
                <div className="flex justify-center items-center gap-x-2 mt-2">
                    <p>Already have an account ? </p>
                    <Link to="/login" className=" hover:text-black hover:underline">
                        Login
                    </Link>
                </div>
            </div>
            <div className="rounded-md  shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <div className=" w-[238px] ">

                    <img src="twitter.png" alt="UI" />
                </div>
            </div>

        </div>

    </div>
    );
};

export default Signup;
