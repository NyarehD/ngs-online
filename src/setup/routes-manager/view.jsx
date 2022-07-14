import React, { useEffect, useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import api from '../../api/header-content' 

import Home from '../../app/pages/home/home'
import About from '../../app/pages/about/about'
import Error from '../../app/pages/error/error'
import Contact from '../../app/pages/contact/contact'
import Event from '../../app/pages/event/event'
import TeamSingle from '../../app/pages/team-single/team-single'

function View() {

  const [homeContent , setHomeContent] = useState({})
  const [aboutContent , setAboutContent] = useState({})
  // const [contactContent , setContactContent] = useState({})
  const [eventContent , setEventContent] = useState({})

  useEffect( () => {
    const fetchData = async () =>{
      try{
        const response = await api.get('/header-content');
        const data = response.data[0]
        setHomeContent(data.home[0])
        setAboutContent(data.about[0])
        // setContactContent(data.contact[0])
        setEventContent(data.eventList[0])
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
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/event-list' element={<Event eventContent={eventContent} />} ></Route>
        <Route path='/team-single' element={<TeamSingle />} ></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
  )
}

export default View