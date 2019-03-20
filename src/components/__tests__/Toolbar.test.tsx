import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { Views, Navigate } from '../../types';
import { ToolbarProps, Toolbar } from '../Toolbar';

afterEach(cleanup);

const onNavigate = jest.fn();
const onChangeView = jest.fn();

const defaultProps: ToolbarProps = {
  view: Views.DAY,
  onNavigate: onNavigate,
  onChangeView: onChangeView
};

describe('Toolbar component', () => {
  it('renders correctly', () => {
    const { container } = render(<Toolbar {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
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

  it('set the active class to change view buttons', () => {
    const { getByTestId } = render(
      <Toolbar {...defaultProps} view={Views.WEEK} />
    );
    expect(getByTestId('change-view-week')).toHaveClass('active');
  });
});
