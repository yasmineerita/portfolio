import * as React from 'react';
import '../styles/home.css'
import { Icon } from '@iconify/react';
import { Button, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <>
    <div>
    <Icon icon="noto:waving-hand" style={{width: 52, height: 56}}/>
    <span>Hello, I'm</span>
    <Typography>
      Truc Nguyen
      <Icon icon="noto:cat-face" style={{width: 50, height: 48}}/>
    </Typography>
    <Typography>
      Full Stack Software Developer
    </Typography>
    <Typography>
    With expertise in both front-end and back-end technologies, I bring ideas to life through innovative solutions and a commitment to quality.
    </Typography>

    <Button>Contact Me</Button>

    </div>
    </>
  );
}