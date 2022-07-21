import React, { useEffect, useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import api from '../../api/mockApi' 

import Home from '../../app/pages/home/home'
import About from '../../app/pages/about/about'
import Error from '../../app/pages/error/error'
import Contact from '../../app/pages/contact/contact'
import Event from '../../app/pages/event/event'
import TeamSingle from '../../app/pages/team-single/team-single'
import TeamList from '../../app/pages/team-list/team-list'
import GalleryList from '../../app/pages/others/gallary-list/gallery-list'
import MyFaq from '../../app/pages/faq/faq'
import EventSingle from "../../app/pages/event-single/event-single";
import Blog from "../../app/pages/blog/blog-single";
import BlogList from "../../app/pages/blog-list/blog_list";
import TermsOfUse from '../../app/pages/term-of-use/terms-of-use'

function View() {

  const [homeContent , setHomeContent] = useState({})
  const [aboutContent , setAboutContent] = useState({})
  const [contactContent , setContactContent] = useState({})
  const [eventContent , setEventContent] = useState({})
  const [teamListContent , setTeamListContent] = useState({})
  const [faqContent , setFaqContent] = useState({})
  const [galleryListContent , setGalleryListContent] = useState({})
  const [eventSingleContent , setEventSingleContent] = useState({})
  const [teamSingleContent , setTeamSingleContent] = useState({})
  const [blogListContent , setBlogListContent] = useState({})
  const [blogContent , setBlogConetent] = useState({})
  const [termsOfUseContent ,setTermsOfUseContent] = useState({})

  useEffect( () => {
    const fetchData = async () =>{
      try{
        const response = await api.get('/header-content');
        const data = response.data
        setHomeContent(data.home)
        setAboutContent(data.about)
        setContactContent(data.contact)
        setEventContent(data.eventList)
        setTeamListContent(data.teamList)
        setFaqContent(data.faq)
        setGalleryListContent(data.galleryList)
        setEventSingleContent(data.eventSingle)
        setTeamSingleContent(data.teamSingle)
        setBlogListContent(data.blogList)
        setBlogConetent(data.blogSingle)
        setTermsOfUseContent(data.termsOfUse)
      } catch(err){
        console.log(`Error : ${err}`)
      }
    }

    fetchData()
  }, [])

  return (
    <Routes>
        <Route index element={<Home homeContent={homeContent} />} ></Route>
        <Route path='/about' element={<About aboutContent={aboutContent} />} ></Route>
        <Route path='/contact' element={<Contact contactContent={contactContent} />} ></Route>
        <Route path='/team-list' element={<TeamList teamListContent={teamListContent} />}></Route>
        <Route path='/team-single' element={<TeamSingle teamSingleContent={teamSingleContent} />} ></Route>
        <Route path='/event-list' element={<Event eventContent={eventContent} />} ></Route>
        <Route path='/event-single' element={<EventSingle eventSingleContent={eventSingleContent} />} ></Route>
        <Route path='/gallery' element={<GalleryList galleryListContent={galleryListContent} />} ></Route>
        <Route path='/faq' element={<MyFaq faqContent={faqContent} />} ></Route>
        <Route path='/blog' element={<BlogList blogListContent={blogListContent} />} ></Route>
        <Route path='/blog/single' element={<Blog blogContent={blogContent} />} ></Route>
        <Route path='/terms-of-use' element={<TermsOfUse termsOfUseContent={termsOfUseContent} />}></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
  );
}

export default View;
