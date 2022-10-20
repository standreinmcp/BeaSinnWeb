import './App.css';
import { Header } from './components'; 
import { 
  HomePage, 
  MyStory, 
  MyServices, 
  ContactDetails, 
  Footer 
} from './screens'; 

function App() {
  return (
    <div>
      <div className="appContainer">
        <Header />
        <HomePage />
      </div>
      <MyStory />
      <MyServices />
      <ContactDetails />
      <Footer />
    </div>
  );
}

export default App;
