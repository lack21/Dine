import { Link } from "react-router-dom";
import logoImage from "../assets/logo.svg";
import arrowIcon from "../assets/icons/icon-arrow.svg";
import checkIcon from "../assets/icons/icon-check.svg";
import minusIcon from "../assets/icons/icon-minus.svg";
import plusIcon from "../assets/icons/icon-plus.svg";
import { useState } from "react";

function Booking() {
  const [peopleCount, setPeopleCount] = useState(0);
  const [activeTime, setActiveTime] = useState(false);
  const [timeText, setTimeText] = useState("AM");

  function ToggleTime() {
    setActiveTime(!activeTime);
  }

  function SetTime(e: any) {
    document
      .querySelectorAll(".box-item")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    setTimeText(e.target.id);
  }

  return (
    <>
      <header className="header second">
        <Link to="/Dine">
          <img src={logoImage} alt="logo" className="logo" />
        </Link>
        <h1 className="title">Reservations</h1>
        <p className="text">
          We can't wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We'll be happy to
          accommodate you.
        </p>
        <form className="form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <div className="form-section">
            <h3 className="name">Pick a date</h3>
            <input type="text" placeholder="MM" required />
            <input type="text" placeholder="DD" required />
            <input type="text" placeholder="YYYY" required />
          </div>
          <div className="form-section">
            <h3 className="name">Pick a time</h3>
            <input type="text" placeholder="09" required />
            <input type="text" placeholder="00" required />
            <div className={`time ${activeTime ? "active" : ""}`}>
              <h3 className="time-name" onClick={ToggleTime}>
                {timeText}
              </h3>
              <img
                src={arrowIcon}
                alt="arrow-icon"
                className="arrow-icon"
                onClick={ToggleTime}
              />
              <div className="box">
                <div className="box-item active" id="AM" onClick={SetTime}>
                  <img src={checkIcon} alt="check-icon" />
                  AM
                </div>
                <div className="box-item" id="PM" onClick={SetTime}>
                  <img src={checkIcon} alt="check-icon" />
                  PM
                </div>
              </div>
            </div>
          </div>
          <div className="people">
            <img
              src={minusIcon}
              alt="minus-icon"
              onClick={() => setPeopleCount((peopleCount) => peopleCount - 1)}
            />
            <h3 className="name">{peopleCount} people</h3>
            <img
              src={plusIcon}
              alt="plus-icon"
              onClick={() => setPeopleCount((peopleCount) => peopleCount + 1)}
            />
          </div>
          <button className="btn">Make Reservation</button>
        </form>
      </header>

      <section className="booking-image"></section>
    </>
  );
}

export default Booking;
