

import { useState } from 'react';
import styles from '../styles/ContactUsBox.module.css'
import emailjs from '@emailjs/browser';
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
              console.log('SUCCESS!', response.status, response.text);
              setName("");
              setEmail("");
              setMessage("");
              setPhone("");
            },
            (error) => {
              console.log('FAILED...', error);
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
            </div>
            <div className={styles.rightPart}>
                <div>
                    <h3>Get in Touch</h3>
                    <form action="" onSubmit={sendEmail} className={styles.formDiv} id="myForm">
                        <div className={styles.nameEmail}>
                            <div className={styles.nameDiv}>
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder='Name' name='name' value={name} onChange={event => {setName(event.target.value);}} required/>
                            </div>
                            <div className={styles.emailDiv}>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' placeholder='Email' value={email} onChange={event => {setEmail(event.target.value);}}/>
                            </div>
                        </div>
                        <div className={styles.phoneDiv}>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" placeholder='Phone' name='phone' value={phone} onChange={event => {setPhone(event.target.value);}} maxLength={10} minLength={10} required/>
                        </div>
                        <div className={styles.messageDiv}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="" cols="30" rows="4" placeholder='Message' value={message} onChange={event => {setMessage(event.target.value);}}></textarea>
                        </div>
                       <button type="submit" className="btn btn-success">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;