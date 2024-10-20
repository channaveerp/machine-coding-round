import { useContext } from 'react';
import './App.css';
import CallbackParent from './components/calback/CallbackParent';

import Filter from './components/Filter/Filter';
import InfinetScroll from './components/InfinetScroll/InfinetScroll';
import Pagination from './components/Pagination/Pagination';
import { Slider } from './components/Slider/Slider';
import StarsRating from './components/StarsRating/StarsRating';
import { Toast } from './components/Toasts/Toasts';
import Trafic from './components/trafic/Trafic';
import { UseMemoHook } from './components/usememo/UseMemoHook';
import data from './data.json';
import {
  contextTheme,
  ThemeProvider,
} from './components/ContextApi/ContextApi';
import DataFetching, {
  DataFetchContext,
} from './components/ContextApi/DataFetching';
import UseReducerHook from './components/UseReducerHook/UseReducerHook';
import SignalsTrafic from './components/TraficSignal/SignalsTrafic';
import ScrollDirection from './components/ScrollDirection/ScrollDirection';

function App() {
  const arr = [1, 2, 3, 4, 5];

  const mapp = arr.map((child) => console.log('mappin*2', child * 2));

  // console.log('orignal arr', arr);

  const filteringarr = arr.filter((child) => console.log('filter2', child < 2));
  // console.log('orignal arr', arr);

  return (
    <DataFetching>
      <div className='App'>
        helo world
        {/* <Toast /> */}
        {/* <StarsRating starCount={10} /> */}
        {/* <Pagination /> */}
        {/* <Slider data={data} /> */}
        {/* <InfinetScroll /> */}
        {/* <Trafic /> */}
        {/* <CallbackParent /> */}
        {/* <UseMemoHook /> */}
        {/* <Filter /> */}
        {/* <UseReducerHook /> */}
        {/* <SignalsTrafic /> */}
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
        <ScrollDirection />
      </div>
    </DataFetching>
  );
}

export default App;
