import React from "react"
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import { List, ListItem, ListItemText, IconButton } from '@material-ui/core';

class Menu extends React.Component<{}, { openMenu: boolean }> {

    toggleDrawer = () => {
        this.state.openMenu == true ? this.setState({ openMenu: false }) : this.setState({ openMenu: true })
    }

    constructor(props: any) {
        super(props);
        this.state = {
            openMenu: false
        }
    }
    render() {
        return <div id="menu-container" className="container-fluid">
            <IconButton className="menuButtom" onClick={this.toggleDrawer}>
                <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer anchor="right" open={this.state.openMenu} onClose={this.toggleDrawer}>
                <List component="nav" aria-label="Main mailbox folders">
                    <ListItem button>
                        <ListItemText className="drawerText" primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText className="drawerText" primary="Catalog" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText className="drawerText" primary="Contacts" />
                    </ListItem>
                </List>
            </Drawer>
            <div className="row">
                <div className="col-sm-12">
                    <img src={require("../images/nike.svg")} alt="" />
                </div>
            </div>
        </div>
    }

}

export default Menu