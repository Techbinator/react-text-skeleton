import * as React from 'react';
import SkeletonText from '..';
import * as TestRenderer from 'react-test-renderer';

describe('skeleton-text', () => {
  it('should render the dummy text with blurred class by default', () => {
    const component = TestRenderer.create(<SkeletonText dummyText="dummy text" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render the dummy text with gradient class', () => {
    const component = TestRenderer.create(<SkeletonText dummyText="dummy text" skeletonType="gradient" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should add class names next to the skeleton type class', () => {
    const component = TestRenderer.create(
      <SkeletonText dummyText="dummy text" className="passed-class-name extra-class-name" skeletonType="gradient" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should display the final text if children prop is passed', () => {
    const component = TestRenderer.create(<SkeletonText dummyText="dummy text">Final text</SkeletonText>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
