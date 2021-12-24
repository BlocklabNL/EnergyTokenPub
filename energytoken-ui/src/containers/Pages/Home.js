import React from 'react';
import { Link } from "react-router-dom";
import bllogo from '../../images/bllogo.png';
import catena from '../../images/catena.png';
import ttokens from '../../images/2tokens.png';
import ibm from '../../images/ibm.png';
import sunified from '../../images/sunified.png';
import '../../App.css';

export default function Home() {
  return (
    <div>
      <h1 style={{margin: "20px", textAlign: "center", borderTop: "solid 5px", paddingTop: "15px"}}>
        EnergyToken
      </h1>
      <h2 style={{margin: "20px", textAlign: "center", borderBottom: "solid 5px", paddingBottom: "20px"}}>
        An investment platform for tokenised energy assets
      </h2>
      <nav style={{textAlign: "center"}}>
        <Link className='link2' to="/investor">Investor</Link> |{"    "}
        <Link className='link2' to="/plowner">Platform Owner</Link>
      </nav>
      <center><img src={catena} alt="bllogo" width="360" height="110" style={{padding: "1px"}}></img></center>
      <center><img src={bllogo} alt="bllogo" width="360" height="130"></img></center>
      <center><img src={ttokens} alt="bllogo" width="340" height="80" style={{padding: "6px"}}></img></center>
      <center><img src={ibm} alt="bllogo" width="350" height="150" style={{padding: "5px"}}></img></center>
      <center><img src={sunified} alt="bllogo" width="340" height="180" style={{padding: "5px"}}></img></center>

    </div>
    
  );
}
