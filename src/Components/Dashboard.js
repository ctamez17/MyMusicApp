import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputSlider from "./Slider";
import Switch from "./Switch";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const classes = useStyles;

class Dashboard extends Component {
  state = {
    slider: false,
  };

  // handleKids = (x) => {
  //   const k = Object.keys(x)[0];
  //   const newState = {};
  //   newState[k] = x[k];
  //   this.setState(newState);
  // };

  render() {
    return (
      <div>
        <h1 classname="welcome">Welcome User!</h1>
        <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <InputSlider />
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Switch />
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <InputSlider />
              <Switch /> */}
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default Dashboard;
