import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import Grid from '@material-ui/core/Grid'

const Dashboard = () => {
  return (
    <div classname="music_cards">
      <Card>
        <CardMedia style={{ height: 0, paddingTop: "56.25%" }} />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            <Typography component="p">Here is a music card</Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" target="_blank"></Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default Dashboard;
