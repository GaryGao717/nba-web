/**
 * Created by gy on 4/7/18.
 */
import React from 'react';
import logo from '../assets/images/nav_logoman.svg';

export class TopNavBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}