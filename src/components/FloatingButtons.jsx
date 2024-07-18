import "../styles/FloatingButton.css";
import { useState } from 'react';

const FloatingButtons = () => {
    const [active, setActive] = useState(false);

    const menuToggle = () => {
        setActive(!active);
    };

    return (
        <div className="navigation">
            <div className={`menuToggle ${active ? 'active' : ''}`} onClick={menuToggle}>
                <div className={`menu ${active ? 'active' : ''}`}>
                    <ul>
                        <li className="delay-0">
                            <a href="https://wa.me/9672179298" target="_blank" rel="noopener noreferrer">
                                <img className="floatingImg" src="./images/whatsapp.png" alt="whatsapp"/>
                            </a>
                        </li>
                        <li className="delay-1">
                            <a href="https://www.instagram.com/architecture_lifeline?igsh=MThjN2phaTNlZG5vcA==" target="_blank" rel="noopener noreferrer">
                                <img className="floatingImg" src="./images/instagram.png" alt="instagram"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FloatingButtons;
