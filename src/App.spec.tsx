import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

describe('when render mode is request_data', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
      <App renderMode="request_data" baseURL="whatever" />
    );
    expect(tree).toMatchSnapshot();
  });
});
