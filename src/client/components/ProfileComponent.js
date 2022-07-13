
import React from 'react';
import "../css/index.css";

import profile from "../images/profileimg.png";

// import twitter from "../images/ic_twitter.png";
import github from "../images/ic_github.png";
import linkedin from "../images/ic_linkedin.png";
import  { Button } from 'semantic-ui-react';


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
                           
                            {/* <a href="https://https://twitter.com/Vipulgaikwad" target="_blank"><img src={twitter} className={'social-profile-icon'} /></a> */}
                            <a href="https://www.linkedin.com/in/vipul-gaikwad-621833102/" target="_blank"><img src={linkedin} className={'social-profile-icon'} /></a>
                            <a href="https://github.com/vipulgiakwad07" target="_blank"><img src={github} className={'social-profile-icon'} /></a>
                            
                        </div>
                    </div>
                    <div className={'dashboard-profile-details-container'}>
                        <p className={'dashboard-profile-name-label'}>Hello, I'm 
                        <span className={'dashboard-profile-name'}> Vipul Gaikwad</span></p>
                        <h1 className={'dashboard-profile-deatils'}>
                            I like to make digital experience easier and simpler for people.
                            </h1>
                        <p className={'dashboard-profile-deatils'}>
                            {/*  To improve my skill sets in Web I like to participate in various codding 
                            programs */}
                            </p>
                           
                            <Button variant="contained">  <a href='https://drive.google.com/file/d/1NXokJ84FvSoc6ZNypw7IUyY1fk92_cm9/view?usp=sharing' target="_blank"> DownlodCV </a></Button>  
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
