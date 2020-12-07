import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

export default function JobBoard({job}){
    const jobArray = job;
    const classes = useStyles()
    const dot = <span className={classes.bullet}>•</span>

    // var comapnyLogo = {jobArray.company_logo}
   
    return(
        <div className={classes.gridRoot}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card className={classes.root} >
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
                </Grid>
            </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    gridRoot: {
        flexGrow: 1
    },
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
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }

  })
);
