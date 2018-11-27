import React, { Component } from 'react';
import {Form, 
  Header,  
  List, 
  Input, 
  Segment } from 'semantic-ui-react';
  import { Link } from 'react-router-dom';
  import axios from 'axios'




class Todo extends Component {
  state = { name: '', todos: [] }

  handleSubmit = e => {
    // add axios to save to DB
    e.preventDefault();
    const { name, todos } = this.state;
    this.setState({ todos: [name, ...todos], name: '' })
  }

  render() {
    const { name, todos} = this.state;
    
    return (
      <div className="todo_Page" >
  
        
          <Header as="h3" textAlign="center">Charlie's Current Projects</Header>
         
          <Form onSubmit={this.handleSubmit}>
            <Input 
              label="Add Item"
              required
              value={name}
              placeholder="IE: Touch a girls boobs"
              onChange={ e => this.setState({name: e.target.value }) }
              />
          </Form>
         <Segment inverted>>
           <List divided inverted relaxed>
             <List.Content>
               <List.Header className="todo_list">
                   { todos.map( (t,i) => <List.Header Key={i}> {t} </List.Header>)}
               </List.Header>
            </List.Content> 
           </List>
         </Segment>
     
        <div className="finished_Projects">
        <Segment inverted>
    <List divided inverted relaxed>
      <List.Item>
        <List.Content>
          <List.Header>
            <Link to="/Songlist"> 
               Spotify API 
            </Link> 
           </List.Header>
          These are the songs I listen to the most. updated automatically Via Spotify's API.
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
          <Link to="/FileUpload"> 
               API send friendly friday Message out 
            </Link> 
          </List.Header>
          Collects a phone number then delivers a friday song. 
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
          <Link to="/family"> 
               Family
            </Link> 
          </List.Header>
          Found myself a cute little family
        </List.Content>
      </List.Item>
    </List>
  </Segment>
        
        </div>
      
      </div>
    );
  }
}



export default Todo;

