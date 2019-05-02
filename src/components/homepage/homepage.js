import React from 'react'
import Nav from '../navbar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShopIcon from '@material-ui/icons/Shop';
import './homepage.css'
import MediaCard from '../card'


export default class HomePage extends React.Component{
   
    render(){
        return (
            <React.Fragment>
                
            <div class="homepage-start">
                <Typography component="h2" variant="h1" color="inherit" gutterBottom>
                    GLOMAR PRO BATS
                </Typography>
                <Typography variant="h4" color="secondary" gutterBottom>
                    Made in the USA
                </Typography>
            </div>
            <div className="card-container">
                <MediaCard image="/images/bat1.jpg" p="Bats for all ages and levels."/>
                <MediaCard image="/images/bat2.jpg" p="Bats for all ages and levels."/>
            </div>
            
            <Button variant="contained" color="secondary" className={styles.button}>
                Shop
                <ShopIcon className={styles.rightIcon} />
          </Button>
          </React.Fragment>
        )
    }
}

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    iconSmall: {
      fontSize: 20,
    },
  });