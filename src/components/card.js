import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: "100vw",
    width: '100vw',
    height: 500,
    backgroundColor: "#EF0046",
    color:'white'
    // margin: "10px",
    
  },
  media: {
    height: 400,
    color:'white'
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card  className={classes.card}>
      <CardActionArea>
        <CardMedia
          color="primary"
          className={classes.media}
          image={props.image}
          title={props.imageTitle}
        />
        <CardContent >
          <Typography style={{color:"white"}} gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography style={{color:"white"}} component="p">
            {props.p}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);