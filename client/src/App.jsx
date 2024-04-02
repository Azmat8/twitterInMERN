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
import Signup from './SignupLogInLogOut/Signup'
import Login from './SignupLogInLogOut/Login'

const App = () => {
  return (

    <Router>
      <div className="flex justify-center gap-10">


        <Routes>

          <Route path="/" element={<Signup />} />
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
