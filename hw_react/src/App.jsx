
import { FootersComponent } from "./components/Footercomponent";
import MainComponent from "./components/MainComponent";
import { NavbarComponent } from "./components/NavBarComponents";
import React from "react";

function App() {
  

  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className="mt-20 mx-24"> 
      <MainComponent></MainComponent>
      </div>
      <FootersComponent></FootersComponent>
    </>
  )
}

export default App;
