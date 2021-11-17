import logo200Image from 'assets/img/logo/logo_200.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  MdHome,
  MdAccountCircle,
  MdNotificationsNone,
  MdSettings, MdNotificationsActive, MdPersonPin, MdInsertChart, MdMessage, MdSettingsApplications, MdHelp, MdExitToApp,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  ListGroup, ListGroupItem,
  // UncontrolledTooltip,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink, Popover, PopoverBody,
} from 'reactstrap';
import bn from 'utils/bemnames';
import Notifications from "../Notifications";
import {notificationsData} from "../../demos/header";
import withBadge from "../../hocs/withBadge";
import Avatar from "../Avatar";
import {UserCard} from "../Card";

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navItems = [
  { to: '/', name: 'home', exact: true, Icon: MdHome },
  { to: '/account', name: 'account', exact: false, Icon: MdAccountCircle },
  { to: '/notification', name: 'notifications', exact: false, Icon: MdNotificationsNone },
  { to: '/settings', name: 'settings', exact: false, Icon: MdSettings },
];

const bem = bn.create('sidebar');

const MdNotificationsActiveWithBadge = withBadge({
  size: 'md',
  color: 'primary',
  style: {
    top: -10,
    right: -10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: <small>5</small>,
})(MdNotificationsActive);

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
    isOpenNotificationPopover: false,
    isNotificationConfirmed: false,
    isOpenUserCardPopover: false,
  };

  toggleNotificationPopover = () => {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
    });

    if (!this.state.isNotificationConfirmed) {
      this.setState({ isNotificationConfirmed: true });
    }
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  render() {
    const { isNotificationConfirmed } = this.state;
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
                Reduction <FaGithub />
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                      id={`navItem-${name}-${index}`}
                      className="text-uppercase"
                      tag={NavLink}
                      to={to}
                      activeClassName="active"
                      exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
            ))}
            {/*{navItems.map(({ to, name, exact, Icon }, index) => (*/}
            {/*  <NavItem key={index} className={bem.e('nav-item')}>*/}
            <NavItem>
              <BSNavLink id="Popover2">
                <Avatar
                    onClick={this.toggleUserCardPopover}
                    className="can-click"
                />
              </BSNavLink>
              <Popover
                  placement="bottom-end"
                  isOpen={this.state.isOpenUserCardPopover}
                  toggle={this.toggleUserCardPopover}
                  target="Popover2"
                  className="p-0 border-0"
                  style={{ minWidth: 250 }}
              >
                <PopoverBody className="p-0 border-light">
                  <UserCard
                      title="Jane"
                      subtitle="jane@jane.com"
                      text="Last updated 3 mins ago"
                      className="border-light"
                  >
                    <ListGroup flush>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdPersonPin /> Profile
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdInsertChart /> Stats
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdMessage /> Messages
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdSettingsApplications /> Settings
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdHelp /> Help
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdExitToApp /> Signout
                      </ListGroupItem>
                    </ListGroup>
                  </UserCard>
                </PopoverBody>
              </Popover>
            </NavItem>
            <NavItem>
              <BSNavLink id="Popover1" className="position-relative">
                {isNotificationConfirmed ? (
                    <MdNotificationsNone
                        size={25}
                        className="text-secondary can-click"
                        onClick={this.toggleNotificationPopover}
                    />
                ) : (
                    <MdNotificationsActiveWithBadge
                        size={25}
                        className="text-secondary can-click animated swing infinite"
                        onClick={this.toggleNotificationPopover}
                    />
                )}
              </BSNavLink>
              <Popover
                  placement="bottom"
                  isOpen={this.state.isOpenNotificationPopover}
                  toggle={this.toggleNotificationPopover}
                  target="Popover1"
              >
                <PopoverBody>
                  <Notifications notificationsData={notificationsData} />
                </PopoverBody>
              </Popover>
            </NavItem>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
