
import { CheckCircleFilled, XOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUsername } from '../../features/user/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios';

const ChooseUsername = ({ username, setUsername }) => {

    const [error, setError] = useState(null);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(username)

    const handleInputChange = (e) => {
        // Automatically prepend '@' to username if it doesn't start with '@'
        if (!e.target.value.startsWith('@')) {
            setUsername('@' + e.target.value);
        } else {
            setUsername(e.target.value);
        }
    }

    const redirectToChooseLang = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/checkusername", { username });
            console.log(response, "response")

            dispatch(getUsername(username));
            alert("Username successfully selected.");
            navigate("/chooseLanguages")

        } catch (error) {
            console.log(error);
            if (error.response.data.error === 'Username already exists') {
                setError('Username already exists');
            } else {
                setError('Sign up failed. Please try again.');
            }
        }
    };

    return (
        <div className='flex justify-center bg-gray-300 h-[100vh]'>
            <div className='flex flex-col w-[550px] my-10 bg-white rounded-[1rem]'>
                <div className='text-[26px] py-2 flex justify-center '>
                    <XOutlined />
                </div>
                <div className='pt-2 px-16'>
                    <div className='text-3xl font-semibold'>
                        What should we call you?
                    </div>
                    <div className='text-sm py-2 text-gray-500 font-semibold'>
                        Your @username is unique. You can always change it later.
                    </div>
                    <div className='text-gray-500 p-2 my-7 border-2 rounded'>
                        <div className='text-[0.8rem]'>Username</div>
                        <div className='flex justify-between'>
                            <input
                                type="text"
                                placeholder='@ username'
                                className='outline-none w-full'
                                value={username}
                                onChange={handleInputChange}
                            />
                            <div className='text-green-500 pr-1'><CheckCircleFilled /></div>
                        </div>
                    </div>
                    <div>
                        {error && <p>{error}</p>}
                    </div>
                    <div className='text-blue-400 text-sm font-medium'>
                        <div >
                            <span>@sahu74728, </span>
                            <span>@RakeshSahu</span>
                        </div>
                        <div className='mt-3'>
                            Show more
                        </div>
                    </div>
                    <button onClick={redirectToChooseLang} className='cursor-pointer bg-black text-white rounded-full p-3 mt-20 text-center border border-gray-300'>
                        <span className='block font-bold w-96'>Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChooseUsername
