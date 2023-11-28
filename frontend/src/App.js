import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import FindaGuide from './components/FindaGuide';
import Blog from './components/Blog';
import UserLogin from './components/UserLogin';
import UserSignUp from './components/UserSignUp';
import Profile from './components/Profile';
import Home from './components/Home';

export default function App() {
  fetch('/test')
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <Router>
      <div>
        <NavBar />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/UserSignUp" element={<UserSignUp />} />
          <Route path="/guide" element={<FindaGuide />} />
          {/* <Route path="/travelInfo" element={<TravelInfo />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
