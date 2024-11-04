import * as React from 'react';
import '../styles/home.css';
import { Icon } from '@iconify/react';
import { Button, Typography } from '@mui/material';

export default function HomePage() {
  
  return (
    <>
    <div className='home-container'>
        <div className='intro-div'>
          <Icon icon="noto:waving-hand" style={{ width: 52, height: 56, transform: 'translate(-5px, 15px)'}} />
          <span className='delius-regular size-20'>Hello, I'm</span>
          <Typography style={{fontFamily: 'DynaPuff', fontSize: 40}}>
            Truc Nguyen
            <Icon icon="noto:cat-face" style={{ width: 50, height: 48, transform: 'translate(5px, 10px)' }} />
          </Typography>
          <Typography style={{fontFamily: 'Delius', fontSize: 20}}>
            Full Stack Software Developer
          </Typography>
          <Typography style={{fontFamily: 'Delius', fontSize: 17, marginTop: '20px', marginBottom: '20px'}}>
            With expertise in both front-end and back-end technologies, I bring ideas to life through innovative solutions and a commitment to quality.
          </Typography>
          <Button style={{fontFamily: 'Delius', fontSize: 20}}><a href='https://www.google.com' style={{color: 'black'}}>Contact Me</a></Button>
        </div>

        <div style={{marginRight: '200px'}}>
          <img src={require('../assets/for-homepage.PNG')} alt="HomepageImg" height={704} width={704} />
        </div>

      </div>
      
    </>
  );
}