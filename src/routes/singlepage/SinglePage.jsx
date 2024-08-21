import React from 'react'
import logo from '../../images/G-blog.svg'
import { useTranslation } from 'react-i18next'
import profileImg from '../../images/Group9.png'
import card3 from '../../images/card3.png'
import './singlepage.css'
import { Link } from 'react-router-dom'
import twitter from '../../images/Twitterlogo.svg'
import cat from '../../images/cat.svg'
import figma from '../../images/figma.svg'

const SinglePage = () => {

    const [t , i18n] = useTranslation()

    const ChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }

  return (
    <div className="container">
        <div className="header">
                <img src={logo} alt="" />
                <select defaultValue={i18n.language} onChange={ChangeLanguage} >
                    <option value="en">En</option>
                    <option value="uz">Uz</option>
                </select>
        </div>   
        <div className="singlepage-wrapper">
        <div className="content">
            <h1>{t('card1t')}</h1>
            <div className="profile">
                        <img src={profileImg} alt="" />
                        <div className="profile-content">
                            <h3>Husni Ramdani</h3>
                            <p>{t('data')}</p>
                        </div>
            </div>
            <img className='content-img' src={card3} alt="" />
            <p className='content-text'>{t('card1c')}</p>
            <button onClick={() => window.location.href = "/"}>{t('button')}</button>
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

export default SinglePage