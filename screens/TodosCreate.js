import React, {Component} from 'react';
import {Container, Content, Text, Form, Item, Label, Input, Button} from 'native-base';

export default class TodosCreate extends Component {

  constructor(){
    super();
    this.state = {
      text: ""
    }
  }

  handleSubmit(){
    alert(this.state.text)
  }

  render(){
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Title Dont needed</Label>
              <Input onChangeText={(text) => this.setState({text})}/>
            </Item>
            <Button full primary onPress={() => this.handleSubmit()}>
              <Text>Save</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
