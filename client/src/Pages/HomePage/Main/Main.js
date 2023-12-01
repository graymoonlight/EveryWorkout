import '../../../Assets/Styles/HomePage/main.scss';
import Welcome from '../../../Assets/Images/welcome-image.jpg';

function Main() {
    return (
      <main>
        <section class="welcome">
            <h1>Добро пожаловать в Every Workout!</h1>
            <p>Every Workout - это ваш персональный тренер для здорового образа жизни. Мы поможем вам достичь ваших фитнес-целей, обеспечивая качественные тренировки и советы по питанию.</p>
            <img src={Welcome} alt="Добро пожаловать в Every Workout" />
        </section>
    
        <section class="featured-workouts">
            <h2>Популярные тренировки</h2>
            <div class="workout-card">
                <img src="workout1.jpg" alt="Тренировка 1" />
                <h3>Силовая тренировка</h3>
                <p>Улучшите свою силу и выносливость с нашей силовой тренировкой.</p>
            </div>
            <div class="workout-card">
                <img src="workout2.jpg" alt="Тренировка 2" />
                <h3>Кардио тренировка</h3>
                <p>Укрепите свое сердце и жир с нашей кардио тренировкой.</p>
            </div>
        </section>
    
        <section class="nutrition-tips">
            <h2>Советы по питанию</h2>
            <div class="nutrition-tip">
                <img src="nutrition1.jpg" alt="Совет 1" />
                <h3>Белки, углеводы и жиры</h3>
                <p>Узнайте, как сбалансировать свою диету и правильно употреблять белки, углеводы и жиры.</p>
            </div>
            <div class="nutrition-tip">
                <img src="nutrition2.jpg" alt="Совет 2" />
                <h3>Здоровые закуски</h3>
                <p>Поделитесь с нами рецептами здоровых закусок для поддержания правильного питания.</p>
            </div>
        </section>
      </main>
    );
  }
  
export default Main;