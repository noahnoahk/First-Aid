import React, { useState } from 'react';
import AiwithText from '../components/AiwithText';
import AiwithImage from '../components/AiwithImage';

const Home = () => {
  const [aiWith, setLAiWith] = useState('text');

  const handleAiWith = (value) => {
    setLAiWith(value);
  }

  return (
    <div>
      <h1>First Fix Aid</h1>
      <p>Your First Aid Buddy</p>

      <div style={{ margin: '30px 0' }}>
        <button
          onClick={() => handleAiWith('text')}
          className={aiWith == 'text' ? 'aiWithActive' : ''}>
          AI with Text
        </button>

        <button
          style={{ marginLeft: '20px' }}
          className={aiWith == 'image' ? 'aiWithActive' : ''}
          onClick={() => handleAiWith('image')}>
          AI with Image
        </button>
      </div>

      {
        aiWith == 'text' ?
          <AiwithText />
          :
          <AiwithImage />
      }
    </div>
  );
};

export default Home;
