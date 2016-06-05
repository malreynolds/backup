import React, { Component } from 'react'

export default class Footer extends Component {

    render() {
        return (
            <div>
                <div style={{clear:"both"}}></div>
                <footer className="footer">
                    <div className="container">
                        <p className="footer-company-motto">Velocity</p>

                        <p className="footer-links">
                            <a href="#">Home</a>
                            ·
                            <a href="#">Blog</a>
                            ·
                            <a href="#">Pricing</a>
                            ·
                            <a href="#">About</a>
                            ·
                            <a href="#">Faq</a>
                            ·
                            <a href="#">Contact</a>
                        </p>

                        <p className="footer-company-name">UK Fuels Ltd &copy; 2015</p>
                    </div>
                </footer>
            </div>
        )
    }
}

