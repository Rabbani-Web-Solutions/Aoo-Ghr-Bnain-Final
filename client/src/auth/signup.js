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
import PasswordStrengthBar from 'react-password-strength-bar';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js"

import PaymentForm from "../components/PaymentForm"

let ids, setId;

export {ids , setId};

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




const PUBLIC_KEY = "pk_test_51IorIIJmpNZTNdrVSyS2DzXf6i1NSsowyVHM90rIurlyXK9SXfLKq8rMb4ppoc0zPhcnLff6kUKuOXB90Uy9FyG100kml35YcH"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function SignUp() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  [ids, setId] = React.useState(null)





  const [token , setToken] = React.useState(false);

  
  
  
 





  function handleToken(token, addresses) {

      toast.error("This Function will work properly on online server", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
          });


      setToken(true)

    new Promise((resolve, reject) => {

      console.log(token)

    axios.post(
      "https://localhost:5000/mycheckout",
      { token }
    ).then((res)=>{
      resolve(res)
    })
    .catch((err)=>{
      reject(err)
    });
  });



    // this.post("http://localhost:5000/register", { username, email, password , role})
    //     .then((res) => {
    //       resolve(res);
    //     })  
    //     .catch((err) => {
    //       reject(err);
    //     });

    // console.log(handleToken)



    // const { status } = response.data;
    // console.log("Response:", response.data);
    // if (status === "success") {
    //   toast("Success! Check email for details", { type: "success" });
    // } else {
    //   toast("Something went wrong", { type: "error" });
    // }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Full Name"
                autoFocus
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                document.getElementById('save').click();
                  }
              }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                document.getElementById('save').click();
                  }
              }}
              />
            </Grid>
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
<Grid>


  <Elements stripe = {stripeTestPromise}>
    
              <PaymentForm/>
  </Elements>
  

</Grid>
          

        {ids == null ? ( 
        
        <Button
            disabled
          id = "save"
            fullWidth
            className={classes.submit}
            variant="contained"
            color="primary"
            onClick={(e) => {
              UserServices.register(name, email, password , "user")
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
            Sign Up
          </Button>) : ( 
          
          <Button
          
          id = "save"
            fullWidth
            className={classes.submit}
            variant="contained"
            color="primary"
            onClick={(e) => {
              UserServices.register(name, email, password , "user" , 100, ids)
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
            Sign Up
          </Button>) }

          {/* <Button
          
          id = "save"
            fullWidth
            className={classes.submit}
            variant="contained"
            color="primary"
            onClick={(e) => {

                UserServices.register(name, email, password , "user")
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
            Sign Up
          </Button> */}
        <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
  
    </Container>
  );
}
