import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Navigation/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import ParticlesBg from "particles-bg";


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

function App() {
  return (
    <div className="App">
      <ParticlesBg
        className="particles"
        color=""
        type="square"
        bg={true}
        params={particlesOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
