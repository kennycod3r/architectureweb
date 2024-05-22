import "./App.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import BackToTop from "./Components/BackToTop";
import Footer from "./Components/Footer";
import CreamSection from "./Components/CreamSection";

function App() {
  return (
    <>
      <Header />
      <MainSection />

      <section className="darkgreen"></section>
      <CreamSection />
      <section className="footer">
        <Footer />
        <BackToTop />
      </section>
    </>
  );
}

export default App;
