import MainContainer from './components/MainContainer';
import SideNav from './components/SideNav';
import { getMongoUri } from './helpers';
const URL = getMongoUri();
console.log('URL', URL);
const App = () => {
  return (
    <>
      <SideNav />
      <MainContainer />
    </>
  );
};

export default App;
