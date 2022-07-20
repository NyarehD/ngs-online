import React, { useContext, useState, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import Nav from "./core/components/nav/nav";
import Header from "./core/components/header/header";
import FooterCarousel from "./core/components/footer-carousel/footer-carousel";
import PageFooter from "./core/components/page-footer/page-footer";
import Copyright from "./core/components/copy-right/copy-right";
import ScrollButton from "./core/components/scroll-button/scroll-button";
import View from "./setup/routes-manager/view";
import TeamSingle from "./app/pages/team-single/team-single";
import Faq from './app/pages/faq/faq.jsx'

const theme = {
  'dark':{
    'color':'black',
    'background':'white',
  },
  'white':{
    'color':'white',
    'background':'black',
  },
  mode: 'light'
}

export const Context = createContext(theme)

function App() {
  const [mode , setMode] = useState(Context)
  return (
    <Context.Provider value={[mode, setMode]}>
      <div className={`App ${mode.mode!=='light'?"darkMode":""}`}>
        <Nav />
        <Router>
          <Header />
          <View></View>
        </Router>
        <FooterCarousel />
        <PageFooter />
        <Copyright />
        <ScrollButton />
      </div>
    </Context.Provider>
  );
}

export default App;
