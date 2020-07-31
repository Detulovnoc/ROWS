import React, {Component} from 'react';
import Aux from '../../../hoc/_Aux';
import RowBlock from './RowBlock/RowBlock';
import styles from './RowFactory.module.css';

    

class RowFactory extends Component {
    
    render() {

        let left = (this.props.leftPos * 50) + 'px';
        let top = (this.props.topPos * 50) + 'px';

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