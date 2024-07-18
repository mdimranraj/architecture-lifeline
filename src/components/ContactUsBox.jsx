

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
            publicKey: "cRydnE4ojVEh75a_4",
          });
        const SERVICE_ID = "service_ilf1b79"
        const TEMPLATE_ID = "template_93zexs8"
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
                <img className={styles.talk} src="./images/talk.gif" alt="contact" />
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
                            <textarea name="message" id="" cols="30" rows="4"  value={message} onChange={event => {setMessage(event.target.value);}}></textarea>
                        </div>
                       <button type="submit" className={styles.send + " btn btn-success"}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;