import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
          <meta charset="UTF-8" />
<meta name="google" content="notranslate" />
<link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
<link rel="manifest" href="icons/site.webmanifest" />
<link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5" />
<meta name="msapplication-TileColor" content="#2d89ef" />
<meta name="theme-color" content="#ffffff" />

		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  <title>StatusArea</title>
  <link rel='stylesheet' href='https://assets.codepen.io/7773162/swiper-bundle.min.css' />
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css '/>
     

 </Head>

  <Script strategy="lazyOnload" src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.2/swiper-bundle.min.js'></Script>
<Script strategy="lazyOnload" src='https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.min.js'></Script>
<Script strategy="lazyOnload" src="./script.js"></Script>
      <>
  {/* partial:index.partial.html */}
  {/* HEADER */}
  <header className="header" id="header">
    <nav className="nav container">
      <a href="#" className="nav__logo">
        {" "}
        Spooky{" "}
      </a>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              Graveyard
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              Track Record
            </a>
          </li>
          <li className="nav__item">
            <a href="#trick" className="nav__link">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#new" className="nav__link">
              Know More
            </a>
          </li>
          <a href="#" className="button button--ghost">
            Support
          </a>
        </ul>
        <div className="nav__close" id="nav-close">
          <i className="bx bx-x" />
        </div>
        <img
          src="https://assets.codepen.io/7773162/nav-img.png"
          alt=""
          className="nav__img"
        />
      </div>
      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-grid-alt" />
      </div>
    </nav>
  </header>
  <main className="main">
    {/* HOME */}
    <section className="home container" id="home">
     <div className="swiper home-siper">
        <div className="swiper-wapper">
        
          {/* HOME SLIDER 1 */}
          <section className="swiper-slide">
            <div className="home__content grid">
              <div className="home__group">
                <img
                  src="https://assets.codepen.io/7773162/home3-img.png"
                  alt=""
                  className="home__img"
                />
                <div className="home__indicator" />
                <div className="home__details-img">
                  <h4 className="home__details-title">Captain Sem</h4>
                  <span className="home__details-subtitle">
                    Veteran Spooky Ghost
                  </span>
                </div>
              </div>
              <div className="home__data">
                <h3 className="home__subtitle">#1 Top Scariest Ghost</h3>
                <h1 className="home__title">
                  RESPAWN <br /> THE SPOOKY <br /> SKULL{" "}
                </h1>
                <p className="home__description">
                  In search for cute little puppy, Captain Sem has come back
                  from his tragic death. With his hogwarts certified power he
                  promise to be a hero for all of ghostkind.{" "}
                </p>
                <div className="home__buttons">
                  <a href="#" className="book--now">
                    <img
                      src="https://assets.codepen.io/7773162/svgviewer-output+%281%29_3.svg"
                      alt=""
                    />
                  </a>
                  <a href="#" className="button--link button--flex">
                    Track Record{" "}
                    <i className="bx bx-right-arrow-alt button__icon" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="swiper-pagination" />
      </div>
    </section>
    {/* CATEGORY */}
    <section className="section category">
      <h2 className="section__title">
        Favorite Scare <br /> Category{" "}
      </h2>
      <div className="category__container container grid">
        <div className="category__data">
          <img
            src="https://assets.codepen.io/7773162/category1-img.png"
            alt=""
            className="category__img"
          />
          <h3 className="category__title">Ghosts</h3>
          <p className="category__description">
            Choose the ghosts, the scariest there are.
          </p>
        </div>
        <div className="category__data">
          <img
            src="https://assets.codepen.io/7773162/category2-img.png"
            alt=""
            className="category__img"
          />
          <h3 className="category__title">Pumpkins</h3>
          <p className="category__description">
            You look at the scariest pumpkins there is.
          </p>
        </div>
        <div className="category__data">
          <img
            src="https://assets.codepen.io/7773162/category3-img.png"
            alt=""
            className="category__img"
          />
          <h3 className="category__title">Witch Hat</h3>
          <p className="category__description">
            Pick the most stylish witch hats out there.
          </p>
        </div>
      </div>
    </section>
    {/* ABOUT */}
    <section className="section about" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">
            About Halloween <br /> Night{" "}
          </h2>
          <p className="about__description">
            Night of all the saints, or all the dead, is celebrated on October
            31 and it is a very fun international celebration, this celebration
            comes from ancient origins, and is already celebrated by everyone.{" "}
          </p>
          <a href="#" className="book--now">
            <img
              src="https://assets.codepen.io/7773162/svgviewer-output+%281%29_3.svg"
              alt=""
            />
          </a>
        </div>
        <img
          src="https://assets.codepen.io/7773162/about-img.png"
          alt=""
          className="about__img"
        />
      </div>
    </section>
    {/* TRICK OR TREAT */}
    <section className="section trick" id="trick">
      <h2 className="section__title">Trick Or Treat</h2>
      <div className="trick__container container grid">
        <div className="trick__content">
          <img
            src="https://assets.codepen.io/7773162/trick-treat1-img.png"
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Toffee</h3>
          <span className="trick__subtitle">Candy</span>
          <span className="trick__price">$11.99</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon" />
          </button>
        </div>
        <div className="trick__content">
          <img
            src="https://assets.codepen.io/7773162/trick-treat2-img.png"
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Bone</h3>
          <span className="trick__subtitle">Accessory</span>
          <span className="trick__price">$8.99</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon" />
          </button>
        </div>
        <div className="trick__content">
          <img
            src="https://assets.codepen.io/7773162/trick-treat3-img.png"
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Scarecrow</h3>
          <span className="trick__subtitle">Accessory</span>
          <span className="trick__price">$15.99</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon" />
          </button>
        </div>
        <div className="trick__content">
          <img
            src="https://assets.codepen.io/7773162/trick-treat4-img.png"
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Candy Cane</h3>
          <span className="trick__subtitle">Candy</span>
          <span className="trick__price">$7.99</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon" />
          </button>
        </div>
        <div className="trick__content">
          <img
            src="https://assets.codepen.io/7773162/trick-treat5-img.png"
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Pumpkin</h3>
          <span className="trick__subtitle">Candy</span>
          <span className="trick__price">$19.99</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon" />
          </button>
        </div>
        <div className="trick__content">
          <img
            src="https://assets.codepen.io/7773162/trick-treat6-img.png"
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Ghost</h3>
          <span className="trick__subtitle">Accessory</span>
          <span className="trick__price">$17.99</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon" />
          </button>
        </div>
      </div>
    </section>
    {/* DISCOUNT */}
    <section className="section discount">
      <div className="discount__container container grid">
        <div className="discount__data">
          <h2 className="discount__title">
            50% Discount <br /> On New Products{" "}
          </h2>
          <a href="#" className="book--now">
            <img
              src="https://assets.codepen.io/7773162/svgviewer-output+%281%29_3.svg"
              alt=""
            />
          </a>
        </div>
        <img
          src="https://assets.codepen.io/7773162/discount-img.png"
          alt=""
          className="discount__img"
        />
      </div>
    </section>
    {/* NEW ARRIVALS */}
    <section className="section new" id="new">
      <h2 className="section__title">New Arrivals</h2>
      <div className="new__container container">
        <div className="swiper new-swiper">
          <div className="swiper-wrapper">
            <div className="new__content swiper-slide">
              <div className="new__tag">
                <img
                  src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg"
                  alt=""
                />
              </div>
              <img
                src="https://assets.codepen.io/7773162/new1-img.png"
                alt=""
                className="new__img"
              />
              <h3 className="new__title">Haunted House</h3>
              <span className="new__subtitle">Accessory</span>
              <div className="new__prices">
                <span className="new__price">$14.99</span>
                <span className="new__discount">$29.99</span>
              </div>
              <button className="button new__button">
                <i className="bx bx-cart-alt new__icon" />
              </button>
            </div>
            <div className="new__content swiper-slide">
              <div className="new__tag">
                <img
                  src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg"
                  alt=""
                />
              </div>
              <img
                src="https://assets.codepen.io/7773162/new2-img.png"
                alt=""
                className="new__img"
              />
              <h3 className="new__title">Halloween Candle</h3>
              <span className="new__subtitle">Accessory</span>
              <div className="new__prices">
                <span className="new__price">$11.99</span>
                <span className="new__discount">$21.99</span>
              </div>
              <button className="button new__button">
                <i className="bx bx-cart-alt new__icon" />
              </button>
            </div>
            <div className="new__content swiper-slide">
              <div className="new__tag">
                <img
                  src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg"
                  alt=""
                />
              </div>
              <img
                src="https://assets.codepen.io/7773162/new3-img.png"
                alt=""
                className="new__img"
              />
              <h3 className="new__title">Witch Hat</h3>
              <span className="new__subtitle">Accessory</span>
              <div className="new__prices">
                <span className="new__price">$4.99</span>
                <span className="new__discount">$9.99</span>
              </div>
              <button className="button new__button">
                <i className="bx bx-cart-alt new__icon" />
              </button>
            </div>
            <div className="new__content swiper-slide">
              <div className="new__tag">
                <img
                  src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg"
                  alt=""
                />
              </div>
              <img
                src="https://assets.codepen.io/7773162/new4-img.png"
                alt=""
                className="new__img"
              />
              <h3 className="new__title">Rip</h3>
              <span className="new__subtitle">Accessory</span>
              <div className="new__prices">
                <span className="new__price">$24.99</span>
                <span className="new__discount">$44.99</span>
              </div>
              <button className="button new__button">
                <i className="bx bx-cart-alt new__icon" />
              </button>
            </div>
            <div className="new__content swiper-slide">
              <div className="new__tag">
                <img
                  src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg"
                  alt=""
                />
              </div>
              <img
                src="https://assets.codepen.io/7773162/new5-img.png"
                alt=""
                className="new__img"
              />
              <h3 className="new__title">Terrifying Crystal Ball</h3>
              <span className="new__subtitle">Accessory</span>
              <div className="new__prices">
                <span className="new__price">$5.99</span>
                <span className="new__discount">$12.99</span>
              </div>
              <button className="button new__button">
                <i className="bx bx-cart-alt new__icon" />
              </button>
            </div>
            <div className="new__content swiper-slide">
              <div className="new__tag">
                <img
                  src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg"
                  alt=""
                />
              </div>
              <img
                src="https://assets.codepen.io/7773162/new6-img.png"
                alt=""
                className="new__img"
              />
              <h3 className="new__title">Witch Broom</h3>
              <span className="new__subtitle">Accessory</span>
              <div className="new__prices">
                <span className="new__price">$7.99</span>
                <span className="new__discount">$14.99</span>
              </div>
              <button className="button new__button">
                <i className="bx bx-cart-alt new__icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* OUR NEWSLETTER */}
    <section className="section newsletter">
      <div className="newsletter__container container">
        <h2 className="section__title">Our Newsletter</h2>
        <p className="newsletter__description">
          {" "}
          Promotion new products and sales. Directly to your inbox{" "}
        </p>
        <form action="" className="newsletter__form">
          <input
            type="text"
            placeholder="Enter your email"
            className="newsletter__input"
          />
          <a href="#" className="book--now">
            <img
              src="https://assets.codepen.io/7773162/svgviewer-output+%281%29_3.svg"
              alt=""
            />
          </a>
        </form>
      </div>
    </section>
  </main>
  {/* SCROLL UP */}
  <a href="#" className="scrollup" id="scroll-up">
    <i className="bx bx-up-arrow-alt scrollup__icon" />
  </a>

<footer>
  <div className="inside__footer">
    <p className="copyright">
      Design By  <a href="https://www.hmser.ml/"> HM </a>
      <br />
      © <Script id="my-script"> document.write(new date().getfullyear()); </Script> StatusArea, All Rights Reserved.
      <br /> </p>
  </div>
</footer>
 
</>


    </>
  )
}
