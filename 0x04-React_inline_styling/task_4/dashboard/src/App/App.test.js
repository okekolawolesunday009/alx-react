import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// Mock the alert function
jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('App', () => {
  // Restore the mock after each test
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls logOut function and alerts when Ctrl + H keys are pressed', () => {
    const logOutMock = jest.fn();
    const { container } = render(<App logOut={logOutMock} />);

    // Simulate keydown event with Ctrl + H
    fireEvent.keyDown(container, { key: 'h', ctrlKey: true });

    // Verify that logOut function is called
    expect(logOutMock).toHaveBeenCalled();

    // Verify that alert function is called with the expected message
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });
});
