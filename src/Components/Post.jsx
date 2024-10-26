import { 
    Button, 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia, 
    styled, 
    Typography 
  } from "@mui/material";
  import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
  
  const PostCard = styled(Card)({
    marginBottom: "20px",
    "@media (min-width: 600px)": {
      marginLeft: "20px",
    },
  });
  
  const PostMedia = styled(CardMedia)({
    height: 250,
    "@media (min-width: 600px)": {
      height: 250,
    },
    "@media (max-width: 600px)": {
      height: 150,
    },
  });
  
  const Post = ({ img, title }) => {
    return (
      <PostCard>
        <CardActionArea>
          <PostMedia 
            component="img"
            image={img} 
            alt="My Post" 
          />
          <CardContent>
            <Typography 
              gutterBottom 
              variant="h5" 
              component="div"
            >
              {title}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam
                corporis accusamus maiores modi expedita asperiores libero voluptatum
                nam itaque unde,quia fuga hic reiciendis rem, voluptatem magni 
                numquam consequatur?
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button 
            size="small" 
            variant="text" 
          >
            Share
          </Button>
          <Button 
            size="small" 
            variant="text" 
            color="primary"
          >
            Learn More 
            <DoubleArrowIcon/>
          </Button>
        </CardActions>
      </PostCard>
    );
  };
  
  export default Post;
  