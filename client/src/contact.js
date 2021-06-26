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
import UserServices from "./services/UserServices";
import avatar from "./img/contactAvatar.jpg"



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
  const [query, setQuery] = React.useState("");
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={avatar} width="100%" height = "auto"/>
        </Avatar>
        <Typography component="h1" variant="h5">
          We Want To Listen From You
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
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                  document.getElementById('save').click();
                    }
                }}
                variant="outlined"
                required
                fullWidth
                fullHeight
                name="query"
                label="Query"
                type="query"
                id="query"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);

                  
                }}
              />
            </Grid>
          </Grid>
          <Button
          
          id = "save"
            fullWidth
            className={classes.submit}
            variant="contained"
            color="primary"
            onClick={(e) => {
              UserServices.contact(name, email, query)
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

                setName(""); setEmail(""); setQuery("");
            }}
          >
            Submit
          </Button>
          <Grid container justify="flex-end">
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}
