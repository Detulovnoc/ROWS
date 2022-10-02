import React, {Component} from 'react';
import Aux from '../../../hoc/_Aux';
import RowBlock from './RowBlock/RowBlock';
import styles from './RowFactory.module.css';

    

class RowFactory extends Component {
    
    render() {

        let left = (this.props.leftPos * 1) + 'px';
        let top = (this.props.topPos * 1) + 'px';
        // if (window.innerWidth >= 1000) {
        //     left = (this.props.leftPos * 50) + 'px';
        //     top = (this.props.topPos * 50) + 'px';            
        // }
        // else if (window.innerWidth >= 500) {
        //     left = (this.props.leftPos * 25) + 'px';
        //     top = (this.props.topPos * 25) + 'px';            
        // }
        // else if (window.innerWidth >= 250) {
        //     left = (this.props.leftPos * 12.5) + 'px';
        //     top = (this.props.topPos * 12.5) + 'px';            
        // }  
        if (screen.width >= 1000) {
            left = (this.props.leftPos * 50) + 'px';
            top = (this.props.topPos * 50) + 'px';            
        }
        else if (screen.width >= 500) {
            left = (this.props.leftPos * 25) + 'px';
            top = (this.props.topPos * 25) + 'px';            
        }
        else if (screen.width >= 250) {
            left = (this.props.leftPos * 12.5) + 'px';
            top = (this.props.topPos * 12.5) + 'px';            
        }       
        // let lgWindow = window.matchMedia('min-width: 1000px');
        // let mdWindow = window.matchMedia('min-width: 500px');
        // let smWindow = window.matchMedia('min-width: 250px');

        // if (lgWindow.matches) {
        //     left = (this.props.leftPos * 50) + 'px';
        //     top = (this.props.topPos * 50) + 'px';            
        // }
        // else if (mdWindow.matches) {
        //     left = (this.props.leftPos * 25) + 'px';
        //     top = (this.props.topPos * 25) + 'px';            
        // }
        // else if (smWindow.matches) {
        //     left = (this.props.leftPos * 12.5) + 'px';
        //     top = (this.props.topPos * 12.5) + 'px';            
        // }

        const activeObject = 
        <Aux>
            <div style={{left:left,top:top}} className={styles.RowBlockWhole} >
                <div className={styles.RowBlock1} >
                    <RowBlock type={this.props.block1} />
                </div>
                <div className={styles.RowBlock2} >
                    <RowBlock type={this.props.block2} />
                </div>
                <div className={styles.RowBlock3} >
                    <RowBlock type={this.props.block3} />
                </div>
            </div>
        </Aux>;

        return activeObject;
    }
    

};

export default RowFactory