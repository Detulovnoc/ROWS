import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './RowBlock.module.css';

class RowBlock extends Component {
    render() {
        let gem = null;
        
        switch ( this.props.type ) {
            case (1):
                gem = <div className={styles.Diamond}></div>;
                break;
            case (2):
                gem = <div className={styles.Emerald}></div>;
                break;
            case (3):
                gem = <div className={styles.Ruby}></div>;
                break;
            case (4):
                gem = <div className={styles.Sapphire}></div>;
                break;
            default:
                gem = <div className={styles.Empty}></div>;
                break;
        }

        return gem;
    }
}

RowBlock.propTypes = {
    type: PropTypes.number.isRequired
};

export default RowBlock;