import './App.css';
import Header from './component/header';
import Home from './component/home';
function App() {
  //question set data
  const [questionData, setquestionData] = useState([]);

  //hook to get 
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
