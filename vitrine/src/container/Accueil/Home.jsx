import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import logo from '../../images/logoApropos.png'
import imgHome from '../../images/aproposImg.jpg'
import partner1 from '../../images/ABB.png'
import partner2 from '../../images/legrand.png'
import partner3 from '../../images/nexans.png'
import partner4 from '../../images/philips.png'
import partner5 from '../../images/logo-courant-rvb.png'
import partner6 from '../../images/schneider_electric-logo.png'
import imgparalax from '../../images/bloc-welcome-400x400.png'
import pub1 from '../../images/pub1.jpg'
import pub2 from '../../images/pub2.png'
import pub3 from '../../images/pub3.png'
import pub4 from '../../images/pub4.png'
import pub5 from '../../images/pub5.png'
import pub6 from '../../images/pub6.png'
import pub7 from '../../images/pub7.png'
import "./home.css"
import CountAnimation from './CountAnimation'


function Home() {



  return (
    <div>
      <header>
        <Navbar />

        <section className='banner d-flex justify-content-center align-items-center'>
          <div className="start-screen__content-container ">
            <div className="start-screen__content__item align-items-center">
              <div className="container text-center p-2" id='textStart' >
                <h1><span>Chez TCHOUPSON CAMEROUN,optez pour la qualité !</span></h1>
                <p><span >Vente de cables electriques, Fournitures et Materiel informatique <br />et Appareillages electriques</span></p>
                <div className="col-12 col-md-10 col-lg-6" >
                  <div className="d-none d-md-block">
                    <div className="__site-name" />
                  </div>
                  <div className="spacer py-2 py-sm-4" />
                </div>
                <div className="row" >
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main className='mb-5'>

        <section className='Apropos container-md '>
          <div className='row container mt-5'>
            <div className='col-md-6 p-md-4 p-2 d-flex justify-content-center align-items-center'>
              <img id='officeImg' src={imgHome} />

            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-md-2 col-3 col-sm-3'>
                  <img id='textImg' src={logo} height={100} width={100} />
                </div>
                <div className='col-md-10 col-9 d-flex align-items-center justify-content-center'>
                  <h1><span id='textApropos'>TCHOUPSON: EXPERIENCE<br /> ET POLYVALENCE !<hr /></span></h1>
                </div>
              </div>
              <div className='row'>
                <p>Tchoupson Cameroun Sarl est un acteur majeur dans <b>la vente des câbles fourniture du matériel informatique et appareillages électriques dans la ville de Douala .</b> Pour tous vos travaux d’électrification bâtiment ou industrielle tchoupson Cameroun est votre solution pour avoir du matériels électriques de qualités supérieurs respectant la norme et le standard européen à des prix attractifs. </p>
              </div>
              <div className='row m-md-4'></div>
              <div className='row'>
                <strong ><Link to='story' style={{ color: '#000' }}>Mieux nous connaître <i class="bi bi-arrow-right"></i> </Link></strong>
              </div>
            </div>
          </div>
        </section>

        <section className='Historique container mt-5'>
          <div className='row content  d-flex'>
            <div className='col-md-6 p-md-5 d-flex align-items-center justify-content-center flex-column'>
              <h2 id='textStory'>TCHOUPSON CAMEROUN</h2>
              <p style={{ color: '#fff' }}>Créée en 2018 , l’entreprise tchoupson Cameroun sarl c’est forgé un nom et peut aujourd’hui se qualifié de leader dans le domaine de la vente du matériels électriques dans la ville de Douala , grâce au dynamisme de son personnel qualifié et la qualité de ses produits qui n’a de cesse de satisfaire sa clientèle de plus en plus nombreuse .
                Tchoupson Cameroun aujourd’hui c’est 3 agences... <strong><Link to='story' style={{ color: '#fff' }}> Lire plus<i class="bi bi-arrow-right"></i> </Link></strong> </p>

            </div>
            <div className='col-md-6' id='paralax' style={{ backgroundImage: `url(${imgparalax})` }}></div>
          </div>
        </section>

        <section className='Banniere container-fluid mt-3 d-flex justify-content-center align-items-center' >
          <div className='row container-fluid m-md-5' >
            <div className='col-md-4 ' >
              <div className='row d-flex justify-content-center flex-row align-items-center text-center'>
                <i class="bi bi-trophy" style={{ color: '#fff', fontSize: '60px' }}></i>
                <CountAnimation end={2018} />
                <p style={{ color: '#fff', fontSize: '15px' }}>DEPUIS</p>
              </div>
            </div>
            <div className='col-md-4' >
              <div className='row d-flex justify-content-center flex-row align-items-center text-center'>
                <i class="bi bi-journal-album" style={{ color: '#fff', fontSize: '60px' }}></i>
                <span className='d-flex justify-content-center flex-row  align-items-center text-center'><span  style={{ color: '#fff', fontSize: '30px' }}>+</span><CountAnimation end={10000} /></span>
                <p style={{ color: '#fff', fontSize: '15px' }}>REFERENCES</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='row d-flex justify-content-center flex-row align-items-center text-center'>
                <i class="bi bi-cup-hot-fill" style={{ color: '#fff', fontSize: '60px' }}></i>
                <span className='d-flex justify-content-center flex-row  align-items-center text-center'><CountAnimation end={100} /><span style={{ color: '#fff', fontSize: '40px', fontWeight: 'bold' }}>%</span></span> 
                <p style={{ color: '#fff', fontSize: '15px' }}>SATISFACTION !</p>
              </div>
            </div>
          </div>
        </section>

        <section className='Partner container text-center mt-5'>
          <h4 style={{ color: '#6D6B6B'}}>Nos Partenaires</h4>
          <div className='row mt-3 mb-3'>
              <div className='col-md-4  d-flex justify-content-center align-items-center'>
                <img src={partner1} width='200'/>
              </div>
              <div className='col-md-4  d-flex justify-content-center align-items-center pt-5'>
              <img src={partner2} width='200'/>
              </div>
              <div className='col-md-4  d-flex justify-content-center align-items-center pt-5'>
              <img src={partner3} width='200' />
              </div>
          </div>
          <div className='row mb-3'>
              <div className='col-md-4  d-flex justify-content-center align-items-center pt-5'>
              <img src={partner4} width='200'/>
              </div>
              <div className='col-md-4  d-flex justify-content-center align-items-center pt-5'>
              <img src={partner5} width='200'/>
              </div>
              <div className='col-md-4  d-flex justify-content-center align-items-center pt-5'>
              <img src={partner6} width='200'/>
              </div>
          </div>
        </section>

        <section className='Pub container-fluid mt-5'>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={pub4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pub2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pub3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pub1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pub5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pub6}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pub7} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home