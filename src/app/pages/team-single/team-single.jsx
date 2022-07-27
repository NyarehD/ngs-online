import React from 'react'
import TeamSingleStyle from './team-single.module.sass'
import TeamSinglePhoto from '../../../assets/team-single-photo.jpg';
import { FontAwesomeIcon } from"@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faLink, faPenToSquare , faAngleRight } from"@fortawesome/free-solid-svg-icons";
import HeaderCarousel from "../../../core/components/header-carousel/header-carousel";
import HeaderStyle from '../../../core/components/header/header.module.sass'
import { useLocation as Location, Link } from 'react-router-dom';

function teamSingle(teamSingleContent) {
    const { state } = Location();

    const data = teamSingleContent.teamSingleContent
  return (
    <div className="">
        <section className={HeaderStyle.box}>
                <HeaderCarousel />
                <div className={HeaderStyle.bannerContent}>
                    <h1 className={HeaderStyle.mainHeader}>{data.mainHeader}</h1>
                    <div className={HeaderStyle.breakCrumb}>
                        <ol className={HeaderStyle.breakCrumbLists}>
                            <li className={HeaderStyle.breakCrumbList}><Link type="button" to={"/team-single"} className={HeaderStyle.link}>{data.firstBreakCrumb}</Link></li>
                            <li className={HeaderStyle.breakCrumbList} ><FontAwesomeIcon className={HeaderStyle.icon} icon={faAngleRight} ></FontAwesomeIcon></li>
                            <li className={HeaderStyle.breakCrumbList}><a href="/" className={HeaderStyle.link}>{data.secondBreakCrumb}</a></li>
                            <li className={HeaderStyle.breakCrumbList} ><FontAwesomeIcon className={HeaderStyle.icon} icon={faAngleRight} ></FontAwesomeIcon></li>
                            <li className={HeaderStyle.breakCrumbList} >{data.thirdBreakCrumb}</li>
                        </ol>
                    </div>
                </div>
            </section>

        <div className={TeamSingleStyle.container}>
        <div className={TeamSingleStyle.row}>
            
            <div className={`${TeamSingleStyle.col_xs_12} ${TeamSingleStyle.col_md_6} ${TeamSingleStyle.col_lg_6}`}>          
            <img src={TeamSinglePhoto} className={TeamSingleStyle.teamSingleMemberPhoto} alt="" />
            </div>

            <div className={`${TeamSingleStyle.col_xs_12} ${TeamSingleStyle.col_md_6} ${TeamSingleStyle.col_lg_6}`}>          

            <div className={`${TeamSingleStyle.divider-20} ${TeamSingleStyle.displaySmBlock} ${TeamSingleStyle.displayLgNone}`}></div>
                
                <div className={TeamSingleStyle.itemContent}>
                <h4>{state.name}</h4>
                <div className={TeamSingleStyle.socialIconContainer}>
                    <a href="#" className={TeamSingleStyle.facebook}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#3b5998">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                    </a>
                    <a href="#" className={TeamSingleStyle.twitter}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#55acee'>
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                    </a>
                    <a href="#" className={TeamSingleStyle.google}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" fill='#dd4b39'>
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                    </a>
                    <a href="#" className={TeamSingleStyle.youtube}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#e52d27'>
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                    </a>
                    <a href="#" className={TeamSingleStyle.instagram}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#3f729b'>
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                </div>
                </div>


                <table className={`${TeamSingleStyle.table} ${TeamSingleStyle.teamTable}`}>
                            <tbody>
                                <tr>
                                    <th scope="row">Occupation:</th>
                                    <td>{state.role}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Experience:</th>
                                    <td>9 Years</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email:</th>
                                    <td class="link-a">
                                        <a href="#">deanwhales@MaxiCom.com</a>
                                    </td>
                                </tr>
                                <tr class="border-bottom">
                                    <th scope="row">Location:</th>
                                    <td>Westmond, MA</td>
                                </tr>
                                <tr>
                                    <th>Phone:</th>
                                    <td>012-985-624</td>
                                </tr>
                            </tbody>
                    </table>
            </div>
        </div>
        <div className={TeamSingleStyle.PersonalExperience}>
        <div className={TeamSingleStyle.personalExperienceContainer}>

            <div className={TeamSingleStyle.content}>
                <h5>Personal Experience</h5>
                <p>Doloremque quam. Exercitation totam or cupidatat culpa but autem. In labore so nostrud asper natur officia magna, so quasi. Sit nequeporro dolor Iure. Pellentesque lorem mauris, vehicula vel nulla nec.</p>
            </div>
            
            <div className={TeamSingleStyle.contentpart2}>
                <div className={TeamSingleStyle.left}>
                    <p> INTERNET CONNECTION<span>93%</span></p>
                    <div  className={`${TeamSingleStyle.progress} ${TeamSingleStyle.pg1}`}></div>

                    <p> IPTV INSTALLATION<span>90%</span></p>
                    <div className={`${TeamSingleStyle.progress} ${TeamSingleStyle.pg2}`}></div>

                    <p> VOIP SETUP<span>98%</span></p>
                    <div  className={`${TeamSingleStyle.progress} ${TeamSingleStyle.pg3}`}></div>

                    <p> SALES MANAGING<span>93%</span></p>
                    <div className={`${TeamSingleStyle.progress} ${TeamSingleStyle.pg4}`}></div>
                </div>

                <div className={TeamSingleStyle.right}>
                    <p>Rem explicabo proident, and culpa and proident for iste and modi. Tot am aliqua but exercitation. Tiam ut bibendum leo.</p>
                    <p>Lorem and ex, and incidunt. Ad cons equuntur. Laboriosam conse quatur ad. Ipsa perspiciatis, but laboris and omnis. Excepteur quia totam or cupidatat.</p>
                </div>
                
            </div>
            
        </div>
        </div>

                <h5 className={TeamSingleStyle.contactTitle}>Contact Me</h5>
                <form  className={`${TeamSingleStyle.row} ${TeamSingleStyle.form_team_sigle}`}>

                    <div className={`${TeamSingleStyle.col_xs_12} ${TeamSingleStyle.col_md_6} ${TeamSingleStyle.col_lg_6} ${TeamSingleStyle.group}`}>      
                        <input className={TeamSingleStyle.input} type="text" name="fullname"  id="name" placeholder='FULL NAME' ></input>
                        <label for="name" className={TeamSingleStyle.label}><FontAwesomeIcon icon={faUser} className={TeamSingleStyle.icon}></FontAwesomeIcon></label>    
                    </div>
                    <div className={`${TeamSingleStyle.col_xs_12} ${TeamSingleStyle.col_md_6} ${TeamSingleStyle.col_lg_6} ${TeamSingleStyle.group}`} >      
                        <input className={TeamSingleStyle.input} type="text" name="email"id="name" placeholder='EMAIL ADDRESS' required="email"></input>
                        <label for="name" className={TeamSingleStyle.label}><FontAwesomeIcon icon={faEnvelope} className={TeamSingleStyle.icon}></FontAwesomeIcon></label>
                    </div>      
                    

                    <div className={`${TeamSingleStyle.col_xs_12} ${TeamSingleStyle.col_md_6} ${TeamSingleStyle.col_lg_6} ${TeamSingleStyle.group}`}>      
                        <input className={TeamSingleStyle.input} type="tel"  name="phone" id="number" placeholder='YOUR PHONE' required="phone"></input>
                        <label for="name" className={TeamSingleStyle.label}><FontAwesomeIcon icon={faPhone} className={TeamSingleStyle.icon}></FontAwesomeIcon></label>
                    </div>

                    <div className={`${TeamSingleStyle.col_xs_12} ${TeamSingleStyle.col_md_6} ${TeamSingleStyle.col_lg_6} ${TeamSingleStyle.group}`}>      
                        <input className={TeamSingleStyle.input} type="text" name="topic" id="name" placeholder='YOUR TOPIC'></input>
                        <label for="name" className={TeamSingleStyle.label}><FontAwesomeIcon icon={faLink} className={TeamSingleStyle.icon}></FontAwesomeIcon></label>
                    </div>


                    
                    <div className={`${TeamSingleStyle.col_xs_12}  ${TeamSingleStyle.group}`}>      
                        <textarea type="text" name="message"  row="8" placeholder='YOUR MESSAGE'></textarea>
                        <label for="name" className={TeamSingleStyle.label}><FontAwesomeIcon icon={faPenToSquare} className={TeamSingleStyle.icon}></FontAwesomeIcon></label>
                    </div>


                    <div className={`${TeamSingleStyle.col_xs_12} ${TeamSingleStyle.teamSingleBorderWrap}`}>
                            <button type="submit" className={TeamSingleStyle.teamSingleButton}></button>
                    </div>

                    
                </form>
        </div>
    </div>
  )
}

export default teamSingle