import styled from "styled-components"
import styles from "../styles/About.module.css"

const StyledHr = styled.hr`
    color: white;
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
    text-decoration: underline;
    text-align: center;
    color: white;
`

export default function AboutUs() {
    return (
        <>
            <StyledHr />
            <div style={{ height: "10vh", width: "100%" }}>
                <div>
                    <StyledSubTitle><h1>ABOUT IIT ISM</h1></StyledSubTitle>
                </div>
                
            </div>
            <div className={styles.boxx}>
                <p>
                    Situated in the heart of the country’s prime coking coal belt, 260 kms from Kolkata with a campus spread over an area of 393 acres, 
                    IIT (ISM) has all the facilities of a world class academic institute. What started as an institution to impart mining education has graduated into a 
                    full-fledged technical institution of international acclaim offering a host of programmes in B.Tech, M.Tech, and doctorate programmes.
                </p>
            </div> 
            <div style={{ height: "10vh", width: "100%" }}>
                <div>
                    <StyledSubTitle><h1>ABOUT CONCETTO</h1></StyledSubTitle>
                </div>
                
            </div>
            <div className={styles.boxx}>
                <p>              
                    The Annual Techno-Management Festival of IIT (ISM), Dhanbad, is to be held from 21st-23rd October 2022 <br/>
                    The 3 day technical fiesta of IIT(ISM) – “CONCETTO” is one of the largest Techno-management fest in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes, 
                    who stalk the grounds of ISM to prove their technical expertise. Encompassing the various boundaries of science and technology, Concetto is there with 45 events in all providing a platform to shoot the "TECHNICAL ME" of everyone. 
                    Apart from the various Robotics and Coding events, Concetto calls all you budding entrepreneurs to showcase your innovative business skills. Several departmental events of petroleum engineering, mining engineering and mechanical engineering are all lined up as well. 
                    At the same time, hone your skills by joining our workshops taken by the eminent personalities in the various fields of science.
                </p>
            </div> 
            <br/>
            
        </>
    )
}