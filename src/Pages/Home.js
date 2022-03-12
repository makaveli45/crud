import React, {Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }
    
    render() { 
        return (  
            <Fragment>
                <div>

<h1>This is a simple CRUD with REDUX version 1.01 of RICHARD's CRUD EXAMPLE</h1>
<h2>Next Releases will contain;</h2>
<p>Multiple user roles where only users with special permission can execute a funtion or use a particular component</p>
<p>More Styling and functionalities will be added</p>
<Link to="/create">MAIN APP</Link>
                </div>
            </Fragment>
        );
    }
}
 
export default Home;