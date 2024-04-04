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
import ChooseSubtopics from './components/modals/ChooseSubtopics';
import FollowPeople from './components/modals/FollowPeople';

const App = () => {
  return (

    <Router>
      <div >
        <Routes>

          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/askBirtdate" element={<AskBirthdate />} />
          <Route path="/chooseUsername" element={<ChooseUsername />} />
          <Route path="/chooseLanguages" element={<ChooseLanguages />} />
          <Route path="/chooseTopics" element={<ChooseTopics />} />
          <Route path="/chooseSubtopics" element={<ChooseSubtopics />} />
          <Route path="/followPeople" element={<FollowPeople />} />


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
