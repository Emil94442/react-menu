import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    
    const [visible , setVisible] = useState(false) 

    const ifingGlass = () => {
        if (visible === false) {
            setVisible(true)
        } else {
            setVisible(false)
        } 
    }
    
    const router = useNavigate()
    
    const MobileFalseModal = () => {
        if (visible) {
            setVisible(false)
            router('/handsome')
        }
    }
    const MobileFalseModal2 = () => {
        if (visible) {
            setVisible(false)
            router('/programming')
        }
    }
    const MobileFalseModal3 = () => {
        if (visible) {
            setVisible(false)
            router('/calisthenics')
        }
    }
    const MobileFalseModal4 = () => {
        if (visible) {
            setVisible(false)
            router('/geometry-dash')
        }
    }
    const MobileFalseModal5 = () => {
        if (visible) {
            setVisible(false)
            router('/plans')
        }
    }

  return (
    <header>
        <div className='container'>
            <div className="img">
                <img src="./images/channels4_profile.jpg" alt="Здесь должна быть моя картинка"/>
            </div>
            <div className="ul-style">
                <div className={visible === true ? 'burger-menu this' : 'burger-menu'} onClick={() => ifingGlass()}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
                <ul className='ul-one'>
                    <li className="first" onClick={() => router('./handsome')}>Внешность</li>
                    <li className="first" onClick={() => router('./programming')}>программирование</li>
                    <li className="first" onClick={() => router('./calisthenics')}>воркаут</li>
                    <li className="first" onClick={() => router('./geometry-dash')}>geometry <span className="gd">dash</span></li>
                    <li className="first" onClick={() => router('./plans')}>планы</li>
                </ul>
            </div>
        </div>
        <div className={visible === true ? 'header-menu this' : 'header-menu'}>
            <div className="text-menu">
                <ul className='ul-one2'>
                    <li className="first2" onClick={() => MobileFalseModal()}>Внешность</li>
                    <li className="first2" onClick={() => MobileFalseModal2()}>программирование</li>
                    <li className="first2" onClick={() => MobileFalseModal3()}>воркаут</li>
                    <li className="first2" onClick={() => MobileFalseModal4()}>geometry <span className="gd2">dash</span></li>
                    <li className="first2" onClick={() => MobileFalseModal5()}>планы</li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header