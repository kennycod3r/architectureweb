import "./App.css";
import wifi from "./assets/wifi.svg";
import google from "./assets/google.svg";
import star from "./assets/star.svg";
import cozyhouse from "./assets/Images/cozyhouse.webp";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <section className="darkgreen"></section>
      <section className="cream fc">
        <div className="container">
          <h2>
            We Are <i>here</i> For You
          </h2>
          <div>
            <ul className="card-container">
              <li>
                <img className="cardimg" src={cozyhouse} alt="speed" />
                <h2>Dennis Rajeed</h2>
                <p>Architect</p>
              </li>
              <li>
                <img className="cardimg" src={cozyhouse} alt="speed" />
                <h2>Dennis Rajeed</h2>
                <p>Architect</p>
              </li>
              <li>
                <img className="cardimg" src={cozyhouse} alt="speed" />
                <h2>Dennis Rajeed</h2>
                <p>Architect</p>
              </li>
              
            </ul>
          </div>
        </div>
      </section>
      <section className="footer">
        <p>home</p>
      </section>
    </>
  );
}

export default App;
