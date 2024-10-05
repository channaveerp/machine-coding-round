import './App.css';
import InfinetScroll from './components/InfinetScroll/InfinetScroll';
import Pagination from './components/Pagination/Pagination';
import { Slider } from './components/Slider/Slider';
import StarsRating from './components/StarsRating/StarsRating';
import { Toast } from './components/Toasts/Toasts';
import data from './data.json';

function App() {
  return (
    <div className='App'>
      helo world
      {/* <Toast /> */}
      {/* <StarsRating starCount={10} /> */}
      {/* <Pagination /> */}
      {/* <Slider data={data} /> */}
      <InfinetScroll />
    </div>
  );
}

export default App;
