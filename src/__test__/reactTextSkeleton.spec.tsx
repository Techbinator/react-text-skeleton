import * as React from 'react';
import TextSkeleton from '..';
import * as TestRenderer from 'react-test-renderer';

describe('text skeleton', () => {
  it('should render the dummy text with blurred class by default', () => {
    const component = TestRenderer.create(<TextSkeleton dummyText="dummy text" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render the dummy text with gradient class', () => {
    const component = TestRenderer.create(<TextSkeleton dummyText="dummy text" skeletonType="gradient" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should add class names next to the skeleton type class', () => {
    const component = TestRenderer.create(
      <TextSkeleton dummyText="dummy text" className="passed-class-name extra-class-name" skeletonType="gradient" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should display the final text if children prop is passed', () => {
    const component = TestRenderer.create(<TextSkeleton dummyText="dummy text">Final text</TextSkeleton>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
