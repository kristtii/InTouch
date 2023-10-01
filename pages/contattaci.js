import React, { useState } from "react";
import { useRef } from "react";
import style from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import Footer from "../components/navbar/Footer";
import Navbar from "@/components/navbar/Navbar";
import Contact from "@/components/contact/Contact";

export default function ContactForm() {
    const form = useRef();
    const [notification, setNotification] = useState(null);

    function notify(type, message) {
        setNotification({ type, message });
        setTimeout(() => {
            setNotification(null);
        }, 30000);
    }

    function sendEmails(s) {
        s.preventDefault();

        emailjs
            .sendForm(
                "service_weticns",
                "template_g2map2x",
                form.current,
                "X47ZhVrPjj8UnlFYV"
            )
            .then(
                (result) => {
                    notify("success", "E-mail sent successfully");
                },
                (error) => {
                    notify("error", "Failed to send e-mail");
                }
            );
        s.target.reset();
    }

    return (
        <>
            <Navbar />
            <form className={style["contact"]} onSubmit={sendEmails} ref={form}>
                <h1 className="text-2xl font-bold dark:text-white">
                    Contattaci!
                </h1>
                <br />

                <label
                    htmlFor="fullname"
                    className="text-white-500 font-light mt-8 dark:text-gray-50"
                >
                    Nome
                    <span className="text-red-500"> *</span>
                </label>
                <div className={style["contact-fields"]}>
                    <input type="text" name="fullname" required />
                </div>
                <label
                    htmlFor="email"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                    E-mail <span className="text-red-500">*</span>
                </label>
                <div className={style["contact-fields"]}>
                    <input type="email" name="email" required />
                </div>
                <label
                    htmlFor="subject"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                    Oggetto dell'E-mail <span className="text-red-500">*</span>
                </label>
                <div className={style["contact-fields"]}>
                    <input type="text" name="subject" required />
                </div>
                <label
                    htmlFor="message"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                    Messaggio <span className="text-red-500">*</span>
                </label>
                <div className={style["contact-fields"]}>
                    <textarea name="message" required></textarea>
                </div>
                <br />
                <div className={style["contactb"]}>
                    <button type="submit">
                        Inviare
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 5.25L12 12.75L21 5.25"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M21 12.75V18C21 18.3978 20.842 18.7809 20.5607 19.0607C20.2794 19.3404 19.8963 19.4983 19.4983 19.4983H4.50174C4.1037 19.4983 3.72056 19.3404 3.43934 19.0607C3.15811 18.7809 3 18.3978 3 18V12.75"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M21 5.25H3V18H21V5.25Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </form>
            {notification && (
                <div
                    className={`${notification.type === "success" ? style["text-green"] : style["text-red"]} ${style["p-3"]} ${style["text-center"]} ${style["mx-auto"]} ${style["width-fit-content"]}`}
                >
                    {notification.message}
                </div>
            )}
            <Contact />
            <Footer />
        </>
    );
}