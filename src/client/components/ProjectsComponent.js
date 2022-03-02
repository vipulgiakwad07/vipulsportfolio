import React from 'react';
import "../css/index.css";

import { connect } from 'react-redux';
import Modal from 'react-modal';

import { fetchProjects } from '../actions';

import closeIcon from '../images/ic_close.png';
import githubIcon from '../images/ic_github_white.png';
import webIcon from '../images/ic_web_site.png';
import playstore from '../images/ic_google_playstore.png';

import Card  from './MediaCard';




// or less ideally
//import { Card,Button  } from 'react-bootstrap/Button';
//import { CardImg,CardText,CardBody,CardTitle,CardButton} from 'reactstrap';

const modalStyles = {
    overlay: {
        zIndex: 2000,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        zIndex: 2000,
        padding: '0px',
        borderRadius: '0px',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

class ProjectsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabItem: ['All', 'Web', 'Mobile'],
            selectedItem: 'All',
            projectItem: null,
            isDialogOpen: false,
        }
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    setSelectedTab = (item) => {
        this.setState({
            selectedItem: item
        })
    }

    renderProjects = (results) => {
        if (results.length > 0) {
            return (
                results.map((item) => {
                    var type = item.type;
                    var tabItem = this.state.selectedItem;

                    if (type.includes(tabItem)) {
                        return (
                            <div>{this.renderProjectItems(item)}</div>
                        );
                    }
                })
            )
        }
    }

    renderProjectItems = (item) => {
        return (
            <div className="projects-card-item">
                <div className={'div-thumb-overlay'}>
                    <div className={'overlay-item-container'}>
                        <div className={'overlay-project-div'}>
                            <p className={'project-title'}>{item.title}</p>
                            <div className={'project-readmore-container'} onClick={this.onSetProjectDialogState.bind(this, true, item)}>
                                <span className={'project-readmore-text'}>Read More</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={item.thumbnail} className={'projects-thumb-img'} onClick={this.onSetProjectDialogState.bind(this, true, item)} />
            </div>
        )
    }

    renderAllProjects = (results) => {
        if (results.length > 0) {
            return (
                results.map((item) => {
                    return (
                        <div>{this.renderProjectItems(item)}</div>
                    );
                })
            )
        }
    }

    onSetProjectDialogState = (isShow, item) => {
        this.setState({
            isDialogOpen: isShow,
            projectItem: item
        })
    }

    openProjectDialog = () => {
        var isShow = this.state.isDialogOpen;
        var item = this.state.projectItem;

        if (isShow) {
            return (
                <Modal
                    isOpen={isShow}
                    style={modalStyles}
                    onRequestClose={this.onSetProjectDialogState.bind(this, false)}
                    closeTimeoutMS={200}>
                    <div className={'project-modal-container'}>
                        <img src={item.thumbnail} className={'project-modal-thumb'} />
                        <div className={'project-modal-content-container'}>
                            <span className={'project-modal-title'}>{item.title}</span>
                            <p className={'project-modal-description'}>{item.description}</p>
                            <p className={'tech-stack-text'}>Technology Stack</p>
                            <div className={'project-modal-tech-container'}>
                                {item.tech_stack.map(tech =>
                                    <div key={tech} className={'tech-container-div'}>
                                        <span className={'tech-span'}>{tech}</span>
                                    </div>
                                )}
                            </div>
                            <div className={'project-footer-modal'}>
                                <div className={'close-site-div'} onClick={this.onSetProjectDialogState.bind(this, false)}>
                                    <img src={closeIcon} className={'close-site-icon'} />
                                    <span className={'close-site-text'}>CLOSE</span>
                                </div>
                                <a href={item.github_link} className={(item.github_link === 'N/A' ? 'github-hide-hyperlink' : 'github-hyperlink')} rel="noopener" target="_blank">
                                    <div className={'github-site-div'}>
                                        <img src={githubIcon} className={'visit-site-icon'} />
                                        <span className={'github-site-text'}>GITHUB</span>
                                    </div>
                                </a>
                                <a href={item.project_link} className={(item.type === 'Mobile/PlayStore' ? 'project-hyperlink' : 'project-hide-hyperlink')} rel="noopener" target="_blank">
                                    <div className={'play-store-div'}>
                                        <img src={playstore} className={'play-store-icon'} />
                                    </div>
                                </a>
                                <a href={item.project_link} className={(item.type === 'Mobile/Youtube' ? 'project-hyperlink' : 'project-hide-hyperlink')} rel="noopener" target="_blank">
                                    <div className={'youtube-site-div'}>
                                        <img src={webIcon} className={'youtube-site-icon'} />
                                        <span className={'youtube-site-text'}>YOUTUBE VIDEO</span>
                                    </div>
                                </a>
                                <a href={item.project_link} className={((item.type === 'Web' || item.type === 'Mobile/Blog') && item.project_link !== 'N/A' ? 'project-hyperlink' : 'project-hide-hyperlink')} rel="noopener" target="_blank">
                                    <div className={'visit-site-div'}>
                                        <img src={webIcon} className={'visit-site-icon'} />
                                        <span className={'visit-site-text'}>VISIT SITE</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Modal>
            )
        }
    }

    render() {
        var results = JSON.parse(JSON.stringify(this.props.projects)).data;

        return (
            <div >
            {/*<table>
                
               <tc>
                 <tr><div className={'project-round'}>Pizza Ordering App </div></tr>
                 <tr> <div className={'project-round'}> GitHub <a href="https://github.com/vipulgiakwad07/pizzaappp"> link</a> </div> </tr>
                </tc>

               <tc> 
                 <tr> <div className={'project-round'}>Photos Sharing App</div> </tr>
                 <tr> <div className={'project-round'}> GitHub <a href="https://github.com/vipulgiakwad07/photosharing"> link</a> </div> </tr>
               </tc>

               <tc> 
                 <tr> <div className={'project-round'}>Blogging App</div> </tr>
                 <tr> <div className={'project-round'}> GitHub <a href="https://github.com/vipulgiakwad07/bloggingapp"> link</a> </div> </tr>
               </tc>
 
                
               

               <tc> 
                 <tr> <div className={'project-round'}>E-com website</div> </tr>
                 <tr> <div className={'project-round'}> GitHub <a href="https://github.com/vipulgiakwad07/E-com"> link</a> </div> </tr>
               </tc>
             
                
                </table> */}

        {/*   <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card> */}
                <Card />
                
            </div>
        );
    }
}

const stateProps = state => ({
    projects: state.projects
});

const dispatchProps = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(stateProps, dispatchProps)(ProjectsComponent);