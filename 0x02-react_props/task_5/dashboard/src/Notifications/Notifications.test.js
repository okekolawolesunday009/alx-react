import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component Tests', () => {
  it('renders correctly with empty array or no listNotifications property', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders listNotifications correctly and with the right number of NotificationItem', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'test' },
      { id: 2, type: 'urgent', value: 'test2' }
    ];
    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
  });

  it('renders message correctly when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('No new notification for now');
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
  });
});
