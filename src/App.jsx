import React, { useEffect } from 'react';
import {addSubject} from './services/subject';
import { addTopic } from './services/topic';
const App = () => {


  useEffect(() => {
    // getSubjects();
    // addSubject();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <button onClick={(e) => {addSubject()}}>Add Subjects</button>
      <button onClick={(e) => {addTopic()}}>Add Topic</button>
    </div>
  );
};

export default App;