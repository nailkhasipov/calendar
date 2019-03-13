import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { Views, Navigate } from '../../types';
import { ToolbarProps, Toolbar } from '../Toolbar';

afterEach(cleanup);

const onNavigate = jest.fn();
const onChangeView = jest.fn();

const defaultProps: ToolbarProps = {
  onNavigate: onNavigate,
  onChangeView: onChangeView
};

describe('Toolbar component', () => {
  it('renders correctly', () => {
    const { container } = render(<Toolbar {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it('call onNavigate()', () => {
    const { getByTestId } = render(<Toolbar {...defaultProps} />);
    fireEvent.click(getByTestId('navigate-today'));
    expect(onNavigate).toHaveBeenCalledWith(Navigate.TODAY);
    fireEvent.click(getByTestId('navigate-previous'));
    expect(onNavigate).toHaveBeenCalledWith(Navigate.PREVIOUS);
    fireEvent.click(getByTestId('navigate-next'));
    expect(onNavigate).toHaveBeenCalledWith(Navigate.NEXT);
  });

  it('call onChangeView()', () => {
    const { getByTestId } = render(<Toolbar {...defaultProps} />);
    fireEvent.click(getByTestId('change-view-day'));
    expect(onChangeView).toHaveBeenCalledWith(Views.DAY);
    fireEvent.click(getByTestId('change-view-week'));
    expect(onChangeView).toHaveBeenCalledWith(Views.WEEK);
    fireEvent.click(getByTestId('change-view-month'));
    expect(onChangeView).toHaveBeenCalledWith(Views.MONTH);
  });
});
