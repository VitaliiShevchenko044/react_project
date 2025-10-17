import React from "react";
import './CityPage.css';
import Roosevelt from './img/Roosevelt.jpg'

export default function CityPage() {
  return (
    <div className='cityClass'>
      <h1>Все про місто Київ</h1>
      <p>
        Київ, Дніпро, Поділ, Печерськ, Лавра, Хрещатик, Майдан, Золоті ворота,
        Софія, Михайлівський, Поділ, Андріївський, Оболонь, Липки, метро, мост,
        парки, пагорби, театри, музеи.
      </p>
      <img src="./vite.svg" alt="" />
      <img src={Roosevelt} alt="" />
    </div>
  );
}
