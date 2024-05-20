import wifi from "../assets/wifi.svg";
import google from "../assets/google.svg";
import star from "../assets/star.svg";
import cozyhouse from "../assets/Images/cozyhouse.webp";


export default function MainSection() {
  return (
    <>
      <section className="darkgreen">
        <div className="secondary-nav">
          <div className="fsb">
            <p className="logo">
              <span>dom</span>
              Advocate
              <br />
              <span>zer</span>Architecture{" "}
            </p>

            <div>hamburger menu</div>
          </div>
          <div className="iv-border"></div>
        </div>
        <main className="curve-wrapper">
          <h1>
            Reachable <i>specialists</i> for as It on top arrives
          </h1>
          <p className="small-title">Expertise, experience in your sector</p>
          <div className="btn-container">
            <button>learn more</button>
          </div>
          <div class="hero">
            <div class="hero-content">
              <h1>Crafting High-end Homes</h1>
              <p>
                Providing construction and cunsultation servises across Nigeria.
              </p>
              <button>View Projects</button>
              <div className="google-div">
                <div>
                  <img src={google} alt="google reviews" />
                </div>
                <div>
                  <span>google reviews</span>
                  <div className="flex">
                    <img className="star" src={star} alt="star" />
                    <img className="star" src={star} alt="star" />
                    <img className="star" src={star} alt="star" />
                    <img className="star" src={star} alt="star" />
                    <h6>4/5</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gas-up-grid">
            <div className="gas-up">
              <img className="svg" src={wifi} alt="svg" />
              <h3>Specialists</h3>
              <p>
                Our conscious focus means that we know the industry and the
                market well and are always aware of developments.
              </p>
            </div>

            <div className="gas-up">
              <img className="svg" src={wifi} alt="svg" />
              <h3>Accessible</h3>
              <p>
                Fast and adequate action is crucial, which is why you contact
                one of our lawyers directly.
              </p>
            </div>
            <div className="gas-up">
              <img className="svg" src={wifi} alt="svg" />
              <h3>Enterprising</h3>
              <p>
                We do everything we can to help you move forward and dare to
                think outside the legal framework. We are decisive and take
                responsibility.
              </p>
            </div>
          </div>
        </main>
        <section className="white">
          <div className="grid1">
            <div>
              <span>Our Mission</span>
            </div>
            <div>
              <h2>We serve all real estate specialties</h2>
              <p class="text-container">
                We use our real estate specializations integrally by
                coordinating different parts of a project. We advise and
                litigate on all phases in which a real estate object can be:
                from idea to initiative, development to realization and from
                exploitation to redevelopment.
              </p>
            </div>
          </div>
          <div className="grid1 grid2">
            <div>
              <span>.our values</span>
              <h2>We serve all real estate specialties</h2>
              <p class="text-container">
                We use our real estate specializations integrally by
                coordinating different parts of a project. We advise and
                litigate on all phases in which a real estate object can be:
                from idea to initiative, development to realization and from
                exploitation to redevelopment.
              </p>
            </div>
            <div className="flex-end">
              <img className="round-border" src={cozyhouse} about="house" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
