import UserServices from "../services/UserServices";
import welcome from "../img/welcome.jpg"
import add from "../img/add_user.png"
import change from "../img/change.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import notAllowed from "../img/not_allowed.jpg"
import onlyAdmins from "../img/only_admins.jpg"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
export default function Dashboard() {

    const classes = useStyles();
    
    const [sub, setSub] = React.useState("");

    return (
        <>
         {UserServices.isLoggedin
                            ? UserServices.getLoggedinfo().role === "admin" && (
                            
                                <div className="container" style={{marginTop:"10%" , marginBottom:"10%"}}>

<div className="row">
    {/* <div className="col-md-6">
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Change Subscription Charges"
          height="140"
          image={change}
          title="Change Subscription Charges"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Change Subscription Charges
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The Admins can change Subscription Charges on their own will

            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="sub"
            label="Subscription Charges"
            name="sub"
            autoComplete="sub"
            autoFocus
            value={sub}
            onChange={(e) => {
              setSub(e.target.value);
            }}
            onKeyPress={event => {
              if (event.key === 'Enter') {
            document.getElementById('change').click();
              }
          }}
          />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary"  id = "change"
            
            onClick={(e) => {

                // console.log({userName}, {password})
                UserServices.change( sub , UserServices.getLoggedinfo().role)
                  .then((data) => {
                    console.log(data);
                    toast.success(data, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    
                  })
                  .catch((err) => {
                    toast.error(err.response.data, {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  });
              }}>
       Change Subscription Charges
        </Button>
      </CardActions>
    </Card>
</div> */}
<div className="col-md-12">

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Add User"
          height="160"
          image={add}
          title="Add user"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Add User
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The Admins can add user without subsciption charges
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      <Link to="/addByAdmin" style={{textDecoration: 'none' }} >
        <Button size="small" color="primary">
       Add User
        </Button>
        </Link>
                 
                         
      </CardActions>
    </Card>
    </div>
</div>
                            </div>
                            
                        )
                            : " "}
                            {UserServices.isLoggedin ? UserServices.getLoggedinfo().role === "user" && (
                               
                               <div className="container">
                               <h1>Only Admins</h1>
                                <img src={onlyAdmins} width="100%" height = "auto" style ={{marginBottom : '10%'}}/>
                                </div>
                            ) : (
                            <div className="container"> 
                            <h1>Please login first</h1>
                            <img src={notAllowed} width="100%" height = "auto" style = {{ marginBottom : '10%'}}/>
                            </div>
                            )}
        </>
    )
}