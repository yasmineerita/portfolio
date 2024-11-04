import { Button, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import '../styles/portfolio.css';
import projectsData from '../assets/data/projects.json';
import { Icon } from '@iconify/react';

export default function PortfolioPage() {
  return (
    <>
      <div className='portfolio-title'>
        <div style={{ fontFamily: 'DynaPuff', fontSize: 40 }}>Portfolio</div>
        <div className='portfolio-img'>
          <img src={require('../assets/for-portfoliopage.jpg')} alt="PortfolioPageImg" height={90} width={80} />
        </div>
      </div>

      <div className='portfolio-container'>
        {projectsData.projects.map((project, index) => {
          return (
            <div key={index}>
              <Card className='card-style' sx={{ width: '350px', borderRadius: '20px', border: '1px black solid' }}>
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <Typography sx={{ fontFamily: 'DynaPuff', fontSize: 20, textAlign: 'center' }}>
                    {project.name}

                  </Typography>
                </div>

                <Divider sx={{ borderBottomWidth: '1px', bgcolor: 'black' }} />
                <CardContent sx={{ fontSize: 20 }}>
                  {project.details.map((detail, detailIndex) => {
                    return (
                      <div key={detailIndex} style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <div>
                          <Icon icon="tabler:point-filled" style={{ width: 30, height: 50, transform: 'translate(-5px, -10px)' }} />
                        </div>
                        <Typography style={{ fontFamily: 'DynaPuff', fontSize: 20 }}>{detail}</Typography>
                      </div>
                    );
                  })}
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                      <Icon icon="tabler:point-filled" style={{ width: 30, height: 50, transform: 'translate(-5px, -10px)' }} />
                    </div>
                    <Typography style={{ fontFamily: 'DynaPuff', fontSize: 20 }}>{project.language}, {project.framework}</Typography>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'end', marginTop: '20px'}}>
                  <Button style={{fontFamily: 'Delius', fontSize: 20}}>Explore
                  <Icon icon="typcn:arrow-right-outline" style={{ width: 30, height: 30, transform: 'translate(5px, 0px)' }} />
                  </Button>
                  </div>
                  
                </CardContent>
              </Card>
            </div>
          );
        })}

      </div>

    </>
  );
}