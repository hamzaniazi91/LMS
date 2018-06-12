import React, { Component, PropTypes } from 'react';

import SideBarUserPanel from './sidebar_user_panel';
import SideBarSearchPanel from './sidebar_search_panel';
import SideBarMenu from './sidebar_menu';

export default class SideBar2 extends Component {
  userDisplayName() {
    const currentUser = this.props.user;
    let name = 'Alexander Pierce';

    if (currentUser) {
      name = currentUser.username;
    }

    return name;
  }

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <SideBarUserPanel userName={this.userDisplayName()} />
          <SideBarSearchPanel />
          <SideBarMenu  />
        </section>
      </aside>
    );
  }
}

SideBar2.propTypes = {
  user: PropTypes.object,
// users: PropTypes.array,
};
