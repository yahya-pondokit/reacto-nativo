import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body,
  List, Fab, Icon
} from 'native-base';
import {FlatList} from 'react-native';
import axios from 'axios';

import TodoItem from '../components/TodoItem';

export default class Todos extends Component {

    constructor(){
      super();
      this.state = {
        count: 0,
        todos: []
      };
    }

    componentDidMount(){
      const self = this;
      axios.get(`http://192.168.1.17:8000/api/todos`).then((result)=>{
        self.setState({
          todos: result.data
        })
      });
    }

   _keyExtractor = (item, index) => item.id;

   // handleIncTodo(){
   //   const count = this.state.count + 1;
   //
   //   let todos = this.state.todos;
   //   todos.push({
   //     id: count,
   //     todo: "Not To Do #" + count
   //   });
   //
   //   this.setState({
   //     todos,
   //     count
   //   });
   // }

  render(){
    return (
      <Container>
        <Header>
          <Body>
            <Text>HELLLLL have crippling depression ({this.state.count})</Text>
          </Body>
        </Header>

        <Content>
          <List>
            {this.state.todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/> )}
          </List>
        </Content>

          <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('TodosCreate') }>
            <Icon name="add" />
          </Fab>

      </Container>
    );
  }
}
