import GenericServices from "./GenericServices";
import jwt_decode from "jwt-decode";
class userServices extends GenericServices {



  login = (userName, password) =>

    new Promise((resolve, reject) => {

      console.log(userName , password);

      this.post("http://localhost:5000/auth", { userName, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
         
        })
        .catch((err) => {
          reject(err);
        });
    });

  register = (username, email, password , role , amount, ids) =>
    new Promise((resolve, reject) => {


      console.log(amount)
      console.log(ids)


      this.post("http://localhost:5000/register", { username, email, password , role , amount, ids })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });

    handleToken = (token) =>
    new Promise((resolve, reject) => {


      console.log(token)

      this.post("http://localhost:5000/mycheckout", { token })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });

    contact = (username, email, query) =>
    new Promise((resolve, reject) => {


      console.log(username)

      this.post("http://localhost:5000/contact", { username, email, query })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });

    save = (name , elements ,width , height, totalLayer , id) =>
    new Promise((resolve, reject) => {

      var data = JSON.stringify(elements);

      console.log(width)

      console.log(height)

      this.post("http://localhost:5000/save", { name , data ,width , height,totalLayer, id })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });

    change = (sub , role) =>
    new Promise((resolve, reject) => {

      console.log(role)

      this.post("http://localhost:5000/change", { sub , role })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });

    updatePass = (email, password, role) =>
    new Promise((resolve, reject) => {

      console.log(email)

      this.post("http://localhost:5000/updatePass", { email, password , role })
        .then((res) => {
          resolve(res);
        })  
        .catch((err) => {
          reject(err);
        });
    });

    

    getSketch = (id) =>
    new Promise((resolve, reject) => {

      console.log(id)

      this.post("http://localhost:5000/getSketch", { id })
        .then((res) => {
          resolve(res);
        
          
        })  
        .catch((err) => {
          reject(err);
        });
    });

    delSketch = (id) =>
    new Promise((resolve, reject) => {

      console.log(id)

      this.post("http://localhost:5000/delSketch", { id })
        .then((res) => {
          resolve(res);
        
          
        })  
        .catch((err) => {
          reject(err);
        });
    });

    isLoggedin = localStorage.getItem("token") ? true : false;

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token2");
    window.location.href = "/";
  };

  getLoggedinfo = () => {
    try {
      let jwt = localStorage.getItem("token");
      var decode = jwt_decode(jwt);
      return decode;
    } catch (error) {
      console.log("error");
    }
  };

  
  isAdmin = () => {
    if (this.isLoggedIn) {
      if (this.getLoggedinfo().role === "admin") return true;
      else return false;
    } else return false;
  };
}

let UserServices = new userServices();
export default UserServices;
