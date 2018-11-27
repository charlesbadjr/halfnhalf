import React, { Component } from 'react';



class Songlist extends Component {
  state = { band: '', Song: '' };



render(){
    return(
      <div  className="songs">
      <h1> What Im Listening to: </h1>
      <ul className="song_List" >
       <li> {this.state.data} </li>

      </ul>
      </div>
    );
}

}

export default Songlist; 