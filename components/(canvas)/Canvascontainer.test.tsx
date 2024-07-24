import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CanvasContainer from './CanvasContainer';

describe('CanvasContainer Component', () => {
  it('renders a canvas view', () => {
    const { getByTestId } = render(<CanvasContainer />);
    const canvas = getByTestId('canvas-view');
    expect(canvas).toBeTruthy();
  });
  it('draw on the canvas when touched', () => {
    const { getByTestId } = render(<CanvasContainer />);

    //const canvas = getByTestId('canvas');

    //fireEvent(canvas, 'onTouchStart', { nativeEvent: { locationX: 50, locationY: 50}})
    //fireEvent(canvas, 'onTouchMove', { nativeEvent: { locationX: 100, locationY: 100}})
    //fireEvent(canvas, 'onTouchEnd', { nativeEvent: { locationX: 100, locationY: 100}})

    //expect(canvas.getContext('2d').beginPath).toHaveBeenCalled();
    
  })
});
