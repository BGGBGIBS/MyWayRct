import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';

import In from '../in/in/in';
import Home from '../home/home';
import CV from '../../containers/cv/cv';
import style from './nav-bar.module.css';

export default function NavBar() {
  return (
    <Router className={style['nav']}>
      <nav className={style['nav']}>
        <ul className={style['rounded-list']}>
          <li className={style['rounded-list']}>
            <NavLink to="/" activeClassName={style.active}>HOME</NavLink>
          </li>
          <li className={style['rounded-list']}>
            <NavLink to="/cv" activeClassName={style.active}>CV</NavLink>
          </li>
          <li className={style['rounded-list']}>
            <NavLink to="/in" activeClassName={style.active}>In</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/cv" element={<CV />}></Route>
        <Route path="/in" element={<In />}></Route>
      </Routes>
    </Router>
  );
}