/* display: flex;
  align-items: flex-start;
  justify-content: flex-start;*/

import Gmail from "../assets/gmail.svg";
import CloseButton from "./CloseButton";
export default function ContactForm({handleNav}) {
  return (
    <>
      <form>
        <CloseButton handleNav={handleNav}/>
    
        <div className="form-div">
          <div>
            <h3>Lets get started.</h3>
            <span className="currentStep grey">1/3</span>
          </div>
          <div>
            <p className="grey">
              Before scheduling a call, please fill out the form.
            </p>
            <label htmlFor="name">
              NAME
              <br />
              <input type="text" placeholder="name" required />
            </label>
            <label htmlFor="EMAIL">
              EMAIL
              <br />
              <input type="text" placeholder="Email" required />
            </label>
          </div>
        </div>
        <div className="div2 form-div">
          <h3>Schedule a Meeting</h3>
          <div className="datepick">
            <div className="email-container">
              <div><img className="svg" src={Gmail} alt="gmail" /></div>
              <span className="currentStep grey">
                to: -HorizonArchitects@gmail.com
              </span>
            </div>

            <input type="number" placeholder="Day" required min="1" max="31" />
            <input
              type="text"
              placeholder="Month"
              required
              pattern="[A-Za-z]{3,9}"
            />
            <input
              type="number"
              placeholder="Year"
              required
              min="2024"
              max="2028"
            />
          </div>
          <button className="form-btn">SUBMIT</button>
        </div>
      </form>
    </>
  );
}
