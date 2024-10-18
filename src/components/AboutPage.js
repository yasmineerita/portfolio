import { Typography, Button } from "@mui/material";
import { Icon } from '@iconify/react';
import '../styles/about.css';
import '../styles/font.css';


export default function AboutPage() {
  return (
    <>
    <div className="about-container">

   
      <div className="aboutme-div">
        <Typography className="dynapuff size-40 aboutme-title">
          about me
          <Icon icon="noto:cat-face" style={{ width: 50, height: 48, transform: 'translate(10px, 10px)' }} />
        </Typography>

        <Typography className="dynapuff size-20 aboutme-detail">
          <Icon icon="lsicon:location-filled" className="icon-style" />
          Based in Seattle, WA
        </Typography>

        <Typography className="dynapuff size-20 aboutme-detail">
          <Icon icon="tdesign:education" className="icon-style" />
          Graduated with a degree in Computer Science from the University of Washington (Seattle)
        </Typography>

        <Typography className="dynapuff size-20 aboutme-detail">
          <Icon icon="tabler:code" className="icon-style" />
          React, Angular, Swift, Java, C/C++, Typescript, Javascript, Python, mySQL, NodeJS
        </Typography>

        <Typography className="dynapuff size-20 aboutme-detail">
          <Icon icon="solar:chat-round-like-linear" className="icon-style" />
          Traveling, Baking, Yoga, Photography
        </Typography>

        <Typography className="dynapuff size-20 aboutme-detail">
          <Icon icon="icomoon-free:point-right" className="icon-style" />
          Current Project:
          <Button className='btn delius-regular' style={{marginLeft: "20px"}}>Chatbot AI</Button>
        </Typography>

        

      </div>
      <div className="aboutme-img-div">
          <img src={require('../assets/for-aboutpage.jpg')} alt="AboutpageImg" height={450} width={350} />
        </div>
        </div>
    </>
  );
}