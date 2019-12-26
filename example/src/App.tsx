import React, { useState, useEffect } from 'react';

import TestPlugin from 'skeleton-text';

const App: React.FC = () => {
  const [dummyText, setDummyText] = useState('Dummy text');
  const [text, setText] = useState('');
  const [textAfter, setTextAfter] = useState(4);
  const [fontSize, setFontSize] = useState(20);
  const [skeletonType, setSkeletonType] = useState<'blurred' | 'gradient'>('blurred');

  useEffect(() => {
    setTimeout(() => {
      setText(text ? '' : 'Final text');
    }, textAfter * 1000);
  }, [text, textAfter]);

  return (
    <div className="App">
      <hr />
      <h2>Configure</h2>
      <div>
        <label htmlFor="dummy-text">Dummy text: </label>
        <input id="dummy-text" type="text" value={dummyText} onChange={e => setDummyText(e.target.value)} />
      </div>
      <div>
        <label htmlFor="text-after">Final text after: </label>
        <input
          type="number"
          name="text-after"
          min={1}
          max={10}
          value={textAfter}
          onChange={e => setTextAfter(parseInt(e.target.value))}
        />
        second(s)
      </div>
      <div>
        <label htmlFor="font-size">Font size: </label>
        <input
          type="number"
          name="font-size"
          min={1}
          max={40}
          value={fontSize}
          onChange={e => setFontSize(parseInt(e.target.value))}
        />
      </div>
      <div>
        <span>Skeleton Type: </span>
        <label htmlFor="blurred-skeleton-type">
          Blurred
          <input
            checked={skeletonType === 'blurred'}
            type="radio"
            id="blurred-skeleton-type"
            value={skeletonType}
            name="skeleton-type"
            onChange={e => setSkeletonType('blurred')}
          />
        </label>
        <label htmlFor="gradient-skeleton-type">
          Gradient
          <input
            checked={skeletonType === 'gradient'}
            type="radio"
            id="gradient-skeleton-type"
            value={skeletonType}
            name="skeleton-type"
            onChange={e => setSkeletonType('gradient')}
          />
        </label>
      </div>
      <hr />
      <h2>Product demo: </h2>
      <hr />
      <span style={{ fontSize }}>
        <TestPlugin dummyText={dummyText} skeletonType={skeletonType}>
          {text}
        </TestPlugin>
      </span>
    </div>
  );
};

export default App;
