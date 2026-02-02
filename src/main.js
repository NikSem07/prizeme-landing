import "./style.css";
const BOT_URL = "https://t.me/prizeme_official_bot?start=landing";

document.querySelector("#app").innerHTML = `
  <div class="page">
    <header class="header">
      <div class="container header__inner">
        <div class="brand">PrizeMe</div>
        <nav class="nav">
          <a href="#how" class="nav__link">Как работает</a>
          <a href="#who" class="nav__link">Кому подойдёт</a>
          <a href="#why" class="nav__link">Почему PrizeMe</a>
        </nav>
        <a class="btn btn--ghost" href="${BOT_URL}" target="_blank" rel="noopener">
          Открыть в Telegram
        </a>
      </div>
    </header>

    <main>
      <!-- HERO / H1 -->
      <section class="hero">
        <div class="container hero__inner">
          <div class="hero__content">
            <h1>Запускайте бесплатные розыгрыши в Telegram</h1>

            <p class="lead">
              PrizeMe — бесплатный сервис для каналов и групп для создания и проведения розыгрышей
            </p>

            <div class="actions">
              <a class="btn btn--primary" href="${BOT_URL}" target="_blank" rel="noopener">
                Запустить розыгрыш
              </a>
              <a class="btn btn--secondary" href="#how">
                Как это работает
              </a>
            </div>

            <div class="micro">
              Быстрый запуск розыгрышей • Доступны продвинутые механики
            </div>

            <div class="badges">
              <div class="badge">Участие по кнопке</div>
              <div class="badge">Анти-фрод механики</div>
              <div class="badge">Авто-результаты</div>
            </div>
          </div>

          <div class="hero__card">
            <div class="card">
              <div class="card__title">Что такое PrizeMe</div>
              <p class="card__text">
                Сервис для проведения розыгрышей в Telegram-каналах и группах, где
                подписчики принимают участие в 1 клик, а победители определяются автоматически и прозрачно
              </p>
              <a class="btn btn--primary btn--full" href="${BOT_URL}" target="_blank" rel="noopener">
                Открыть бота
              </a>
              <div class="hint">Доступны продвинутые функции для премиум-пользователей</div>
            </div>
          </div>
        </div>
      </section>

      <!-- H2: HOW -->
      <section id="how" class="section">
        <div class="container">
          <h2>Как работает PrizeMe</h2>
          <p class="section__lead">
            Создайте розыгрыш, укажите условия участия и подключите канал. PrizeMe сам проверит выполнение условий,
            примет участников и определит победителей
          </p>

          <div class="steps">
            <div class="step">
              <div class="step__n">1</div>
              <div>
                <h3>Создаёте розыгрыш</h3>
                <p>Бот задаёт вопросы и собирает условия, описание и параметры</p>
              </div>
            </div>

            <div class="step">
              <div class="step__n">2</div>
              <div>
                <h3>Публикуете в канал</h3>
                <p>PrizeMe публикует пост с кнопкой участия и контролирует процесс</p>
              </div>
            </div>

            <div class="step">
              <div class="step__n">3</div>
              <div>
                <h3>Получаете результаты</h3>
                <p>Победители и результаты формируются автоматически</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- H2: WHO -->
      <section id="who" class="section section--alt">
        <div class="container">
          <h2>Кому подойдёт PrizeMe</h2>
          <div class="grid">
            <div class="box">
              <h3>Владельцам Telegram-каналов</h3>
              <p>Для роста аудитории, вовлечения и повторных касаний</p>
            </div>
            <div class="box">
              <h3>Админам чатов и сообществ</h3>
              <p>Чтобы запускать активности без ручной рутины</p>
            </div>
            <div class="box">
              <h3>Маркетологам и SMM</h3>
              <p>Простой инструмент для промо, лидов и активаций</p>
            </div>
            <div class="box">
              <h3>Брендам и инфлюенсерам</h3>
              <p>Розыгрыши как механика — быстро и прозрачно</p>
            </div>
          </div>
        </div>
      </section>

      <!-- H2: WHY -->
      <section id="why" class="section">
        <div class="container">
          <h2>Почему выбирают PrizeMe</h2>
          <div class="grid">
            <div class="box">
              <h3>Бесплатно</h3>
              <p>Базовый функционал доступен без оплаты</p>
            </div>
            <div class="box">
              <h3>Защита от накрутки</h3>
              <p>Анти-фрод механики и контроль условий участия</p>
            </div>
            <div class="box">
              <h3>Прозрачные результаты</h3>
              <p>Победители и результаты формируются автоматически</p>
            </div>
            <div class="box">
              <h3>Без разработки</h3>
              <p>Работает прямо в Telegram. Вам не нужен отдельный сайт или приложение</p>
            </div>
          </div>

          <div class="cta">
            <div class="cta__text">
              <h3>Готовы запустить первый розыгрыш?</h3>
              <p>Откройте PrizeMe в Telegram и создайте розыгрыш за несколько минут</p>
            </div>
            <a class="btn btn--primary" href="${BOT_URL}" target="_blank" rel="noopener">
              Запустить розыгрыш
            </a>
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
