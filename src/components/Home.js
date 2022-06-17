import "./Home.css";
import iii from "../images/billyhunt-iii.png";
import nerdArtist from "../images/nerd-artist.png";
import Nav from "./Nav";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Nav isTransparent='true' />
      <section className="home-section bg-dark-alfa-30 parallax-2" id="home">
        <Container className="js-height-full">
          <div className="home-content">
            <div className="home-text">
              <img className="iii-logo" src={iii} alt="Billyhunt III Logo" />
              <img className="nerd-artist" alt="Nerd Artist" src={nerdArtist} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
