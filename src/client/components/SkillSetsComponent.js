import React from 'react';
import "../css/index.css";

import { connect } from 'react-redux';

import { fetchSkillSets } from '../actions';




import Progressbar from './Progress_bar';






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
                {this.renderTechStacks(results)}
                <div className={'skills-mobile-gap'}></div>
                 
                   

                                           <div className="">
                                             <h3 className="heading">Progress Bar</h3>
                                             { /*<Progressbar bgcolor="orange" progress='30'  height={30} />
                                              <Progressbar bgcolor="red" progress='60'  height={30} />
                                              <Progressbar bgcolor="#99ff66" progress='50'  height={30} />
                                              <Progressbar bgcolor="#ff00ff" progress='85'  height={30} /> */  }
                                              <Progressbar bgcolor="#99ccff" progress='95'  height={30} />
                                           </div>
               
                      

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
                
              </table> 
                            
                  
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
