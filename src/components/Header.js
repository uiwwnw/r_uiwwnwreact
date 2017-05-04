import React from 'react';
import './Header.scss';


class Header extends React.Component {
    render(){
        var swittt = false;

        return (
            <header className="{swittt ? on : off}">

            </header>
        );
    }
}

export default Header;