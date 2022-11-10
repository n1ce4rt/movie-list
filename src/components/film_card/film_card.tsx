import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, Stack} from '@mui/material'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export interface filmType {
  id: number,
  img: string,
  alt: string,
  title: string,
  description: string,
  year: number,
  genres: string[]

}

export const FilmCard :React.FC<filmType> =({ id, img, alt, title, year, genres }) => {
  const navigate = useNavigate();
  const [imgLoad, setImgLoad] = useState(true);
  const [imgError, setImgError] = useState(false);
  const [fullTitle, setFullTitle] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload =() => {
      setImgLoad(false);
    };
    image.onerror = () =>{ 
      setImgError(true);
    };
  },[img]);

  function isImgLoad  () {
    if (imgError) {
      return'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
    }
    if (imgLoad) {
      return 'https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000';
    }
    return img;
  }

  return (
    <Card 
      sx={{ maxWidth: '270px', margin: '0 auto', cursor: 'pointer'}}
      onClick={() => {
        navigate(`/film/${id}`);
      }}
    >
      <CardMedia
        component="img"
        height={'auto'}
        image={isImgLoad()}
        alt={alt}
      />
      <CardContent sx={{height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center', padding: '0px'}}>
        <Typography gutterBottom variant="subtitle1" component="div">
          {year}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          {genres?.slice(0,4).join(', ')}
        </Typography>

      </CardContent>
    </Card>
   
  );
};