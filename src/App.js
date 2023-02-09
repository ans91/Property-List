import './App.css';
import Property from './Components/property';

function App() {
  return (
    <div className='main'>
      <div className='main-img'>
        <span className='headding'>Choose your dreamy homes</span>
      </div>
      <div className='main-lst'>
        <Property/>
      </div>
    </div>
  );
}

export default App;
