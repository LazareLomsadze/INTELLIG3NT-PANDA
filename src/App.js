import Component from "./components/component";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Studio from "./components/Studio";
import Team from "./components/Team/Team";
import Welcome from "./components/Welcome";
import ConnectUs from "./components/ConnectUs";

function App() {
  return (
    <div className="lg:mx-20 md:mx-10 font-optivenus uppercase text-white mx-5">
      <Header />
      <Welcome />
      <Component />
      <Studio />
      <Team />
      <Faq />
      <div className="lg:hidden">
        <ConnectUs />
      </div>
    </div>
  );
}

export default App;
