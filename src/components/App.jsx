import {Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import AboutMe from './AboutMe/AboutMe'
import Reviews from './Reviews/Reviews'
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs'
import Contact from './AboutMe/components/Contact.jsx'
import Hobbies from './AboutMe/components/Hobbies.jsx'
import MyStory from './AboutMe/components/MyStory.jsx'
import SiteHistory from './AboutUs/components/SiteHistory.jsx'
import SiteMission from './AboutUs/components/SiteMission.jsx'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/about-me" element={<AboutMe/>} >
          <Route path="contact" element={<Contact/>}/>
          <Route path="hobbies" element={<Hobbies/>} />
          <Route path="my-story" element={<MyStory/>} />
        </Route>
        <Route path="/about-us" element={<AboutUs/>} >
          <Route path="site-history" element={<SiteHistory/>} />
          <Route path="site-mission" element={<SiteMission/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
