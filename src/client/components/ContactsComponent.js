import React from 'react';
import "../css/index.css";
import Contact from "./Contact.js";
import facebook from '../images/ic_black_facebook.png';
import twitter from '../images/ic_black_twitter.png';
import linkedin from '../images/ic_black_linkedin.png';
import github from '../images/ic_black_github.png';
import youtube from '../images/ic_black_youtube.png';

class ContactsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        
    }

   
    render() {
        return (
            <div className={'contacts-contents-container'}>
             <div className='contact-wrapper'>
              <div className='mycontacts'> 
                 <h4 >+91 8149 7163 23</h4>
                 <h4 >vipulgaikwad001@gmail.com</h4>
                 
                <div className={'contacts-social-container'}>
                   {/* <a href="https://www.facebook.com/hackbotone/" target="_blank"><img src={facebook} className={'contact-social-img'}/></a>*/}
                    <a href="https://twitter.com/Vipulgaikwad" target="_blank"><img src={twitter} className={'contact-social-img'}/></a>
                    <a href="https://www.linkedin.com/in/vipul-gaikwad-621833102/" target="_blank"><img src={linkedin} className={'contact-social-img'}/></a>
                    <a href="https://github.com/vipulgiakwad07" target="_blank"><img src={github} className={'contact-social-img'}/></a>
                   {/* <a href="https://www.youtube.com/anshumanpattnaik" target="_blank"><img src={youtube} className={'contact-social-img'}/></a> */}
                   
                </div>
                </div> 
                        <div>
                          <Contact />
                        </div>

                 </div>

                <div className={'contacts-footer-div'}></div>
                <p className={'contacts-footer-text'}>© 2022 VIPUL GAIKWAD. ALL RIGHTS RESERVED.</p>
            </div>
        );
    }
}

export default ContactsComponent;
