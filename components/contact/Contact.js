import React from "react"
import Image from "next/image"
import style from "./contact.module.css"

const Contact = () => {

    return (
        <div className={style["contact"]}>
            <div>Trovaci su:</div>
            <div className={`${style["d-flex"]} ${style["align-center"]} ${style["justify-center"]}`}>
                <a href="https://wa.me/+355676683858" target="_blank"><Image src={"/assets/whatsapp.png"} alt="Location" width={20} height={20} /></a>
                <a href="https://www.instagram.com/intouch.centre" target="_blank"><Image src={"/assets/instagram.png"} alt="Instagram" width={25} height={25} /></a>
                <a href="https://maps.app.goo.gl/jWx19jMkPB71fZWs5" target="_blank"><Image src={"/assets/maps.png"} alt="Location" width={20} height={20} /></a>
            </div>
        </div>
    )
}

export default Contact