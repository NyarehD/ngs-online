import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./core/components/nav/nav";
import Header from "./core/components/header/header";
import FooterCarousel from "./core/components/footer-carousel/footer-carousel";
import PageFooter from "./core/components/page-footer/page-footer";
import Copyright from "./core/components/copy-right/copy-right";
import ScrollButton from "./core/components/scroll-button/scroll-button";
import View from "./setup/routes-manager/view";
import TeamSingle from "./app/pages/team-single/team-single";
// import Animation from "./app/pages/animation/animation";
// import BlogList from "./app/pages/blog-list/blog-list";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Router>
        <View></View>
      </Router>
      {/* <Animation /> */}
      {/* <BlogList /> */}
      <FooterCarousel />
      <PageFooter />
      <Copyright />
      <ScrollButton />
    </div>
  );
}

export default App;
