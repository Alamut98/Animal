import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListScreen from './components/list'
import DetailsScreen from './components/Details'
  
  
const AppNavigator = createStackNavigator({
        List: {screen:ListScreen},
       Details:{screen: DetailsScreen},
        
         },
         {
          headerMode : "none"
         
        
       }); 

App = createAppContainer(AppNavigator);

export default App; 