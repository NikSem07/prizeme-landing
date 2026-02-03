import "./style.css";

const BOT_URL = "https://t.me/prizeme_official_bot?start=landing";

function Header() {
  return `
    <header class="header">
      <div class="container header__inner">
        <div class="brand">PrizeMe</div>
        <nav class="nav">
          <a href="#how" class="nav__link">Как работает</a>
          <a href="#who" class="nav__link">Кому подойдёт</a>
          <a href="#mechanics" class="nav__link">Механики</a>
          <a href="#why" class="nav__link">Преимущества</a>
        </nav>
        <a class="btn btn--ghost" href="${BOT_URL}" target="_blank" rel="noopener">
          Открыть в Telegram
        </a>
      </div>
    </header>
  `;
}

function Hero() {
  return `
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
        </div>
      </div>
    </section>
  `;
}

function How() {
  return `
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
  `;
}

function GridSection({ id, title, items, alt = false }) {
  const sectionClass = alt ? "section section--alt" : "section";
  const cards = items
    .map(
      (x) => `
        <div class="box">
          <h3>${x.title}</h3>
          <p>${x.text}</p>
        </div>
      `
    )
    .join("");

  return `
    <section id="${id}" class="${sectionClass}">
      <div class="container">
        <h2>${title}</h2>
        <div class="grid">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

function Why() {
  return `
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
  `;
}

function FAQ() {
  return `
    <section id="faq" class="section">
      <div class="container">
        <h2>FAQ</h2>
        <p class="section__lead">
          Ответы на частые вопросы о запуске розыгрышей в PrizeMe
        </p>

        <div class="faq">
          <details>
            <summary>PrizeMe бесплатный?</summary>
            <p>Да. Базовый функционал доступен бесплатно. Премиум-возможности добавляют расширенные опции и аналитику.</p>
          </details>

          <details>
            <summary>Что нужно, чтобы запустить розыгрыш?</summary>
            <p>Достаточно открыть бота, создать розыгрыш и подключить свой канал или группу с правами администратора.</p>
          </details>

          <details>
            <summary>Как определяется победитель?</summary>
            <p>Победители определяются автоматически по правилам розыгрыша после завершения. Процесс прозрачен и не требует ручных действий.</p>
          </details>

          <details>
            <summary>Можно запускать розыгрыши в группах и чатах?</summary>
            <p>Да. PrizeMe работает и для Telegram-каналов, и для групп/сообществ.</p>
          </details>

          <details>
            <summary>Как вы боретесь с накруткой и ботами?</summary>
            <p>PrizeMe проверяет условия участия, использует анти-фрод механики и блокирует подозрительную активность.</p>
          </details>

          <details>
            <summary>Где смотреть результаты и аналитику?</summary>
            <p>Результаты формируются автоматически. Для продвинутого анализа предусмотрена расширенная аналитика (доступность зависит от функционала/тарифа).</p>
          </details>
        </div>
      </div>
    </section>
  `;
}

function Footer() {
  return `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="muted">© ${new Date().getFullYear()} PrizeMe</div>
        <div class="muted">prizeme.ru</div>
      </div>
    </footer>
  `;
}

function App() {
  const whoItems = [
    { title: "Владельцам Telegram-каналов", text: "Для роста аудитории, вовлечения и повторных касаний" },
    { title: "Админам чатов и сообществ", text: "Чтобы запускать активности без ручной рутины" },
    { title: "Маркетологам и SMM", text: "Простой инструмент для промо, лидов и активаций" },
    { title: "Брендам и инфлюенсерам", text: "Розыгрыши как механика — быстро и прозрачно" },
  ];

  const mechanicsItems = [
    { title: "Создание кастомных розыгрышей и запуск в своих каналах / группах", text: "Гибкие настройки, описание и условия — всё внутри бота" },
    { title: "Автоматическое и прозрачное определение победителей", text: "Победители выбираются автоматически по завершению розыгрыша" },
    { title: "Уведомление участников о завершении розыгрыша", text: "Участники получают результат — без ручных сообщений" },
    { title: "Mini-app внутри Telegram", text: "Участие и проверка условий в удобном интерфейсе" },
    { title: "Расширенная аналитика", text: "Отслеживание вовлечения, участия и эффективности механик" },
    { title: "Защита от накрутки и ботов", text: "Контроль условий, анти-фрод и фильтрация подозрительной активности" },
  ];

  return `
    <div class="page">
      ${Header()}
      <main>
        ${Hero()}
        ${How()}
        ${GridSection({ id: "who", title: "Кому подойдёт PrizeMe", items: whoItems, alt: true })}
        ${GridSection({ id: "mechanics", title: "Механики PrizeMe", items: mechanicsItems, alt: true })}
        ${Why()}
        ${FAQ()}
      </main>
      ${Footer()}
    </div>
  `;
}

document.querySelector("#app").innerHTML = App();
