
// import React, { Component } from 'react';
// import axios from 'axios';

// class Create extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: '',
//             password: '',
//             data:'',
//         };
//     }

//     handleInputChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         });
//     };

//     handleSubmit = e => {
//         e.preventDefault();

//         // console.log("happy")
//         const { username , password } = this.state;


//         const account = {
//             username,
//             password,
//         };

//         // console.log(account);

    

//         axios.post('http://localhost:5000/auth', account )
//             .then((res) =>{ 
//                             // this.data = res.data
//                             console.log(res.status);
//                             console.log(res.isLoggedin);
//                 if(res.isLoggedin){

//                     window.location.href = '/welcome ';
//                 }
                            
                            
//                         })
//             .catch(err => {
//                 console.error(err.status);  
//             },{
//                 withCredentials: true,
//                 headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
//             }});

//         this.setState({ name: '', email: '' })

//         document.forms['myform'].reset();


//     };

   

//     render() {
//         return (
//             <div>
//                 <br />
//                 <div className="container">

//                         <div className="login-form">
//                             <h1>Login Form</h1>
//                             <form onSubmit={this.handleSubmit} id="myform">
//                                 <input type="text" name="username" placeholder="Username" required onChange={this.handleInputChange}/>
//                                     <input type="password" name="password" placeholder="Password" required onChange={this.handleInputChange}/>
//                                         <input type="submit"/>
//                             </form>
//                         </div>
//                 </div>
//                 <h1>{this.data}</h1>
//             </div>
//         );
//     }
// }

// export default Create;












import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { toast } from "react-toastify";
import UserServices from "../services/UserServices";
import * as jwt from 'jsonwebtoken';



const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="email address"
            name="User Name"
            autoComplete="userName"
            autoFocus
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            onKeyPress={event => {
              if (event.key === 'Enter') {
            document.getElementById('save').click();
              }
          }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onKeyPress={event => {
              if (event.key === 'Enter') {
            document.getElementById('save').click();
              }
          }}
          />

          <Button
          id = "save"
            className={classes.submit}
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e) => {

              // console.log({userName}, {password})
              UserServices.login(userName, password)
                .then((data) => {
                  console.log(data);
                  window.location.href = "/dashboardB";

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
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an account? {"Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}
