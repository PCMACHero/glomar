import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

    const useStyles = makeStyles({
        root: {
          width: '90%',
          maxWidth: 500,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column"
        },
      });
      
      export default function Types() {
        const classes = useStyles();
        const col = "primary"
        const style = {
            color:"white",
            marginBottom:"50px",
            paddingBottom:"50px",
            borderBottom:"1px solid white"
            
        }
      
        return (
            <div className="center homepage">
                <div className="margin"></div>
                <div className={classes.root}>
            
            <Typography variant="h4" gutterBottom color={col}>
            STRONGER
            </Typography>
            
            <Typography variant="body1" gutterBottom style={style}>
            GLOMAR BATS have the resilience necessary for serving professional players worldwide. Maintaining proper moisture and density levels, high quality wood grain, and state-of-the-art engineering standards help make their bats some of the best in the business.
            </Typography>

            <Typography variant="h4" gutterBottom color={col}>
            HAND CRAFTED
            </Typography>
            
            <Typography variant="body1" gutterBottom style={style}>
            Each bat is hand-crafted and machined from start to finish- The bats are made from maple wood from the northeastern hardwood forests of the United States.            </Typography>





            <Typography variant="h4" gutterBottom color={col}>
            EXPERTISE
            </Typography>
            
            <Typography variant="body1" gutterBottom style={style}>
            The company is owned and operated by skilled craftsmen who know what it takes to make a bat worthy of the professionals. With decades of experience under their belt, it’s no wonder they’re quickly becoming one of the preferred bats among players at the top of their game.            </Typography>




            <Typography variant="h4" gutterBottom color={col}>
            QUALITY
            </Typography>
            
            <Typography variant="body1" gutterBottom style={style}>
            Each finished bat is examined for quality assurance and top-notch craftsmanship. There isn’t a bat that goes out without being in the hands of one of their professional engineers.

</Typography>





            <Typography variant="h4" gutterBottom color={col}>
            REFINED
            </Typography>
            
            <Typography variant="body1" gutterBottom style={style}>
            Whether you’re looking for a personalized bat to display as a gift, or a serious piece of lumber for the field, GLOMAR BATS can do the job. They have a variety of custom finishes and designs to personalize your bat as you see fit All in all, you’re getting a bat that’s ready for the trophy case or the diamond – you decide!            
            </Typography>


            <Typography variant="h4" gutterBottom color={col}>
            COMPETITIVE PRICING
            </Typography>
            
            <Typography variant="body1" gutterBottom style={style}>
            GLOMAR BATS are at or below competitor’s pricing.            </Typography>



            <Typography variant="h4" gutterBottom color={col}>
            CUSTOMER SERVICE            </Typography>
            
            <Typography variant="body1" gutterBottom style={style}>
            They are willing to help educate and inform. Ask them about wood grain, the right way to hold the bat, etc. For example, they’ll let you know that when using the bat, be sure to hold the bat in your hand with the logo either directly facing you or directly facing away from you. This will assure you that the ball will make contact with the best part of the bat, the area where the grain of the wood is most even and straight.*            </Typography>



            
          </div>

            </div>
          
        );
      }
      