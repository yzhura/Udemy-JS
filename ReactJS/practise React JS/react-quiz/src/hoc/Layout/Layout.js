import React, {Component} from 'react';
import classes from './Layout.module.scss';
import MenuToggle from '../../components/Navigations/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigations/Drawer/Drawer'


//Компонент высокого порядка
export default class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }
    
    render() {
        return(
            <div className={classes.Layout}>

                <Drawer 
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}></Drawer>

                <MenuToggle 
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                    ></MenuToggle>

                <main>
                    {this.props.children}
                    {/*{this.props.children} -> Это компоненты которые лежать внктри компнента Layout в файле App.js */}
                </main>
            </div>
        )
    }
} 