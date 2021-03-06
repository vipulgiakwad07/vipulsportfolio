/*import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
   <div className="Myproject">
    <Card className='cardp' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={pimg}
        alt="Pizza Ordering App"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Pizza Ordering App
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This app allow users to order various types of Pizza amongst list and provide cash on                delivery and pay by card option using Stripe payment .This is full stack project build on       React Node Mongo and Express.
        </Typography>
      </CardContent>
      <CardActions>
      <ul>
        <li>
      <a href='https://bloggingappheroku.herokuapp.com' target="_blank">Visit Pizza WebApp</a></li>
      <li><a href='https://bloggingappheroku.herokuapp.com' target="_blank">Github Source Code</a></li>
      </ul>
      </CardActions>
    </Card>

<Card className='cardb' sx={{ maxWidth: 345 }}>
<CardMedia
  component="img"
  height="140"
  image={bimg}
  alt="Blogging App"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
  Blogging App
  </Typography>
  <Typography variant="body2" color="text.secondary">
  In which user share users thoughts about a particular subject with readers or publish online journal. Developed using React node mongo Express.
  </Typography>
</CardContent>
<CardActions>

<ul>
        <li>
      <a href='https://bloggingappheroku.herokuapp.com' target="_blank">Visit Blogging WebApp</a></li>
      <li><a href='https://bloggingappheroku.herokuapp.com' target="_blank">Github Source Code</a></li>
      </ul>
</CardActions>
</Card>

 <Card className='carde' sx={{ maxWidth: 345 }}>
 <CardMedia
   component="img"
   height="140"
   image={Eimg}
   alt="E-com app"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
   E-com App
   </Typography>
   <Typography variant="body2" color="text.secondary">
   A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Developed using React node mongo express.
   </Typography>
 </CardContent>
 <CardActions>
 <ul>
        <li>
      <a href='https://bloggingappheroku.herokuapp.com' target="_blank">Visit E-com WebApp</a></li>
      <li><a href='https://bloggingappheroku.herokuapp.com' target="_blank">Github Source Code</a></li>
      </ul> 
 </CardActions>
</Card>

 <Card className='cardpho' sx={{ maxWidth: 345 }}>
 <CardMedia
   component="img"
   height="140"
   image={phoimg}
   alt="Photos Sharing App"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
   Photos Sharing App
   </Typography>
   <Typography variant="body2" color="text.secondary">
   This app allow users to share their photos on web by uploading and let show to all friends and allow them to like ,user also follow and let other friends allow to follow user this app is developed using React Node Express and Mongo . 
   </Typography>
 </CardContent>
 <CardActions>
 <ul>
        <li>
      <a href='https://bloggingappheroku.herokuapp.com' target="_blank">Visit Photos Sharing WebApp</a></li>
      <li><a href='https://bloggingappheroku.herokuapp.com' target="_blank">Github Source Code</a></li>
      </ul>
 </CardActions>
</Card>
   </div>
  );

  
}
*/

import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody, CardLink } from 'reactstrap';
import pimg from '../images/pizza.png';
import bimg from '../images/blogging.png';
import phoimg from '../images/photo.png';
import Eimg from '../images/ecom.png';



const MediaCard = (props) => {
  return (
    /*<div className="Myproject">*/
    <CardDeck className="Myproject">
      <Card  className="cardp text-center">
       
        <CardImg top width="100%" height="51%" src={pimg} alt="Card image cap" />
        <CardBody className='text-center'>
          <CardTitle><h1>Order Pizza</h1></CardTitle>
          
          <CardText></CardText>
          {/* <ul>
        <li>
      <a href='https://bloggingappheroku.herokuapp.com' target="_blank">Visit Photos Sharing WebApp</a></li>
      <li><a href='https://bloggingappheroku.herokuapp.com' target="_blank">Github Source Code</a></li>
      </ul> */}

<div className='projectlinkbutton'>
      <Button variant="outlined"> <a href='https://pizzavapp.herokuapp.com' target="_blank">Live Project</a></Button>
          <Button variant="outlined"><a href='https://github.com/vipulgiakwad07/pizzavapp/tree/main/resources' target="_blank">Frontend</a></Button>
          <Button variant="outlined">  <a href='https://github.com/vipulgiakwad07/pizzavapp' target="_blank">Backend</a></Button>

           </div>

        </CardBody>
      </Card>
      <Card className='cardb'>
        <CardImg top width="100%" src={bimg} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Blogging App</h1></CardTitle>
           
          <CardText>
  
</CardText>
          {/* <ul>
        <li>
      <a href='https://bloggingappheroku.herokuapp.com' target="_blank">Visit Photos Sharing WebApp</a></li>
      <li><a href='https://bloggingappheroku.herokuapp.com' target="_blank">Github Source Code</a></li>
      </ul> */}
      <div className='projectlinkbutton'>
      <Button variant="outlined"> <a href='https://bloggingappheroku.herokuapp.com' target="_blank">Live Project</a></Button>
          <Button variant="outlined"><a href='https://github.com/vipulgiakwad07/blogging/tree/main/client' target="_blank">Frontend</a></Button>
          <Button variant="outlined">  <a href='https://github.com/vipulgiakwad07/blogging' target="_blank">Backend</a></Button>

           </div>
        </CardBody>
      </Card >
      <Card className='carde'>
        <CardImg top width="100%" src={Eimg} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>E-com App</h1></CardTitle>
          
          <CardText>
</CardText>
          {/* <ul>
        <li>
      <a href='https://bloggingappheroku.herokuapp.com' target="_blank">Visit Photos Sharing WebApp</a></li>
      <li><a href='https://bloggingappheroku.herokuapp.com' target="_blank">Github Source Code</a></li>
      </ul> */}

<div className='projectlinkbutton'>
      <Button variant="outlined"> <a href=' https://ecomercev.herokuapp.com/' target="_blank">Live Project</a></Button>
          <Button variant="outlined"><a href='https://github.com/vipulgiakwad07/ECOMERCEwebheroku/tree/main/client' target="_blank">Frontend</a></Button>
          <Button variant="outlined">  <a href='https://github.com/vipulgiakwad07/ECOMERCEwebheroku' target="_blank">Backend</a></Button>

           </div>
        </CardBody>
      </Card>
      <Card className='cardpho'>
        <CardImg top width="100%" src={phoimg} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Share Photos</h1></CardTitle>
      <CardText>
      
      </CardText>
      {/* <ul>
        <li>
      <a href='https://bloggingappheroku.herokuapp.com' target="_blank">Visit Photos Sharing WebApp</a></li>
      <li><a href='https://bloggingappheroku.herokuapp.com' target="_blank">Github Source Code</a></li>
      </ul> */}
     <div className='projectlinkbutton'>
      <Button variant="outlined"> <a href='https://photossharingapp.herokuapp.com/' target="_blank">Live Project</a></Button>
          <Button variant="outlined"><a href='https://github.com/vipulgiakwad07/photosharing/tree/main/client' target="_blank">Frontend</a></Button>
          <Button variant="outlined">  <a href='https://github.com/vipulgiakwad07/photosharing' target="_blank">Backend</a></Button>
                
           </div>
    </CardBody>
      </Card>
    </CardDeck>
    /* </div> */
  );
};

export default MediaCard;
