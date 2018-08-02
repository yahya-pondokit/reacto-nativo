import {createStackNavigator} from 'react-navigation';

import Todos from './screens/Todos';
import TodosCreate from './screens/TodosCreate';

const App = createStackNavigator({
  Todos: {
    screen: Todos,
    navigationOptions: {
      headerTitle: 'To Not Do',
    },
  },
  TodosCreate: {
    screen: TodosCreate,
    navigationOptions: {
      headerTitle: 'Create To Not Do',
    },
  },
});

export default App;
