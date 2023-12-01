import '../../../Assets/Styles/HomePage/header.scss';
import Logo from '../../../Assets/Images/logo.png';

function Header() {
    return (
      <header>
        <div class="logo">
            <img src={Logo} alt="Every Workout" />
        </div>
        <nav>
            <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Тренировки</a></li>
                <li><a href="#">Питание</a></li>
                <li><a href="#">Прогресс</a></li>
                <li><a href="#">Советы</a></li>
                <li><a href="#">Сообщества</a></li>
            </ul>
        </nav>
      </header>
    );
  }
  
export default Header;