import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import logo from '../../images/G-blog.svg'
import { useTranslation } from 'react-i18next'
import profileImg from '../../images/Group9.png'
import card3 from '../../images/card3.png'
import card4 from '../../images/card4.png'
import card5 from '../../images/card5.png'
import twitter from '../../images/Twitterlogo.svg'
import cat from '../../images/cat.svg'
import figma from '../../images/figma.svg'

const Home = () => {

    const [t , i18n] = useTranslation()

    const ChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    const cutting = (text,limit)=> {
        if (text.length > limit ) {
          return text.slice(0, limit) + "... "
        }
        return text
      }

  return (
    <div className="container">
        <div className="home">
            <div className="header">
                <img src={logo} alt="" />
                <h1>{t('header')}</h1>
                <select defaultValue={i18n.language} onChange={ChangeLanguage} >
                    <option value="en">En</option>
                    <option value="uz">Uz</option>
                </select>
            </div>
            <div className="hero">
                <div key={1} className="card1" onClick={() => window.location.href = "/singlepage"}>
                    <h2>{cutting(t('card1t'), 50)}</h2>
                    <p>{cutting(t('card1c'), 100)}</p>
                    <div className="card-profile">
                        <img src={profileImg} alt="" />
                        <div className="card-profile-content">
                            <h3>Husni Ramdani</h3>
                            <p>{t('data')}</p>
                        </div>
                    </div>
                </div>
                <div key={2} className="card2" onClick={() => window.location.href = "/singlepage"} >
                    <h2>{cutting(t('card1t'), 50)}</h2>
                    <p>{cutting(t('card1c'), 100)}</p>
                </div>
                <div key={3} className="card3" onClick={() => window.location.href = "/singlepage"}>
                    <img src={card3} alt="" />
                    <h2>{cutting(t('card1t'), 50)}</h2>
                    <p>{cutting(t('card1c'), 200)}</p>
                    <div className="card-profile">
                        <img src={profileImg} alt="" />
                        <div className="card-profile-content">
                            <h3>Husni Ramdani</h3>
                            <p>{t('data')}</p>
                        </div>
                    </div>
                </div>
                <div key={4} className="card4" onClick={() => window.location.href = "/singlepage"}>
                    <img src={card4} alt="" />
                    <h2>{cutting(t('card1t'), 50)}</h2>
                    <p>by <Link>Husni Ramdani</Link></p>
                </div>
                <div key={5} className="card5" onClick={() => window.location.href = "/singlepage"}>
                    <img src={card5} alt="" />
                    <h2>{cutting(t('card1t'), 50)}</h2>
                    <p>by <Link>Husni Ramdani</Link></p>
                </div>
                <div key={6} className="card6" onClick={() => window.location.href = "/singlepage"}>
                    <h2>{cutting(t('card1t'), 50)}</h2>
                    <p>{cutting(t('card1c'), 100)}</p>
                    <div className="card-profile">
                        <img src={profileImg} alt="" />
                        <div className="card-profile-content">
                            <h3>Husni Ramdani</h3>
                            <p>{t('data')}</p>
                        </div>
                    </div>
                </div>
                <div key={7} className="card7" onClick={() => window.location.href = "/singlepage"}>
                    <h2>{cutting(t('card1t'), 50)}</h2>
                    <p>{cutting(t('card1c'), 100)}</p>
                    <div className="card-profile">
                        <img src={profileImg} alt="" />
                        <div className="card-profile-content">
                            <h3>Husni Ramdani</h3>
                            <p>{t('data')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <h3>{t('footer')}</h3>
                <h4>Gblog@gamil.com</h4>
                <div className="footer-links">
                    <Link><img src={twitter} alt="" /></Link>
                    <Link><img src={cat} alt="" /></Link>
                    <Link><img src={figma} alt="" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home