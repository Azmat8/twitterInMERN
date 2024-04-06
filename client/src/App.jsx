// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Grok from './pages/Grok';
import Lists from './pages/Lists';
import Premium from './pages/Premium';
import Profile from './pages/Profile';
import Bookmarks from './pages/Bookmarks';
import Communities from './pages/Communities';
import More from './pages/More';
import PageNotFound from './pages/PageNotFound';
import Signup from './auth/Signup'
import Login from './auth/Login'
import AskBirthdate from './components/modals/AskBirthdate';
import ChooseUsername from './components/modals/ChooseUsername';
import ChooseLanguages from './components/modals/ChooseLanguages';
import ChooseTopics from './components/modals/ChooseTopics';
// import ChooseSubtopics from './components/modals/ChooseSubtopics';
import FollowPeople from './components/modals/FollowPeople';

import { useState } from 'react';

const App = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [birthdate, setBirthdate] = useState('');
  const [username, setUsername] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [selectedInterests, setSelectedInterests] = useState([])
  return (

    <Router>
      <div >
        <Routes>

          <Route path="/" element={<Signup data={data} setData={setData} />} />
          <Route path="/askBirtdate" element={<AskBirthdate birthdate={birthdate} setBirthdate={setBirthdate} />} />
          <Route path="/chooseUsername" element={<ChooseUsername username={username} setUsername={setUsername} />} />
          <Route path="/chooseLanguages" element={<ChooseLanguages selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages} />} />
          <Route path="/chooseTopics" element={<ChooseTopics selectedInterests={selectedInterests} setSelectedInterests={setSelectedInterests} />} />


          {/* main  */}
          <Route path="/followPeople" element={<FollowPeople data={data} birthdate={birthdate} username={username} selectedLanguages={selectedLanguages} selectedInterests={selectedInterests} />} />
          <Route path="/login" element={<Login />} />


          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/grok" element={<Grok />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/more" element={<More />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </div>
    </Router >
  );
};

export default App;
