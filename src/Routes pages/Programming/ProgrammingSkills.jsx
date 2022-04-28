import React from 'react'

const ProgrammingSkills = () => {
  return (
    <div className='MySkills'>
         <div className="MySkillOne">
           <div className="words">
              <p className="ver">Верстка: <br /></p>
              Основы HTML & CSS
              <p className="ver3">Вспомогательные: <br /></p>
              <div className="text"> <span className='SCSS'>Препроцессор SCSS </span> Flexbox CSS , Bootstrap (условно) , Адаптивная вёрстка , опыт работы с figma</div> 
           </div>
        </div>
        <div className="MySkillTwo">
           <div className="words">
              <p className="ver">JavaScript: <br /></p>
              Основы JavaScript + ES6
              <div className="ver2">Фреймворки и технологии: <br /></div>
              <div className='JS-Skills'>JQuery , основные концепции ReactJS ,  немного GULP & Git</div>
           </div>
        </div>
    </div>
  )
}

export default ProgrammingSkills