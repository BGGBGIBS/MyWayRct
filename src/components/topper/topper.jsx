import React from 'react';
import style from './topper.module.css'
export default function Topper() {
  return (
    <div className={style['topper']}>
    <div className={style['home']}>
      <h1>Bienvenue sur MyWay</h1>
      <h2>Le réseau de votre réseau.</h2>
      <p>Basé sur les données de l'ARES en OpenData.</p>
    </div>
    </div>
  );
}