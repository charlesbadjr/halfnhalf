import React, { Component } from 'react';
import { Form, Header, Button} from "semantic-ui-react";
import axios from 'axios';


class TCN extends Component {
 state = { dial_phone }

// need to hide tcn credentials

// Bring in file from UploadFile.js 


componentDidMount(){
    axios.post(`https:api.tcnp3.com&&userName=${TCNuserName}&&password=${TCNpassword}`)
    .then(res => {
        const tcnRes = res.data;
        this.setState({ tcnRes });
    })
}

render() {
    return (
        <ul>
            { this.state.tcnRes.map(person => 
                <li>{person.name}</li>
                )
            }  
        </ul>
    );
    }
}

export default TCN;