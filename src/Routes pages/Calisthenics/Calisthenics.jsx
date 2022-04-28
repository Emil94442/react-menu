import React from 'react'

const Calisthenics = () => {
  return (
    <div className='Calisthenics'>
        <h1 className="title">Calisthenics</h1>
        <div className="Calisthenics-skills">
            <div className="static">
                <h1 className="static_word">Статика & Cила</h1>
                <div className="static_text">
                    <h1 className="now-years">2021:</h1>
                    <ol className='ol-static'>
                       <li className="li-static">Подтягивание на одной руке 1 раз (кривое и один раз в жизни выполнил)</li>
                       <li className="li-static">Ласточка 2-3 сек</li>
                       <li className="li-static">Передний вис с одной ногой ~ 17 сек</li>
                       <li className="li-static">Уголок 35 сек</li>
                    </ol>
                    <h1 className="now-years">2020:</h1>
                    <ol className='ol-static'>
                       <li className="li-static">Уголок 3-5 сек</li>
                    </ol>
                </div>
            </div>
            <div className="dynamic">
            <h1 className="dynamic_word">Динамика</h1>
                <div className="dynamic_text">
                    <h1 className="now-years">2021:</h1>
                    <ol className='ol-dynamic'>
                       <li className="li-dynamic">360</li>
                       <li className="li-dynamic">кумкват с подколеньев (почти)</li>
                       <li className="li-dynamic">Внутренний Лач-Гейнер</li>
                       <li className="li-dynamic">Супра 180</li>
                       <li className="li-dynamic">Кид-Тарзан</li>
                       <li className="li-dynamic">Топорик без раскачки</li>
                    </ol>
                    <h1 className="now-years">2020:</h1>
                    <ol className='ol-dynamic'>
                       <li className="li-dynamic">Санжировка (180)</li>
                       <li className="li-dynamic">Выход на три</li>
                    </ol>
                </div>
            </div>
            <div className="base">
            <h1 className="base_word">База</h1>
                <div className="base_text">
                    <h1 className="now-years">2021:</h1>
                    <ol className='ol-base'>
                       <li className="li-base">Подтягивания 17 раза</li>
                       <li className="li-base">Отжимания на брусьях 22 раза</li>
                       <li className="li-base">Отжимание от пола 44 раза</li>
                       <li className="li-base">Выход силой 7 раз (рывковых)</li>
                    </ol>
                    <h1 className="now-years">2020:</h1>
                    <ol className='ol-base'>
                       <li className="li-base">Подтягивания 10-12 раза</li>
                       <li className="li-base">Отжимания на брусьях 10-15 раза</li>
                       <li className="li-base">Отжимание от пола 33 раза</li>
                    </ol>
                </div>
              </div>
        </div>
            <div className="calisthenics-imgs">
                <img src="./images/Back-lever.jpg" alt="" className='imgs-workout'/>
                <img src="./images/360.jpg" alt="" className='imgs-workout2'/>
                <img src="./images/Archer-pull up.jpg" alt="" className='imgs-workout3'/>
            </div>
            <div className="health">Всегда занимайся спортом , ведь это полезно для здоровья!</div>
            <div className="nothing">d dd</div>
    </div>
  )
}

export default Calisthenics