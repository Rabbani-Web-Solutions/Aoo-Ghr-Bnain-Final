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
import notAllowed from "../img/not_allowed.jpg"
import onlyAdmins from "../img/only_admins.jpg"

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

export default function SignUp() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
    {UserServices.isLoggedin
                       ? UserServices.getLoggedinfo().role === "admin" && (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Create Account
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

          <Button
          id = "save"
            fullWidth
            className={classes.submit}
            variant="contained"
            color="primary"
            onClick={(e) => {
              UserServices.register(name, email, password , "admin")
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
            Create Account
          </Button>
          
        </form>
      </div>
      
    </Container>

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
  );
}
