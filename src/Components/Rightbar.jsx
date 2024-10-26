import React from 'react';
import {
     Avatar,
      AvatarGroup,
       Container, 
       Divider, 
       ImageList,
        ImageListItem,
         Link,
         Typography 
        } from '@mui/material';
const styles= {
  resImg:{
    
    "@media (max-width: 900px)": {
      display:"none",
    },
  }
  

}        

const Rightbar = () => {
  return (
    <Container>
      <Typography  sx={{paddingTop: "90px"}} gutterBottom>
         Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 10 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShY1PfL7FzOjw7QU04gjVhBUcRdOpGRzCMfw&s"
        />
        <Avatar
          sx={styles.resImg}
          alt="Travis Howard"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShY1PfL7FzOjw7QU04gjVhBUcRdOpGRzCMfw&s"
        />
        <Avatar
          sx={styles.resImg}
          alt="Cindy Baker"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_ZRBH7vsZYz63syoRCIkgwpUErRzLJkjFw&s"
        />
         <Avatar alt="Agnes Walker" src="" sx={styles.resImg}/>
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/8.jpg"
        />
        </AvatarGroup>
        <Typography  gutterBottom>
           Gallery
        </Typography>
        <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            alt=""
      
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/burgers.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/camera.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/morning.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/hats.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/vegetables.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography   gutterBottom>
        Categories
      </Typography>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Link href="#" variant="body2" style={{ marginRight: 10 }}>Sport</Link>
        <Link href="#" variant="body2" style={{ marginRight: 10 }}>Food</Link>
        <Link href="#" variant="body2" style={{ marginRight: 10 }}>Music</Link>
        <Divider flexItem style={{ marginBottom: 5, width: '100%', maxWidth: '100%' }} />
        <Link href="#" variant="body2" style={{ marginRight: 10 }}>Movies</Link>
        <Link href="#" variant="body2" style={{ marginRight: 10 }}>Science</Link>
        <Link href="#" variant="body2" style={{ marginRight: 10 }}>Life</Link>
      </div>

     </Container>
  )
}

export default Rightbar
