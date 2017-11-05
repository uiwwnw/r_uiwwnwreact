import React from 'react';
import Snb from './Snb';

class Header extends React.Component {
    constructor() {
        super(...arguments);
        this.state= {
            snbShow:false
        };
    }
    render(){
        let snb;
        if(this.state.snbShow === true) {
            snb = (
                <Snb/>
            )
        }
        return (
            <div>
                <header className="header">
                    <button className="left" onClick={
                        ()=>this.setState({snbShow:!this.state.snbShow})
                    }
                    ><i className="icon-menu"></i></button>
                    <h1>{this.props.title}</h1> 
                    <button className="right"></button>
                </header>
                <nav onClick={
                    ()=>this.setState({snbShow:!this.state.snbShow})
                }>{snb}</nav>
            </div>
        );
    }
}

export default Header;