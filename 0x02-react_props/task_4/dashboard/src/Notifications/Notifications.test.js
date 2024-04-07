import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component Tests', () => {
  it('does not display menu item and div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menu-item')).toHaveLength(0);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('displays menu item and div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('.menu-item')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });
});
