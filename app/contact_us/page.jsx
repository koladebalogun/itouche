"use client";
import { useEffect, useRef } from "react";
import style from "./style.module.css";
import emailjs from "@emailjs/browser";
import Header from "../../components/Header";

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Header src={"logo.png"} text={"Soga property solutions"} />
      <div className={style.contact_wrapper}>
        <h1 className={style.header}>Contact Us</h1>
        <div className={style.contact_inner_wrapper}>
          <div className={style.left_card}>
            <p>
              If you are a property owner interested in guaranteed rent and
              stress free property management, please get in touch.
            </p>

            <div className={style.contact_info}>
              <p>Call us on: +44 (0)786 909 8557</p>
              <p>Email: sogapropertysolutionsltd@gmail.com</p>
            </div>
          </div>

          <div className={style.right_card}>
            <h2>Alternatively, you can fill the form below</h2>
            <form ref={form} onSubmit={sendEmail} className={style.form}>
              <label className={style.label}>Name</label>
              <input className={style.input} type="text" name="user_name" />
              <label className={style.label}>Email</label>
              <input className={style.input} type="email" name="user_email" />
              <label className={style.label}>Message</label>
              <textarea className={style.textarea} name="message" />
              <input className={style.submit} type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
