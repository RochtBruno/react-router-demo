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
import Review from './Reviews/Review.jsx'
import PageNotFound from './PageNotFound/PageNotFound.jsx';
import { useState,useEffect } from 'react';
import './App.css';


function App() {

  const [reviews,setReviews] = useState([])

  useEffect(() => {
    fetch('https://emoji-critic.pt-br.tripleten-services.com/v1/reviews')
    .then((res) => {
      return res.json()
    }).then((data) => {
      setReviews(data)
    }).catch(console.error)
  },[])//array de dependencia vazio significa que o hook só roda quando é iniciado

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews}/>} />
        <Route path="/reviews/:reviewId" element={<Review reviews={reviews}/>} /> 
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

// Ao trabalhar com um componente Route, se incluirmos : em nosso path, o texto depois dos dois 
// pontos terá um significado especial. Essas partes de uma URL são chamadas de segmentos dinâmicos. 
// Especificamente, o texto depois dos dois pontos denotará o nome do parâmetro de uma URL. 
// Assim, podemos acessar qualquer valor desse parâmetro como uma variável no componente que essa 
// rota vai renderizar. O valor atual desse parâmetro será determinado por qualquer URL que o 
// usuário esteja visitando no navegador.
