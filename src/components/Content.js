import React from 'react';


class Content extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            showDetails:true
        }
    }
    toggleDetails(){
        this.setState({showDetails:!this.state.showDetails});
        // alert('ddd')
        // console.log(this.state.showDetails)
    }
    render(){
        return (
            <a className={this.state.showDetails ? "on" : "off"} onClick={this.toggleDetails.bind(this)}>
                <h2>Content</h2>
                <p> Hey! </p>
            </a>
        );
    }
}

export default Content;