import React, { useState } from 'react';
import Login from '../login/login';
import Signin from '../signin/signin';
import style from './in.module.css';


export default function Authentication() {
  const [isNew, setIsNew] = useState(false);

  const toggleIsNew = () => {
    setIsNew(!isNew);
  }

  return (
    <>
    <div className='component'>
    <h2 onClick={toggleIsNew} className={isNew === false ? style.active : ''}>Log In</h2>
    <h2 onClick={toggleIsNew} className={isNew === true ? style.active : ''}>Sign In</h2>
    {isNew ? <Signin /> : <Login />}
    </div>
    </>
  );
}

