import React from 'react'
import Sidebar from './Sidebar';
import Catalogue from './Catalogue';
import '../../css/Main.css';

function Main() {
  return (
    <div className="main">
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="catalogue">
            <Catalogue />
        </div>
    </div>
  )
}

export default Main