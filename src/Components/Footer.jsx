export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content container">
          <div className="footer-section about">
            <h3 className="grey">Socials</h3>
            <ul>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
            </ul>
            
          </div>
          
          <div className="footer-section contact">
            <h3 >Connect With Us</h3>
            <p className="grey">Email: info@domadvocatezer.com</p>
            <p>Phone: +234 123 456 789</p>
            <p>Address: 1234, Lagos, Nigeria</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="grey">&copy; 2024 Dom Advocatezer Architecture | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
