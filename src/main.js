import "./style.css";

const BOT_URL = "https://t.me/prizeme_official_bot?start=landing";

function Header() {
  return `
    <header class="header">
      <div class="container header__inner">
        <a href="/" class="brand" style="text-decoration:none;color:inherit;">PrizeMe</a>
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
          <h1>Запускайте бесплатные розыгрыши<br>в Telegram</h1>
          <p class="lead">
            PrizeMe — бесплатный сервис для каналов и групп<br>
            для создания и проведения розыгрышей
          </p>
          <div class="actions">
            <a class="btn btn--primary" href="${BOT_URL}" target="_blank" rel="noopener">Запустить розыгрыш</a>
            <a class="btn btn--secondary" href="#how">Как это работает</a>
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
        <div class="steps">
          <div class="step"><div class="step__n">1</div><div><h3>Создаёте розыгрыш</h3><p>Бот задаёт вопросы и собирает условия, описание и параметры</p></div></div>
          <div class="step"><div class="step__n">2</div><div><h3>Публикуете в канал</h3><p>PrizeMe публикует пост с кнопкой участия и контролирует процесс</p></div></div>
          <div class="step"><div class="step__n">3</div><div><h3>Получаете результаты</h3><p>Победители и результаты формируются автоматически</p></div></div>
        </div>
      </div>
    </section>
  `;
}

function GridSection({ id, title, items, alt = false }) {
  const sectionClass = alt ? "section section--alt" : "section";
  const cards = items.map((x) => `<div class="box"><h3>${x.title}</h3><p>${x.text}</p></div>`).join("");
  return `
    <section id="${id}" class="${sectionClass}">
      <div class="container">
        <h2>${title}</h2>
        <div class="grid">${cards}</div>
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
          <div class="box"><h3>Бесплатно и надежно</h3><p>Бесплатный запуск розыгрышей со стабильной работой 24/7</p></div>
          <div class="box"><h3>Защита от накрутки</h3><p>Анти-фрод механики и контроль условий участия</p></div>
          <div class="box"><h3>Прозрачные результаты</h3><p>Победители и результаты формируются автоматически</p></div>
          <div class="box"><h3>Поддержка 24/7</h3><p>Поддержка сервиса всегда на связи и решает любые проблемы</p></div>
        </div>
        <div class="cta">
          <div class="cta__text">
            <h3>Готовы запустить свой первый розыгрыш?</h3>
            <p>Откройте PrizeMe в Telegram и создайте розыгрыш прямо сейчас</p>
          </div>
          <a class="btn btn--primary" href="${BOT_URL}" target="_blank" rel="noopener">Запустить розыгрыш</a>
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
        <p class="section__lead">Ответы на частые вопросы о запуске розыгрышей в PrizeMe</p>
        <div class="faq">
          <details><summary>PrizeMe — бесплатный сервис?</summary><p>Да, весь основной функционал полностью бесплатный, есть также возможность подключить премиум-механики с расширенными опциями.</p></details>
          <details><summary>Что нужно, чтобы запустить розыгрыш?</summary><p>Достаточно открыть бота, подключить свой канал/группу, создать и запустить розыгрыш в пару кликов.</p></details>
          <details><summary>Как определяется победитель?</summary><p>Победители определяются автоматически в установленное создателем розыгрыша время, процесс прозрачен и не требует ручных действий.</p></details>
          <details><summary>Можно запускать розыгрыши в приватных каналах/группах?</summary><p>Да, вы бесплатно можете запускать розыгрыш в приватных каналах/группах — сервис не собирает и не хранит пользовательские данные.</p></details>
          <details><summary>Как вы боретесь с накруткой и ботами?</summary><p>При запуске розыгрыша можно подключить анти-фрод механику, которая проверяет условия участия и блокирует подозрительную активность.</p></details>
          <details><summary>Где смотреть результаты розыгрыша?</summary><p>По завершению розыгрыша бот уведомляет о его результатах, для премиум-пользователей доступна детальная аналитика каждого розыгрыша.</p></details>
        </div>
      </div>
    </section>
  `;
}

function Footer() {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <div class="container">

        <!-- Верхняя часть: реквизиты + контакты + правовая информация -->
        <div class="footer__top">

          <div class="footer__col">
            <span class="footer__col-label">Реквизиты</span>
            <span class="footer__col-text">Семенов Никита Дмитриевич</span>
            <span class="footer__col-text">ИНН 561020291538</span>
          </div>

          <div class="footer__col">
            <span class="footer__col-label">Контакты</span>
            <a href="mailto:Semenov.NDwork@yandex.ru" class="footer__col-link">Semenov.NDwork@yandex.ru</a>
            <a href="https://t.me/prizeme_support" target="_blank" rel="noopener" class="footer__col-link">@prizeme_support</a>
          </div>

          <div class="footer__col footer__col--legal">
            <span class="footer__col-label">
              <a href="/legal.html" class="footer-legal__label-link">Правовая информация</a>
            </span>
            <a href="/legal.html?doc=privacy"      class="footer__col-link">Политика конфиденциальности</a>
            <a href="/legal.html?doc=terms"         class="footer__col-link">Пользовательское соглашение</a>
            <a href="/legal.html?doc=offer"         class="footer__col-link">Публичная оферта</a>
            <a href="/legal.html?doc=subscription"  class="footer__col-link">Оферта регулярных платежей</a>
          </div>

        </div>

        <!-- Нижняя часть: копирайт -->
        <div class="footer__bottom">
          <span class="muted">© ${year} PrizeMe. Все права защищены.</span>
          <span class="muted">prizeme.ru</span>
        </div>

      </div>
    </footer>
  `;
}

function App() {
  const whoItems = [
    { title: "Владельцам Telegram-каналов", text: "Для роста аудитории и вовлечения в активность канала" },
    { title: "Админам чатов и каналов", text: "Чтобы запускать розыгрыши в пару кликов без сложных настроек" },
    { title: "Маркетологам и SMM-специалистам", text: "Простой инструмент для промо, лидов и активаций" },
    { title: "Брендам и инфлюенсерам", text: "Розыгрыши как механика роста — быстро и прозрачно" },
  ];
  const mechanicsItems = [
    { title: "Создание кастомных розыгрышей и запуск в своих каналах", text: "Гибкие настройки, описание и условия — всё внутри бота" },
    { title: "Автоматическое и прозрачное определение победителей", text: "Победители выбираются автоматически по завершению розыгрыша" },
    { title: "Уведомление участников о завершении розыгрыша", text: "Все участники, победители и организаторы получают уведомления о результатах в боте" },
    { title: "Mini-app внутри Telegram", text: "Список всех розыгрышей, аналитика и геймификация внутри mini-app Telegram" },
    { title: "Расширенная аналитика", text: "Отслеживание числа участников, географии участия и других метрик с возможностью выгружать CSV" },
    { title: "Защита от накрутки и ботов", text: "Контроль условий участия, анти-фрод формата Captcha и фильтрация подозрительной активности" },
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
