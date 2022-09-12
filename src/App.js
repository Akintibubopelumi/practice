import React from "react";
import { Link, Route, Routes } from "react-router-dom";

//Navigation component
function Navbar() {
  return (
    <section className="dropdown">
      <button className="dropbtn">NAVIGATION</button>
      <div className="dropdown-content">
        <Link to={"/"}>HOME</Link>
        <Link to={"/Contact"}>CONTACT</Link>
        <Link to={"/register"}>REGISTER</Link>
        <Link to={"/login"}>LOGIN</Link>
      </div>
    </section>
  );
}

// Home component
function Home() {
  return (
    <section>
      <Navbar />
      <section id="about">
        <h2 className="about-header">My name is Akintibubo Pelumi Temitope</h2>
        <p className="about-sent">
          I am a world class web developer, educator and writer
        </p>
        <img className="about-image" src="./1.jpg" alt="This is me" />
        <h2 className="about-header">ABOUT AND GOALS</h2>
        <p className="about-sent">
          My name is Akintibubo Pelumi, a graduate of the Federal University of
          Technology Akure and a student of Altschool Africa. I am here to make
          my time in the program count and cheers to becomeing a world class
          developer in not so distant future
        </p>
        <h2 className="about-sent">EDUCATION</h2>
        <ul className="list">
          <li>Primary school at Futa staff school</li>
          <li>Secondary school at Holy Child Catholic Secondary School</li>
          <li>University at Federal University of Technology Akure</li>
          <li>Web design certificate at Freecodecamp</li>
        </ul>
        <h2 className="about-goals">JOB EXPERIENCE</h2>
        <ul className="list">
          <li>Software Engineering intern 2022</li>
          <li>Sales Assistant at Ladeco Auto Nig Ltd 2019 - 2021</li>
          <li>Sonographer at Ondo State Governemt Hospital 2018</li>
          <li>Lab Technologist at OAU 2017</li>
        </ul>
      </section>
    </section>
  );
}
//Contact component
function Contact() {
  return (
    <section>
      <Navbar />
      <h1 id="title">Oluwapelumi's Contact Form</h1>
      <p id="description">Thank you for taking the time to Contact Us</p>
      <div id="main">
        <form id="survey-form">
          <label for="name" id="name-label">
            Name:
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            class="length"
            required
          />
          <br />
          <label for="email" id="email-label">
            Email:
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your Email"
          />
          <br />
          <label for="number" id="number-label">
            Age:
          </label>
          <br />
          <input
            type="number"
            id="number"
            name="number"
            min="10"
            max="50"
            placeholder="Age"
            required
          />
          <br />
          <label for="dropdown" class="font">
            Priority
          </label>
          <br />
          <select id="dropdown" name="dropdown">
            <option disabled>Select Priority</option>
            <option value="Student">Very High</option>
            <option value="Full-time">High</option>
            <option value="Part-time">Medium</option>
            <option value="Others">Low</option>
          </select>
          <label for="comment" class="font">
            Any comments or message?
          </label>
          <br />

          <textarea
            id="comment"
            name="comment"
            rows="6"
            cols="53"
            placeholder="Enter your Comment here."
          ></textarea>
          <br />

          <input type="submit" value="submit" id="submit" />
        </form>
      </div>
    </section>
  );
}
//Register Component
function Register() {
  return (
    <section>
      <Navbar />
      <div id="main">
        <form id="survey-form">
          <h2 class="sentence">
            Already have an Account?
            <Link to={"/login"}>LOG IN</Link>
          </h2>
          <label for="name" id="name-label">
            FirstName:
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your FirstName"
            class="length"
            required
          />
          <br />
          <label for="name" id="name-label">
            LastName:
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your LastName"
            class="length"
            required
          />
          <br />
          <label for="email" id="email-label">
            Email:
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your Email"
          />
          <br />
          <label for="number" id="number-label">
            Phone:
          </label>
          <br />
          <input
            type="tel"
            id="number"
            name="number"
            placeholder="Enter your phone number"
            required
          />
          <br />
          <p class="font">Gender</p>
          <input type="radio" name="male" value="male" />
          <label for="definitely" class="font">
            Male
          </label>
          <br />
          <input type="radio" name="female" value="female" />
          <label for="maybe" class="font">
            Female
          </label>
          <br />
          <input type="radio" name="Others" value="Others" />
          <label for="not-sure" class="font">
            Other
          </label>
          <br />
          <label for="name" id="name-label">
            Country:
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your country"
            class="length"
            required
          />
          <br />
          <label for="name" id="name-label">
            State:
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your state"
            class="length"
            required
          />
          <br />
          <label for="name" id="name-label">
            Username:
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your username"
            class="length"
            required
          />
          <br />
          <label for="name" id="name-label">
            Password:
          </label>
          <br />
          <input
            type="password"
            id="name"
            name="name"
            placeholder="Enter your password"
            class="length"
            required
          />
          <br />
          <label for="name" id="name-label">
            Confirm Password:
          </label>
          <br />
          <input
            type="password"
            id="name"
            name="name"
            placeholder="Confirm your password"
            class="length"
            required
          />
          <br />
          <input type="submit" value="submit" id="submit" />
        </form>
      </div>
    </section>
  );
}

//Login component
function Login() {
  return (
    <section>
      <Navbar />
      <div id="main">
        <h2 class="sentence">
          Don't HAve an Account?
          <Link to={"/register"}>REGISTER</Link>
        </h2>

        <label for="name" id="name-label">
          Username:
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your username"
          class="length"
          required
        />
        <br />
        <label for="name" id="name-label">
          Password:
        </label>
        <br />
        <input
          type="password"
          id="name"
          name="name"
          placeholder="Enter your password"
          class="length"
          required
        />
        <br />
        <label for="name" id="name-label">
          Confirm Password:
        </label>
        <br />
        <input
          type="password"
          id="name"
          name="name"
          placeholder="Confirm your password"
          class="length"
          required
        />
        <br />
        <input type="submit" value="Sign in" id="submit" />
      </div>
    </section>
  );
}

function App() {
  return (
    <main>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
