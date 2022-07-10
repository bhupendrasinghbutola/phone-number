import './App.css';
import Active from './components/Active';
import InActive from './InActive';



function App() {
  return (
    <div >
      <h3 className='mb-2'>Active</h3>
      <Active/>
      <h3 className='mb-2'>InActive</h3>
      <InActive/>
        </div>
  );
}

export default App;
