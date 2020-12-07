import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

export default function JobBoard({job}){
    const jobArray = job;
    const classes = useStyles()
    const dot = <span className={classes.bullet}>•</span>

    // var comapnyLogo = {jobArray.company_logo}
   
    return(
        <Card className={classes.root} >
            {/* <CardHeader avatar={
                // <Avatar />
                <CardMedia image={jobArray.company_logo} />
            } /> */}
            <CardContent>
                <Typography variant="h3" component="h4">
                    {jobArray.company}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {jobArray.title}
                    {jobArray.location} {dot} {jobArray.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={jobArray.url}>Read More...</Button>
            </CardActions>
        </Card>
    );
}

const useStyles = makeStyles({
    root: {
      flex: 1, 
      justifyContent: "centre",
      minWidth: 75,
      margin: '20px 10px 20px 10px'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      body : '#5865E0',
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    }

  });
