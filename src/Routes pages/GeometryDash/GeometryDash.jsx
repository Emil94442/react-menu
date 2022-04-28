import React from 'react'

const GeometryDash = () => {
  return (
    <div className='GeometryDash'>
        <div className="GD-imgs">
            <a href="https://play.google.com/store/apps/details?id=com.robtopx.geometryjump&hl=uz&gl=HK" target='_blank'>
                <img src="./images/GD.png" alt="" className='GD-one'/>
            </a>
            <a href="https://www.ign.com/games/geometry-dash" target='_blank'>
               <img src="./images/GD-JORNEY.jpg" alt=""  className='GD-two'/>
            </a>
            <a href="https://trashbox.ru/link/geometry-dash-android" target='_blank'>
               <img src="./images/screenshot_07.png" alt="" className='GD-three'/>
            </a>
        </div>
        <div className="CD-Boss">
        <div className='GD-container'>
            <div className="GD-h1">Мои достижения!</div>
            <div className="GD-ol">
                <ol className="ol-GD">
                    <li className="li-GD">Glowy</li>
                    <li className="li-GD">Bausha Vortex 78%</li>
                    <li className="li-GD">Phobos</li>
                    <li className="li-GD">Titan-complex 32-96%</li>
                    <li className="li-GD">Bloodbath</li>
                    <li className="li-GD">A Bizarre Phantasm</li>
                    <li className="li-GD">Retention</li>
                    <li className="li-GD">Subversive</li>
                    <li className="li-GD">HyperSonic</li>
                    <li className="li-GD">Night Terrors</li>
                </ol>
            </div>
        </div>
        </div>
        <div className="clash-of-clans">
            <img src="./images/меч.png" alt="" className='mech'/>
            <img src="./images/меч.png" alt="" className='rotateNeed'/>
        </div>
        <div className="clash-of-clans2">
            <img src="./images/меч.png" alt="" className='mech2'/>
            <img src="./images/меч.png" alt="" className='rotateNeed2'/>
        </div>
    </div>
  )
}

export default GeometryDash