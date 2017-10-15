import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Link from 'react-router-dom/Link'

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
          title={<a href="/" style={styles.a}>Hacktober Learn React</a>}
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to="/" style={styles.a}><MenuItem onClick={this.toggleDrawer}>Home</MenuItem></Link>
          <Link to="/about" style={styles.a}><MenuItem onClick={this.toggleDrawer}>About</MenuItem></Link>
        </Drawer>
      </div>
    )
  }
}
