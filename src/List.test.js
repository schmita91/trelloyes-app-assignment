import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';
import App from './App.js';
import STORE from './STORE.js';

describe('Lists component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={STORE} />, div);
        
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <List
        key="1"
        header="First list"
        cards={[ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ]}
      />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});

