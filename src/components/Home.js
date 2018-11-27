import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Charlie_face from './Styles/Charlie_face.jpg';


// link to from react router dom. Give skydive video.

class Home extends Component {
 

  render() {

    return (
      <div className="homeScreen"> 
        <div className="Name_pic">
          
            <h2> Charlie Jergins </h2>

        </div> 
        <Image src={Charlie_face} className="Face" alt="My ugly mug"/>
        <div className="likebox">
        <h2 text-align="center"> Things I Enjoy: </h2>
          <ul className="likeList" > 
             <li> JavaScript </li>
             <li> React Apps </li>
             <li> API's </li> 
             <li> SkyDiving </li>
             <li> Utah Snow </li>
          </ul>  
        </div>
      </div>
    );
  }
}

export default Home;