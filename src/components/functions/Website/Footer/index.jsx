import React from 'react'
import style from './style.module.css'
function Footer(props) {
  return (
    <div className={style.footer}>
        <div className={style.footer_left}>
            <div>
                <h1>Tailblocks</h1>
            </div>
            <div>
                <p>2020 Tailblocks - @knyttneve</p>
            </div>
        </div>
        <div className={style.icon_section}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWUU1cM56XlpaFi0bXH8jyn7eCCpD0oQ6RQ&usqp=CAU" alt="" />
            <img src="data:image/png;base64,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" alt="" />
            <img src="https://c.neh.tw/thumb/f/720/m2i8H7Z5G6m2A0K9.jpg" alt="" />
            <img src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" alt="" />
        </div>
    </div>
  )
}

export default Footer