import TabNavigator from './Navigation/Tabs';
import { auth } from './Firebase/config';

console.log(auth);

export default function App() {
  return (
    <TabNavigator/>
  );
}
