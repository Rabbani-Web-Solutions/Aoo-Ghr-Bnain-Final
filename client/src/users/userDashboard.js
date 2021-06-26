import UserServices from "../services/UserServices";
import welcome from "../img/welcome.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import notAllowed from "../img/not_allowed.jpg"
import mySketch from "../img/mySketch.jpg"
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { toast } from "react-toastify";
import PasswordStrengthBar from 'react-password-strength-bar';
import Avatar from "@material-ui/core/Avatar";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AnimatedButton from '@bit/tabinda.react-button-animation.animated.button';
import {widthh , setWidthh} from '../sketch'
import {heightt , setHeightt} from '../sketch'
import setMyVar from '../sketch'
import totalLayer from '../sketch'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  let sketchData , setSketchData;

  export {sketchData, setSketchData};
 

export default function Welcome(){

    const classes = useStyles();

    const [password, setPassword] = React.useState("");

    const [myData, setMyData] = React.useState([]);

    [sketchData , setSketchData] = React.useState([]);

    return(
    
        <>
        
        {UserServices.isLoggedin
                            ? UserServices.getLoggedinfo().added_By === "admin" && (
                            

<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change Password
        </Typography>
        <p style={{color : 'blue'}}>
          As you were registered by admin, please change your password
        </p>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);

                  
                }}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                document.getElementById('save').click();
                  }
              }}
              />
            </Grid>
          </Grid>
                  <br></br>
          <PasswordStrengthBar password={password} />

          <Button
          id = "save"
            fullWidth
            className={classes.submit}
            variant="contained"
            color="primary"
            onClick={(e) => {
              UserServices.updatePass(UserServices.getLoggedinfo().email , password , "user")
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
                  window.location.href = "/login";
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
            }}
          >
Change Password          </Button>
          
        </form>
      </div>
      
    </Container>
                            
                        ) : ("")}
                        
                            {UserServices.isLoggedin ? UserServices.getLoggedinfo().added_By === "user" && (

                            <div className="container" style = {{margin : "5%"}}> 
                            <div className="row">
                              <div className="col-xs-12">

                              <AnimatedButton style = {{margin : "5%"}}
                              id = "getData"
                              label = "Get Data"
                               onClick={(e) => {
                                        UserServices.getSketch(UserServices.getLoggedinfo().id)
                                        .then((data) => {
                                          
                                        
                                          setMyData(data);

                                          
                                        toast.success("Your Data is being Loaded", { 
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
                                                }} >Get Data</AnimatedButton>

                                              
                                </div>

                                </div>
                                <div className="row" style={{margin : '3%'}}>
      { myData.map ( data =>
<>


      <div className="col-md-4">
      <Card className={classes.root} style = {{marginTop : "4%"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mySketch}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textTransform: "uppercase"}}>
          {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Select Appropriate option for your Sketch
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" 
          
          onClick={()=>{setSketchData(data)
                        alert("Now click on edit for view or editing purpose")}}>
            Ready                                
        </Button>

        <Button size="small" color="primary" 
          
          onClick={()=> {
            
            if(sketchData.id === undefined){
              alert("It is recommended to click on ready first")
            }
          else(
            alert("Redirecting ...")
            
          )}}
                    >
          
          <Link to="/sketch" style={{textDecoration: 'none' }} >                     
            Edit                                
               </Link>
          
        </Button>
        <Button size="small" color="primary"
        
        onClick={(e) => {
          var answer = window.confirm("Are you sure, You want to delete this sketch? ");
          if (!answer) {
            // Save it!
            console.log('Thing was saved to the database.');
          } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
          
          UserServices.delSketch(data.id)
          .then((res) => {
            
          toast.success("Successfully Deleted", { 
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
                  }}}
        >
          Delete
        </Button>
      </CardActions>
    </Card></div>


   </> )}
          </div>
        </div>
                            ): (
                            <div className="container"> 
                            <h1>Please Login first</h1> 
                            <img src={notAllowed} width="100%" height = "auto" style = {{ marginBottom : '10%'}}/>
                            </div>)}
        </>
    );
    
    }
    