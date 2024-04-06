// import { CheckCircleFilled, XOutlined } from '@ant-design/icons'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { UseDispatch, useDispatch } from 'react-redux'

// const ChooseLanguages = () => {

//   const [languages, setlanguages] = useState([])

//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const redirectToChoosTopics = () => {

//     useDispatch(languages)
//     navigate("/chooseTopics")

//   }
//   return (
//     <div className='flex justify-center bg-gray-300'>
//       <div className='flex flex-col  w-[500px] my-10 bg-white rounded-[1rem] pb-4'>
//         <div className='text-[26px] py-2 flex justify-center '>
//           <XOutlined />
//         </div>
//         <div className='pt-2 px-16'>
//           <div className='text-3xl font-semibold'>
//             Which languages do you speak?
//           </div>
//           <div className='text-sm py-2 text-gray-500 font-semibold'>
//             You'll be able to see posts, people and trends in any languages you choose.
//           </div>
//           <div className='overflow-auto h-64 mt-2 pr-4'>
//             <div className='flex justify-between border-b border-gray-100 py-2'>
//               <span className='text-sm text-gray-500 font-medium'>Bangla - বাংলা</span>
//               <input type="checkbox" className='text-lg' />
//             </div>
//             <div className='flex justify-between border-b border-gray-100 py-2'>
//               <span className='text-sm text-gray-500 font-medium'>English</span>
//               <input type="checkbox" className='text-lg' />
//             </div>
//             <div className='flex justify-between border-b border-gray-100 py-2'>
//               <span className='text-sm text-gray-500 font-medium'>Gujarati - ગુજરાતી</span>
//               <input type="checkbox" className='text-lg' />
//             </div>
//             <div className='flex justify-between border-b border-gray-100 py-2'>
//               <span className='text-sm text-gray-500 font-medium'>Hindi - हिन्दी</span>
//               <input type="checkbox" className='text-lg' />
//             </div>
//             <div className='flex justify-between border-b border-gray-100 py-2'>
//               <span className='text-sm text-gray-500 font-medium'>Kannada - ಕನ್ನಡ ಭಾಷೆ</span>
//               <input type="checkbox" className='text-lg' />
//             </div>
//             <div className='flex justify-between border-b border-gray-100 py-2'>
//               <span className='text-sm text-gray-500 font-medium'>Marathi - मराठी</span>
//               <input type="checkbox" className='text-lg' />
//             </div>
//             <div className='flex justify-between border-b border-gray-100 py-2'>
//               <span className='text-sm text-gray-500 font-medium'>Nepali - नेपाली</span>
//               <input type="checkbox" className='text-lg' />
//             </div>
//             <div className='flex justify-between border-b border-gray-100 py-2'>
//               <span className='text-sm text-gray-500 font-medium'>Punjabi - ਪੰਜਾਬੀ</span>
//               <input type="checkbox" className='text-lg' />
//             </div>
//             <div className='flex justify-between border-b border-gray-100 py-2'>
//               <span className='text-sm text-gray-500 font-medium'>Tamil - தமிழ்</span>
//               <input type="checkbox" className='text-lg' />
//             </div>

//           </div>
//           <div className='text-blue-400 text-sm font-medium text-center mt-4'>
//             Show more
//           </div>
//           <button onClick={redirectToChoosTopics} className=' cursor-pointer bg-black text-white rounded-full p-3 mt-20 text-center border border-gray-300'>
//             <span className=' block font-bold  w-96'>Next</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ChooseLanguages


import { CheckCircleFilled, XOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLangUages } from '../../features/user/userSlice'

const ChooseLanguages = ({ selectedLanguages, setSelectedLanguages }) => {
  // Use selectedLanguages to store selected languages
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCheckboxChange = (language) => {
    const updatedLanguages = selectedLanguages.includes(language)
      ? selectedLanguages.filter((lang) => lang !== language)
      : [...selectedLanguages, language]
    setSelectedLanguages(updatedLanguages)
  }

  const redirectToChooseTopics = () => {
    dispatch(userLangUages(selectedLanguages)) // Dispatch the action to store selected languages
    navigate("/chooseTopics")
  }

  return (
    <div className='flex justify-center bg-gray-300'>
      <div className='flex flex-col  w-[500px] my-10 bg-white rounded-[1rem] pb-4'>
        <div className='text-[26px] py-2 flex justify-center '>
          <XOutlined />
        </div>
        <div className='pt-2 px-16'>
          <div className='text-3xl font-semibold'>
            Which languages do you speak?
          </div>
          <div className='text-sm py-2 text-gray-500 font-semibold'>
            You'll be able to see posts, people and trends in any languages you choose.
          </div>
          <div className='overflow-auto h-64 mt-2 pr-4'>
            {/* Map through languages and render checkboxes */}
            {['Bangla - বাংলা', 'English', 'Gujarati - ગુજરાતી', 'Hindi - हिन्दी', 'Kannada - ಕನ್ನಡ ಭಾಷೆ', 'Marathi - मराठी', 'Nepali - नेपाली', 'Punjabi - ਪੰਜਾਬੀ', 'Tamil - தமிழ்'].map((language) => (
              <div key={language} className='flex justify-between border-b border-gray-100 py-2'>
                <span className='text-sm text-gray-500 font-medium'>{language}</span>
                <input
                  type="checkbox"
                  className='text-lg'
                  checked={selectedLanguages.includes(language)} // Check if language is selected
                  onChange={() => handleCheckboxChange(language)} // Call handleCheckboxChange on change
                />
              </div>
            ))}
          </div>
          <div className='text-blue-400 text-sm font-medium text-center mt-4'>
            Show more
          </div>
          <button onClick={redirectToChooseTopics} className=' cursor-pointer bg-black text-white rounded-full p-3 mt-20 text-center border border-gray-300'>
            <span className=' block font-bold  w-96'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChooseLanguages
