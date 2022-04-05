import React from 'react';
import "../css/index.css";

import { connect } from 'react-redux';

import { fetchSkillSets } from '../actions';
import Progressbar from './Progress_bar';
import Progres from './LinearWithValueLabel'
import Progress from './LinearWithValueLabel';
import LinearWithValueLabel from './LinearWithValueLabel';
import ProgressBar1 from './progress-bar';

class SkillSetsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSkillSets();
    }

    renderTechSkills = (items) => {
        return (
            items.map(data =>
                <div key={data} className={'skills-item-container'}>
                    <span className={'skills-item-text'}>{data}</span>
                </div>
            )
        );
    }

    renderTechStacks = (results) => {
        if (results.length > 0) {
            return (
                results.map(item =>
                    <div key={item} className={'skills-sets-container'}>
                        <div className={'skills-label-container'}>
                            <span className={'skills-label'}>{item.label}</span>
                        </div>
                        <div className={'skills-separator-container'}>
                            <div className={'skills-separator-line'}></div>
                            <div className={'skills-separator-circle'}>
                                <div className={'skills-separator-inner-circle'}></div>
                            </div>
                        </div>
                        <div className={'skills-items-container'}>
                            {this.renderTechSkills(item.skills)}
                        </div>
                    </div>
                )
            );
        }
    }

    render() {
        var results = JSON.parse(JSON.stringify(this.props.skills)).data;
        return (
            <div className={'skills-parent-container'}>
                
                    <div className='wrapper'>

                           <div className='frontend'>
                               <h2>frontend</h2>   
                               <h3 className="heading">HTML</h3>
                               <Progressbar bgcolor="#3dCFD3" progress='90'  height={5} />
                               <h3 className="heading">CSS</h3>
                               <Progressbar bgcolor="#3dCFD3" progress='75'  height={5} />
                               <h3 className="heading">Java Script</h3>
                               <Progressbar bgcolor="#3dCFD3" progress='80'  height={5} />
                               <h3 className="heading">React</h3>
                               <Progressbar bgcolor="#3dCFD3" progress='70'  height={5} />
                           </div>


                           <div className='backend'>
                                <h2>Backend</h2>   
                                <h3 className="heading">NodeJs</h3>
                                <Progressbar bgcolor="#3dCFD3" progress='65'  height={5} />
                                <h3 className="heading">Express</h3>
                                <Progressbar bgcolor="#3dCFD3" progress='50'  height={5} />
                           
                           </div>

                           <div className='database'> 
                           <h2>Database</h2>   
                               <h3 className="heading">Mongodb</h3>
                               <Progressbar bgcolor="#3dCFD3" progress='65'  height={5} />
                     
                       </div>
                       </div>

            
           {/* <Progress done="70" />
            <LinearWithValueLabel />
              <ProgressBar1 completed="70%"/> 
            
            
             <table>
               <tc>
                <tr><div className={'skill-round'}>react </div></tr>
                <tr> <div className={'skill-round'}>Node</div> </tr>
                <tr> <div className={'skill-round'}>Mongodb</div> </tr></tc>
               <tc> <tr><div className={'skill-round'}>Express</div></tr>
               <tr> <div className={'skill-round'}>Java Script</div></tr>
               <tr><div className={'skill-round'}>HTML</div></tr>
               <tr> <div className={'skill-round'}>CSS</div></tr>
                </tc> 
                <tc>
                    <tr><div className={'skill-round'}>Telwind CSS</div></tr>
                    <tr><div className={'skill-round'}>Bootstrap</div></tr>
                    <tr><div className={'skill-round'}>Laravel Mix</div></tr>
                </tc>
                
              </table> */}
            </div>
        );
    }
}

const stateProps = state => ({
    skills: state.skills
});

const dispatchProps = dispatch => ({
    fetchSkillSets: () => dispatch(fetchSkillSets()),
});

export default connect(stateProps, dispatchProps)(SkillSetsComponent);
