import React from "react"
import Navbar from "@/components/navbar/Navbar"
import Contact from "@/components/contact/Contact"
import Footer from "@/components/navbar/Footer"
import AboutUs from "@/components/aboutUs/AboutUs"

function about() {
    return(
        <>
            <Navbar />
            <AboutUs />
            <Contact />
            <Footer />
        </>
    )
}

export default about