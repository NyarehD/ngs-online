import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../app/pages/home/home";
import About from "../../app/pages/about/about";
import Error from "../../app/pages/error/error";
import Contact from "../../app/pages/contact/contact";
import Event from "../../app/pages/event/event";
import TeamSingle from "../../app/pages/team-single/team-single";
// import Blog from "../../app/pages/blog/blog";
import BlogList from "../../app/pages/blog-list/blog_list";

function View() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route index element={<BlogList />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/event-list" element={<Event />}></Route>
      <Route path="/team-single" element={<TeamSingle />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default View;
