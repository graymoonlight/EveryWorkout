import '../../../Assets/Styles/HomePage/header.scss';
import Logo from '../../../Assets/Images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
        <div class="logo">
            <img src={Logo} alt="Every Workout" />
        </div>
        <nav>
            <ul>
                <li><a href="#">Тренировки</a></li>
                <li><a href="#">Питание</a></li>
                <li><a href="#">Прогресс</a></li>
                <li><a href="#">Советы</a></li>
                <li><a href="#">Сообщества</a></li>
                <li><Link to="/navigation">Карта</Link></li>
            </ul>
        </nav>
      </header>
    );
  }
  
export default Header;