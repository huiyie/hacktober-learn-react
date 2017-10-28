import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Link from 'react-router-dom/Link'
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionHttps from 'material-ui/svg-icons/action/https';
import SocialPerson from 'material-ui/svg-icons/social/person';

const styles = {
  a: {
    color: 'inherit',
    textDecoration:"inherit"
  }
};

export default class CustomAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  toggleDrawer = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <AppBar
          title={<Link to="/" style={styles.a}>Hacktober Learn React</Link>}
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to="/" style={styles.a}><MenuItem onClick={this.toggleDrawer} leftIcon={<ActionHome />}>Home</MenuItem></Link>
          <Link to="/login" style={styles.a}><MenuItem onClick={this.toggleDrawer} leftIcon={<ActionHttps />}>Login</MenuItem></Link>
          <Link to="/about" style={styles.a}><MenuItem onClick={this.toggleDrawer} leftIcon={<SocialPerson />}>About</MenuItem></Link>
        </Drawer>
      </div>
    )
  }
}
