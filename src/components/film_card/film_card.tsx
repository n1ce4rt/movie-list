import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';
import { fetchFilm } from '../reducers/films_slice';


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
  const dispatch = useAppDispatch();
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
      sx={{ maxWidth: '270px', margin: '0 auto', cursor: 'pointer' }}
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
      <CardContent sx={{minHeight: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'center'}}>
        <Typography gutterBottom variant="caption" component="div">
          {year}
        </Typography>
        <Typography gutterBottom variant="h6" component="div"
          sx={{cursor: title.length > 42 ? 'pointer' : ''}}
          onClick={() => setFullTitle(!fullTitle)}
        >
          {fullTitle ? title: title.length >= 42 ? title.slice(0,42) + '...': title}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          {genres.slice(0,4).join(', ')}
        </Typography>
      </CardContent>
      {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
   
  );
};