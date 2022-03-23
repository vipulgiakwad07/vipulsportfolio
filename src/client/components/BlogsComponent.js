/*import React from 'react';
import "../css/index.css";

import { connect } from 'react-redux';

import { fetchBlogs } from '../actions';

class BlogsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.fetchBlogs();
    }

    

    render() {
       
        return (
            <div className={'blogs-parent-contents-container'}>
                <div className='aboutme-grid'>
                
                <div>
                <ul>
                      <h4>Positives</h4>
                      <li><p>Patience</p></li>
                      <li><p>Good Communication skill </p></li>
                      </ul>
                </div>
                <div>
                <ul>
                      <h4>Negatives</h4>
                      <li><p>Emotional</p></li>
                      <li><p>Bad Handwriting </p></li>
                      </ul>
                </div>
                <div>
                <ul>
                      <h4>Hobbies</h4>
                      <li><p>Playing Chess</p></li>
                      <li><p>Watching Cricket</p></li>
                      </ul>
                </div>

                  
                </div>
               
             </div>
        );
    }
}

const stateProps = state => ({
    blogs: state.blogs
});

const dispatchProps = dispatch => ({
    fetchBlogs: () => dispatch(fetchBlogs()),
});

export default connect(stateProps, dispatchProps)(BlogsComponent);
*/
import React from 'react';
import "../css/index.css";

import { connect } from 'react-redux';

import { fetchBlogs } from '../actions';

class BlogsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.fetchBlogs();
    }

    render() {
        var results = JSON.parse(JSON.stringify(this.props.blogs)).data;

        return (
            <div className={'blogs-parent-contents-container'}>
            
            <p>  A self-tought developer. I'am enthusiastic about lerning new skills, 
                 expandiing my knowledge, and leveraging my learnings. I enjoy creating 
                 user experience design, inerfaces and web development  </p>
                   
            
                <div className='aboutme-grid'>
                
                <div>
                <ul>
                      <h4>Positives</h4>
                      <li><p>Patience</p></li>
                      <li><p>Good Communication skill </p></li>
                      </ul>
                </div>
                <div>
                <ul>
                      <h4>Negatives</h4>
                      <li><p>Emotional</p></li>
                      <li><p>Bad Handwriting </p></li>
                      </ul>
                </div>
                <div>
                <ul>
                      <h4>Hobbies</h4>
                      <li><p>Playing Chess</p></li>
                      <li><p>Watching Cricket</p></li>
                      </ul>
                </div>

                  
                </div>
               
             </div>
        );
    }
}

const stateProps = state => ({
    blogs: state.blogs
});

const dispatchProps = dispatch => ({
    fetchBlogs: () => dispatch(fetchBlogs()),
});

export default connect(stateProps, dispatchProps)(BlogsComponent);




