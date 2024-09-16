
import './App.css';

import Description from './components/Description';
import Image from './components/Image';
import Price from './components/Price';
import Name from './components/Name';
function App() {
  return (
    <div className="App p-4">
      <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <Image />
          <Name />
          <Price />
          <Description />
        </div>
      </div>
      <div className="mt-4 text-center">
          <h4 className="text-lg font-semibold">Hello, Sarah!</h4> : <h4 className="text-lg font-semibold">Hello, there!</h4>
      </div>
       <img src="" alt="Your profile" className="mx-auto mt-4 rounded-full" />
    </div>
  );
};

export default App;

