import React from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 128px;   
    font-family: 'vanguardcf';
    font-weight: 'heavy';
    text-align: left;
    margin-left: 30px;
    padding-top: 50px;
    background: -webkit-linear-gradient(#ff66cb, #40ddff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px white;
    letter-spacing: -2px;
`

const StyledSubTitle = styled.h2`
    font-size: 32px;
    padding-top: 0px 4px 0px 4px;
    font-weight: 'bold';
    font-family: 'vanguardcf', sans-serif;
    margin-left: 35px;
    margin-top: 25px;
    color: #ccc;
    -webkit-text-stroke: 0.5px cyan;
    text-decoration: overline;
    text-align: left;
    color: white;
`

const StyledButton = styled.button`
    background: -webkit-linear-gradient(left, #ff66cb, #40ddff, #fff);
    margin: 40px;
    padding: 10px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background - size: 200 % auto;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;

    &:hover {
        background-position: right center;
        text-decoration: none;
    }
`

class Hero extends React.Component {
    constructor() {
        super();
        this.vantaRef = React.createRef();
    }
    componentDidMount() {
        this.vantaEffect = GLOBE({
            el: this.vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1,
            scaleMobile: 1.0,
            color: 0xff66cb,
            color2: 0x40ddff,
            backgroundColor: 0x111111
        });
    }
    componentWillUnmount() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy();
        }
    }
    render() {
        return (
            <div style={{ height: "80vh", width: "100%" }} ref={this.vantaRef}>
                <div>
                    <StyledTitle>CONCETTO 2K22</StyledTitle>
                    <StyledSubTitle>REALITY BEYOND VISION</StyledSubTitle>
                    <StyledSubTitle>21 to 23 OCTOBER</StyledSubTitle>
                    <StyledSubTitle>IIT ISM DHANBAD</StyledSubTitle>
                    <StyledButton>REGISTRATIONS SOON</StyledButton>
                </div>
            </div>
        );
    }
}

export default Hero;