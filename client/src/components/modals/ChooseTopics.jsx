
// import { CheckCircleFilled, XOutlined } from '@ant-design/icons'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { getUserIntrest } from '../../features/user/userSlice' // Importing the action

// const ChooseTopics = () => {
//   const [selectedInterests, setSelectedInterests] = useState([]) // Use selectedInterests to store selected interests
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const handleInterestClick = (interest) => {
//     const updatedInterests = selectedInterests.includes(interest)
//       ? selectedInterests.filter((int) => int !== interest)
//       : [...selectedInterests, interest]
//     setSelectedInterests(updatedInterests)
//   }

//   const redirectToChooseSubtopics = () => {
//     dispatch(getUserIntrest(selectedInterests)) // Dispatch the action to store selected interests
//     navigate("/followPeople")
//   }

//   const categories = [
//     { category: 'Sports', topics: ['Cricket', 'Football', 'Basketball', 'Tennis', 'Baseball', 'Running', 'Volleyball', 'Badminton', 'Swimming', 'Boxing', 'Table Tennis', 'Other Sports'] },
//     { category: 'Entertainment', topics: ['Movies', 'Theatre', 'Hollywood', 'Bollywood', 'Serial', 'Web Series', 'Drama', 'Video', 'Other Entertainment'] },
//     { category: 'Music', topics: ['Pop Song', 'Romantic Song', 'Hollywood', 'Bollywood', 'Rap Song', 'Web Series', 'Punjabi Song', 'Marathi Song', 'Other Song'] },
//     { category: 'News', topics: ['World News', 'India News', 'Hollywood News', 'Bollywood News', 'Hindi News', 'Marathi News', 'Urdu News', 'English News', 'Other News'] },
//     { category: 'Games', topics: ['Action Game', 'Adventure Game', 'Mind Game', 'Play Stations Game', 'Video Game', 'GTA', 'Other Game'] },
//     { category: 'Information Technology', topics: ['Programming', 'AI', 'Apple', 'Android', 'Microsoft', 'Software Engineers', 'Software Developers'] }
//   ];

//   return (
//     <div className='flex justify-center bg-gray-300'>
//       <div className='flex flex-col  w-[500px] my-6 bg-white rounded-[1rem] pb-4'>
//         <div className='text-[26px] py-2 flex justify-center '>
//           <XOutlined />
//         </div>
//         <div className='pt-2 px-14'>
//           <div className='text-3xl font-semibold'>
//             What do you want to see on X?
//           </div>
//           <div className='text-sm py-2 text-gray-500 font-semibold'>
//             Select at least 3 interests to personalize your X experience. They will be visible on your profile.
//           </div>
//           {categories.map((category, index) => (
//             <div key={index}>
//               <div className='font-extrabold'>{category.category}</div>
//               <div className="grid grid-cols-4 gap-4 p-4">
//                 {category.topics.map((topic, index) => (
//                   <div key={index} className="flex justify-center">
//                     <div className={`rounded-full border border-gray-300 flex justify-center items-center p-4 cursor-pointer ${selectedInterests.includes(topic) ? 'bg-slate-100' : ''}`} onClick={() => handleInterestClick(topic)}>
//                       <span className=' text-nowrap'>{topic}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//           <div className='flex mt-8 justify-between items-center'>
//             <div className='text-xs text-gray-500'>
//               {selectedInterests.length} of 3 selected
//             </div>
//             <button onClick={redirectToChooseSubtopics} className=' cursor-pointer bg-black text-white rounded-full p-3 mt-20 text-center border border-gray-300'>
//               <span className=' block font-bold  w-80'>Next</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div >
//   )
// }

// export default ChooseTopics


import { XOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserInterests } from '../../features/user/userSlice' // Importing the action

const ChooseTopics = ({ selectedInterests, setSelectedInterests }) => {
  // Use selectedInterests to store selected interests
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleInterestClick = (category, topic) => {
    const updatedInterests = [...selectedInterests];
    const existingCategoryIndex = updatedInterests.findIndex(interest => interest[category]);

    if (existingCategoryIndex !== -1) {
      // If category already exists in selectedInterests, update its topics
      updatedInterests[existingCategoryIndex][category] = [...updatedInterests[existingCategoryIndex][category], topic];
    } else {
      // If category doesn't exist, add it with the selected topic
      updatedInterests.push({ [category]: [topic] });
    }
    setSelectedInterests(updatedInterests);
  }

  const redirectToChooseSubtopics = () => {
    dispatch(setUserInterests(selectedInterests)) // Dispatch the action to store selected interests
    navigate("/followPeople")
  }

  const categories = [
    { category: 'Sports', topics: ['Cricket', 'Football', 'Basketball', 'Tennis', 'Baseball', 'Running', 'Volleyball', 'Badminton', 'Swimming', 'Boxing', 'Table Tennis', 'Other Sports'] },
    { category: 'Entertainment', topics: ['Movies', 'Theatre', 'Hollywood', 'Bollywood', 'Serial', 'Web Series', 'Drama', 'Video', 'Other Entertainment'] },
    { category: 'Music', topics: ['Pop Song', 'Romantic Song', 'Hollywood', 'Bollywood', 'Rap Song', 'Web Series', 'Punjabi Song', 'Marathi Song', 'Other Song'] },
    { category: 'News', topics: ['World News', 'India News', 'Hollywood News', 'Bollywood News', 'Hindi News', 'Marathi News', 'Urdu News', 'English News', 'Other News'] },
    { category: 'Games', topics: ['Action Game', 'Adventure Game', 'Mind Game', 'Play Stations Game', 'Video Game', 'GTA', 'Other Game'] },
    { category: 'Information Technology', topics: ['Programming', 'AI', 'Apple', 'Android', 'Microsoft', 'Software Engineers', 'Software Developers'] }
  ];

  return (
    <div className='flex justify-center bg-gray-300'>
      <div className='flex flex-col w-[700px] my-6 bg-white rounded-[1rem] pb-4'>
        <div className='text-[26px] py-2 flex justify-center'>
          <XOutlined />
        </div>
        <div className='pt-2 px-14'>
          <div className='text-3xl font-semibold'>
            What do you want to see on X?
          </div>
          <div className='text-sm py-2 text-gray-500 font-semibold'>
            Select at least 3 interests to personalize your X experience. They will be visible on your profile.
          </div>
          {categories.map((category, index) => (
            <div key={index}>
              <div className='font-extrabold'>{category.category}</div>
              <div className="grid grid-cols-3 gap-4 p-4">
                {category.topics.map((topic, index) => (
                  <div key={index} className="flex justify-center">
                    <div className={`rounded-full border border-gray-300 flex justify-center items-center p-4 cursor-pointer ${selectedInterests.some(interest => interest[category.category] && interest[category.category].includes(topic)) ? 'bg-slate-100' : ''}`} onClick={() => handleInterestClick(category.category, topic)}>
                      <span className='text-nowrap'>{topic}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className='flex mt-8 justify-between items-center'>
            <div className='text-xs text-gray-500'>
              {selectedInterests.length} of 3 selected
            </div>
            <button onClick={redirectToChooseSubtopics} disabled={selectedInterests.length < 3} className={`cursor-pointer bg-black text-white rounded-full p-3 mt-20 text-center border border-gray-300 ${selectedInterests.length < 3 ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <span className='block font-bold w-80'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ChooseTopics
