import { Typography, Button } from "@mui/material";
import { Icon } from '@iconify/react';
import '../styles/about.css';


export default function AboutPage() {
  return (
    <>
    <div className="about-container">

   
      <div className="aboutme-div">
        <Typography style={{fontFamily: 'DynaPuff', fontSize: 40, marginBottom: '40px'}}>
          about me
          <Icon icon="noto:cat-face" style={{ width: 50, height: 48, transform: 'translate(10px, 10px)' }} />
        </Typography>

        <Typography style={{fontFamily: 'DynaPuff', fontSize: 20, marginBottom: '15px'}}>
          <Icon icon="lsicon:location-filled" className="icon-style" />
          Based in Seattle, WA
        </Typography>

        <Typography style={{fontFamily: 'DynaPuff', fontSize: 20, marginBottom: '15px'}}>
          <Icon icon="tdesign:education" className="icon-style" />
          Graduated with a degree in Computer Science from the University of Washington (Seattle)
        </Typography>

        <Typography style={{fontFamily: 'DynaPuff', fontSize: 20, marginBottom: '15px'}}>
          <Icon icon="tabler:code" className="icon-style" />
          React, Angular, Java, Typescript, Javascript, Swift, C/C++, Python, mySQL, NodeJS
        </Typography>

        <Typography style={{fontFamily: 'DynaPuff', fontSize: 20, marginBottom: '15px'}}>
          <Icon icon="solar:chat-round-like-linear" className="icon-style" />
          Traveling, Baking, Yoga, Photography
        </Typography>

        <Typography style={{fontFamily: 'DynaPuff', fontSize: 20, marginBottom: '15px'}}>
          <Icon icon="icomoon-free:point-right" className="icon-style" />
          Current Project:
          <Button style={{fontFamily: 'Delius', fontSize: 20, marginLeft: "20px"}}>Chatbot AI</Button>
        </Typography>

        

      </div>
      <div className="aboutme-img-div">
          <img src={require('../assets/for-aboutpage.jpg')} alt="AboutpageImg" height={450} width={350} />
        </div>
        </div>
    </>
  );
}