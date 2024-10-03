import './App.css';
import StarsRating from './components/StarsRating/StarsRating';
import { Toast } from './components/Toasts/Toasts';

function App() {
  return (
    <div className='App'>
      helo world
      {/* <Toast /> */}
      <StarsRating starCount={10} />
    </div>
  );
}

export default App;
