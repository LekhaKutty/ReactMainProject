import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

class Sidebar extends Component {
    
    render() {
        return (
            <div>
                <div className="header"></div>
                <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"></input>
                <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                    <div className="spinner diagonal part-1"></div>
                    <div className="spinner horizontal"></div>
                    <div className="spinner diagonal part-2"></div>
                </label>
                <div id="sidebarMenu">
                    <ul className="sidebarMenuInner">
                        
                        <li><NavLink to='/'>Players</NavLink></li>
                        <li><NavLink to='/'>Games</NavLink></li>
                        <li><NavLink to='/'>Results</NavLink></li>
                        <li><NavLink to='/'>News</NavLink></li>
                    </ul>
                </div>
               
            </div>
        )
    }
}

export default Sidebar