import { Link } from "react-router-dom";
import logoImage from "../assets/logo.svg";
import dividePattern from "../assets/patterns/pattern-divide.svg";
import { useState } from "react";

function Home() {
  const [articleHeading, setArticleHeading] = useState("Family Gathering");
  const [articleText, setArticleText] = useState(
    "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all."
  );
  const [articleImageClass, setArticleImageClass] = useState(
    "article-image family"
  );

  function GetFirstData(e: any) {
    document
      .querySelectorAll(".choice")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    setArticleHeading("Family Gathering");
    setArticleText(
      "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all."
    );
    setArticleImageClass("article-image family");
  }

  function GetSecondData(e: any) {
    document
      .querySelectorAll(".choice")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    setArticleHeading("Special Events");
    setArticleText(
      "Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal."
    );
    setArticleImageClass("article-image special");
  }

  function GetThirdData(e: any) {
    document
      .querySelectorAll(".choice")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    setArticleHeading("Social Events");
    setArticleText(
      "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone."
    );
    setArticleImageClass("article-image social");
  }

  return (
    <>
      <header className="header">
        <Link to="/Dine">
          <img src={logoImage} alt="logo" className="logo" />
        </Link>
        <h1 className="title">Exquisite dining since 1989</h1>
        <p className="text">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <Link to="booking" className="btn">
          Book a Table
        </Link>
      </header>

      <section className="feature">
        <div className="feature-image"></div>
        <div className="content">
          <img src={dividePattern} alt="divide-pattern" />
          <h2 className="heading">Enjoyable place for all the family</h2>
          <p className="text">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </section>

      <section className="feature second">
        <div className="feature-image"></div>
        <div className="content">
          <img src={dividePattern} alt="divide-pattern" />
          <h2 className="heading">The most locally sourced food</h2>
          <p className="text">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you're eating the freshest, most sustainable
            food.
          </p>
        </div>
      </section>

      <aside className="banner">
        <div className="content">
          <img src={dividePattern} alt="divide-pattern" />
          <h2 className="heading">A few highlights from our menu</h2>
          <p className="text">
            We cater for all dietary requirements, but here's a glimpse at some
            of our diner's favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className="row">
          <div className="item">
            <div className="item-image first"></div>
            <div className="info">
              <h3 className="name">Seared Salmon Fillet</h3>
              <p className="text">
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-image second"></div>
            <div className="info">
              <h3 className="name">Rosemary Filet Mignon</h3>
              <p className="text">
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-image third"></div>
            <div className="info">
              <h3 className="name">Summer Fruit Chocolate Mousse</h3>
              <p className="text">
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <article className="article">
        <div className={articleImageClass}></div>
        <div className="content">
          <h2 className="heading">{articleHeading}</h2>
          <p className="text">{articleText}</p>
          <Link to="booking" className="btn">
            Book a Table
          </Link>

          <div className="choices">
            <h3 className="choice active" onClick={GetFirstData}>
              Family Gathering
            </h3>
            <h3 className="choice" onClick={GetSecondData}>
              Special events
            </h3>
            <h3 className="choice" onClick={GetThirdData}>
              Social events
            </h3>
          </div>
        </div>
      </article>

      <section className="reservation">
        <h2 className="heading">Ready to make a reservation?</h2>
        <Link to="booking" className="btn">
          Book a Table
        </Link>
      </section>
    </>
  );
}

export default Home;
