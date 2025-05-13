import "./AboutUs.css";
import {Link, Outlet} from 'react-router-dom'


function AboutUs() {
  return (
    <div className="about-us">
      <ul>
        <li>
          <Link to="site-history">Site History</Link>
        </li>
        <li>
          <Link to="site-mission">Site Mission</Link>
        </li>
      </ul>
      <p>Encontre mais informações sobre nosso site aqui.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;