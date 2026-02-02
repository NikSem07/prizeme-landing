import "./style.css";
const BOT_URL = "https://t.me/prizeme_official_bot";

document.querySelector("#app").innerHTML = `
  <div class="page">
    <header class="header">
      <div class="container header__inner">
        <div class="brand">PrizeMe</div>
        <nav class="nav">
          <a href="#how" class="nav__link">Как работает</a>
          <a href="#features" class="nav__link">Преимущества</a>
          <a href="#faq" class="nav__link">FAQ</a>
        </nav>
        <a class="btn btn--ghost" href="${BOT_URL}" target="_blank" rel="noopener">Открыть в Telegram</a>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container hero__inner">
          <div class="hero__content">
            <h1>Розыгрыши в Telegram, которые запускаются за 2 минуты</h1>
            <p class="lead">
              PrizeMe автоматизирует розыгрыши для каналов и сообществ: участие по кнопке, проверка условий, билеты и победители — без ручной работы.
            </p>
            <div class="actions">
              <a class="btn btn--primary" href="${BOT_URL}" target="_blank" rel="noopener">Запустить PrizeMe</a>
              <a class="btn btn--secondary" href="#features">Смотреть преимущества</a>
            </div>

            <div class="badges">
              <div class="badge">Автоматическая выдача билетов</div>
              <div class="badge">Анти-фрод механики</div>
              <div class="badge">Результаты и победители</div>
            </div>
          </div>

          <div class="hero__card">
            <div class="card">
              <div class="card__title">Для владельцев каналов</div>
              <ul class="list">
                <li>Быстрый запуск розыгрыша</li>
                <li>Условия участия и проверки</li>
                <li>Прозрачные результаты</li>
              </ul>
              <a class="btn btn--primary btn--full" href="${BOT_URL}" target="_blank" rel="noopener">Открыть бота</a>
              <div class="hint">Дальше можно расширить до кабинета, оплат и аналитики.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="section">
        <div class="container">
          <h2>Преимущества</h2>
          <div class="grid">
            <div class="box">
              <h3>Скорость</h3>
              <p>Создание розыгрыша в диалоге с ботом, публикация в канал/группу — без ручных шагов.</p>
            </div>
            <div class="box">
              <h3>Честность</h3>
              <p>Прозрачная логика участия и выбор победителей. Механики защиты от накрутки.</p>
            </div>
            <div class="box">
              <h3>Управляемость</h3>
              <p>Редактирование, завершение, результаты — всё управляется из одного места.</p>
            </div>
            <div class="box">
              <h3>Готово к росту</h3>
              <p>Этот лендинг — фундамент. Далее добавим кабинет, платежи, аналитику и интеграции.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" class="section section--alt">
        <div class="container">
          <h2>Как работает</h2>
          <div class="steps">
            <div class="step">
              <div class="step__n">1</div>
              <div>
                <h3>Создаёте розыгрыш</h3>
                <p>Бот задаёт вопросы и собирает условия, описание и параметры.</p>
              </div>
            </div>
            <div class="step">
              <div class="step__n">2</div>
              <div>
                <h3>Публикуете в канал</h3>
                <p>PrizeMe публикует пост с кнопкой участия и контролирует процесс.</p>
              </div>
            </div>
            <div class="step">
              <div class="step__n">3</div>
              <div>
                <h3>Получаете результаты</h3>
                <p>Автоматически: победители, результаты, уведомления.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="section">
        <div class="container">
          <h2>FAQ</h2>
          <div class="faq">
            <details>
              <summary>Это бесплатно?</summary>
              <p>Сейчас доступен базовый функционал. Тарифы/монетизацию можно добавить на следующем этапе.</p>
            </details>
            <details>
              <summary>Работает в каналах и группах?</summary>
              <p>Да, PrizeMe поддерживает подключение каналов/групп и публикацию постов.</p>
            </details>
            <details>
              <summary>Можно ли добавлять условия участия?</summary>
              <p>Да, механики расширяемые и развиваются дальше.</p>
            </details>
            <details>
              <summary>Будет ли кабинет и оплата?</summary>
              <p>Да. Технически проект уже на масштабируемой базе — можно добавлять страницы, роутинг и интеграции.</p>
            </details>
          </div>

          <div class="cta">
            <div class="cta__text">
              <h3>Готовы попробовать PrizeMe?</h3>
              <p>Откройте бота в Telegram и создайте первый розыгрыш.</p>
            </div>
            <a class="btn btn--primary" href="${BOT_URL}" target="_blank" rel="noopener">Открыть в Telegram</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <div class="muted">© ${new Date().getFullYear()} PrizeMe</div>
        <div class="muted">prizeme.ru</div>
      </div>
    </footer>
  </div>
`;
