import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from './config/config'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Heart from 'react-animated-heart';


const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = config.API_KEY;

function App() {
  const [data, setData] = useState(null);
  const [isClick, setClick] = useState(false);


  useEffect(() => {
    axios.get(`${url}${api_key}`)
      .then((response) => {
        setData(response.data);
      });
  }, []);

  if (!data) return null;
  return (

    <Card sx={{ maxWidth: 450 }}>
      <React.Fragment>
        <CardMedia
          component="img"
          height="190"
          src={data.url}
        />
          <CardContent>
            <Typography variant='h5'>
              {data.title}
            </Typography>
            <Typography variant='caption'>
              {data.date}
            </Typography>
            <Typography>
              {data.explanation}
            </Typography>
            <Heart 
              isClick={isClick}
              onClick={() => setClick(!isClick)} 
            />
        </CardContent>
      </React.Fragment>
    </Card>
  );
}

export default App;

