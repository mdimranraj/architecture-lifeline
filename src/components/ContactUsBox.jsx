

import { useState } from 'react';
import styles from '../styles/ContactUsBox.module.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");

    function sendEmail(e){
        e.preventDefault();
        emailjs.init({
            publicKey: process.env.REACT_APP_Public_Key,
          });
        const SERVICE_ID = process.env.REACT_APP_Service_ID;
        const TEMPLATE_ID = process.env.REACT_APP_Template_ID;
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, '#myForm').then(
            (response) => {
                toast.success('Message Sent !', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    });
              setName("");
              setEmail("");
              setMessage("");
              setPhone("");
            },
            (error) => {
                console.log(error)
              toast.error('Message Failed to Send !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
            },
          );
    }
    

    return(
        <div className={styles.mainContainer}>
            <div className={styles.leftPart}>
                <div>
                    <h3>We'll reach out to you</h3>
                    <div>
                        Write to us. Give suggetions. Our team will contact you.
                    </div> 
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6199671930235!2d77.59003647484292!3d13.059845087263694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19498f42dbf7%3A0xae3e2917238c6fd1!2sRiseWorx%20Labs%20Pvt%20Ltd%20(CoWork%2C%20SharedOfficeSpace)!5e0!3m2!1sen!2sin!4v1721476975449!5m2!1sen!2sin" title="Location" className={styles.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={styles.rightPart}>
                <div>
                    <h3>Get in Touch</h3>
                    <form action="" onSubmit={sendEmail} className={styles.formDiv} id="myForm">
                        <div className={styles.nameEmail}>
                            <div className={styles.nameDiv}>
                                <label htmlFor="name">Name</label>
                                <input type="text"  name='name' value={name} onChange={event => {setName(event.target.value);}} required/>
                            </div>
                            <div className={styles.emailDiv}>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email'  value={email} onChange={event => {setEmail(event.target.value);}}/>
                            </div>
                        </div>
                        <div className={styles.phoneDiv}>
                            <label htmlFor="phone">Phone</label>
                            <input type="text"  name='phone' value={phone} onChange={event => {setPhone(event.target.value);}} maxLength={10} minLength={10} required/>
                        </div>
                        <div className={styles.messageDiv}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="" rows="4"  value={message} onChange={event => {setMessage(event.target.value);}}></textarea>
                        </div>
                       <button type="submit" className={styles.send + " btn btn-success"}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;