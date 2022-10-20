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
      <Header />
      <div className="appContainer">
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
