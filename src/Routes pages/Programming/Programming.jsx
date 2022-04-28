import React from 'react'
import ProgrammingDescription from './ProgrammingDescription'
import ProgrammingImgs from './ProgrammingImgs'
import ProgrammingSkills from './ProgrammingSkills'

const Programming = () => {
  return (
    <div className='Programming'>
       <ProgrammingDescription/>
       <ProgrammingImgs/>
       <div className='h1'>
         <div className="h1-text"> <span className="h1-skiil"> Навыки </span>полученные за 8-месяцев</div>
       </div>
       <ProgrammingSkills/>
    </div>
  )
}

export default Programming