
import React from 'react';
import "../css/index.css";

import profile from "../images/profileimg.png";

import twitter from "../images/ic_twitter.png";
import github from "../images/ic_github.png";
import linkedin from "../images/ic_linkedin.png";


class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={'dashboard-header-container'}>
                <div className={'dashboard-banner-overlay'}></div>
                <div className={'dashboard-profile-div'}>
                    <div className={'dashboard-profile-img-container'}>
                        <img src={profile} className={'dashboard-profile-img'} />
                        <div className={'social-profile-container'}>
                           
                            <a href="https://https://twitter.com/Vipulgaikwad" target="_blank"><img src={twitter} className={'social-profile-icon'} /></a>
                            <a href="https://www.linkedin.com/in/vipul-gaikwad-621833102/" target="_blank"><img src={linkedin} className={'social-profile-icon'} /></a>
                            <a href="https://github.com" target="_blank"><img src={github} className={'social-profile-icon'} /></a>
                            
                        </div>
                    </div>
                    <div className={'dashboard-profile-details-container'}>
                        <p className={'dashboard-profile-name-label'}>Hello, I'm 
                        <span className={'dashboard-profile-name'}> Vipul Gaikwad</span></p>
                        <p className={'dashboard-profile-deatils'}>
                            I'm a Software Engineer specialized in Web application development,In terms of the 
                            Web framework having knolodge in both back-end and front-end development,I developed 
                            many full-stack based web application using Node.js, React.js MongoDB & Express.
                            </p>
                        <p className={'dashboard-profile-deatils'}>
                            To improve my skill sets in Web I like to participate in various codding 
                            programs 
                            </p>
                        <p className={'dashboard-profile-deatils'}>
                             
                           
                        </p>
                    </div>
                </div>
                <img className={'dashboard-banner-img'} />
            </div>
        );
    }
}

export default ProfileComponent;