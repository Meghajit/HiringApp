import React from 'react';
import Sidebar from 'react-sidebar';

const mql = window.matchMedia(`(min-width: 800px)`);

class MySidebar extends React.Component {

 constructor(props) {
    super(props);

   this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open
    }

   this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

 onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

 componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

 componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

 mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

 render() {
    var sidebarContent = <b>Sidebar content</b>;
    var sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen
    };

   return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}>
        <b>Main content</b>
      </Sidebar>
    );
  }
};

export default MySidebar;