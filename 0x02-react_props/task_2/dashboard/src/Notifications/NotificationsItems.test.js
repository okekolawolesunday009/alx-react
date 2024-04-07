import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3); // Assuming there are 3 NotificationItem elements
  });

  it('renders the right HTML for the first NotificationItem element', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', value: 'Last notification' }
    ];

    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);
    const firstNotification = wrapper.find(NotificationItem).first();
    
    expect(firstNotification.props().type).toEqual('default');
    expect(firstNotification.props().value).toEqual('New course available');
  });
});
