import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import DriverPerformanceReport from './reports/driver_performance';
import MyApp from './grid/myApp.jsx';


export default class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <DriverPerformanceReport/>
                <Footer/>
            </div>
        );
    }
}

