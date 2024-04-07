import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component Tests', () => {
  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3); // Assuming there are 3 NotificationItems
  });

  it('renders the first NotificationItem element with the right HTML', () => {
    const wrapper = shallow(
      <Notifications displayDrawer>
        <NotificationItem id={1} type="default" value="test" />
        <NotificationItem id={2} type="urgent" value="test2" />
        <NotificationItem id={3} type="urgent" html={{ __html: '<u>test</u>' }} />
      </Notifications>
    );

    const firstNotificationItem = wrapper.find(NotificationItem).first();
    expect(firstNotificationItem.html()).toEqual(
      '<li data-priority="default">test</li>'
    );
  });
});
