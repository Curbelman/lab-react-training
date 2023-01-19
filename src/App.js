import LikeButton from './components/Iteration8';
import ClickablePicture from './components/Iteration9';
import Dice from './components/Iteration10';
import Carrousel from './components/Iteration11';
// import NumbersTable from './components/Iteration12';
import FaceBook from './components/Iteration13';
import SignUp from './components/Iteration15';
import './App.css';





function App() {
  return (
    <div className="App">
    <h1>React Training Lab</h1>
    <h3>Iteration 8</h3>
      <LikeButton />
      <LikeButton />

      <h3>Iteration 9</h3>
      <ClickablePicture />

      <h3>Iteration 10</h3>
      <Dice />

      <h3>Iteration 11</h3>
      <Carrousel 
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      
      {/* <h3>Iteration 12</h3>
      <NumbersTable
        limit={12}
      /> */}

      <h3>Iteration 13 + 14</h3>
      <FaceBook />

      <h3>Iteration 15</h3>
      <SignUp />


    </div>
  );
}

export default App;
