import './App.css';
import { QuestionsProvider } from './contexts/questionsContext';
import Card from './components/card';
import { useState } from 'react';
import { Result } from './components/Result';

function App() {
  let [log, setLog] = useState([]);

  let flag = true;
  if(log.length === 10){
    flag = false
  }

  return (
    <QuestionsProvider>
    {flag ? 
    <div className='rounded' style={{width:'50rem', height:'30rem', backgroundColor:'#6a994e', marginTop:'10rem', marginLeft:'25rem'}}>
      <Card log={log} setLog={setLog}/>
    </div> 
    : 
    <div className='rounded p-4' style={{width:'50rem', height:'130rem', backgroundColor:'#6a994e', marginTop:'10rem', marginLeft:'25rem'}}>
    <Result log={log} setLog={setLog}/> 
    </div>}
    </QuestionsProvider>
  );
}

export default App;
