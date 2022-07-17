import React, { useState ,useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import Nav from "./core/components/nav/nav";
import Header from "./core/components/header/header";
import FooterCarousel from "./core/components/footer-carousel/footer-carousel";
import PageFooter from "./core/components/page-footer/page-footer";
import Copyright from "./core/components/copy-right/copy-right";
import ScrollButton from "./core/components/scroll-button/scroll-button";
import View from "./setup/routes-manager/view";
import api from './api/header-content'
import Preload from "./core/components/preload/preload";

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    
    // const fetchData = async () =>{
    //   const response = await api.get('/header-content')
    //   if(response && response.data){
    //     setLoading(false)
    //   }
    // }

    // fetchData()

    setTimeout(() => {
      setLoading(false)
    }, 1000)
    
  }, [])
  
  
  return (
    <div className="App">
      { loading ? 

          <Preload />
        
        :
          <div>
            <Nav />
            <Header />
            <Router>
              <View></View>
            </Router>
            <FooterCarousel />
            <PageFooter />
            <Copyright />
            <ScrollButton />
          </div>
      }
    </div>
  );
}

export default App;
