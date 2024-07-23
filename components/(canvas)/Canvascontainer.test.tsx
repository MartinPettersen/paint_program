import React from 'react';
import { render } from '@testing-library/react-native';
import CanvasContainer from './CanvasContainer';

describe('CanvasContainer Component', () => {
  it('renders a canvas view', () => {
    const { getByTestId } = render(<CanvasContainer />);
    const canvas = getByTestId('canvas-view');
    expect(canvas).toBeTruthy();
  });
});
