import React , {Component} from "react";
import axios from "axios";

class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId : '',
            title : '',
            body : '',
            world : ''
        }
    }

    onClick = () => {
        axios.get("/world").then (response => {
            this.setState({ world : response.data })
            console.log(response.data)
    })
    }

    changeHandler = e => {
        this.setState({[e.target.name] : e.target.value} )
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        // axios.post()
    }

    render() {
        const { userId , title , body } = this.state
        return(
            <div>
                <form onSubmit = {this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>

                <button onClick={this.onClick}>Get World</button>
                <h1>{this.state.world}</h1>
            </div>
        )

    }
}

export default PostForm