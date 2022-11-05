import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './RowBlock.module.css';

class RowBlockSmall extends Component {
    render() {
        let gem = null;
        
        switch ( this.props.type ) {
            case (1):
                gem = <div className={styles.DiamondSmall}></div>;
                break;
            case (2):
                gem = <div className={styles.EmeraldSmall}></div>;
                break;
            case (3):
                gem = <div className={styles.RubySmall}></div>;
                break;
            case (4):
                gem = <div className={styles.SapphireSmall}></div>;
                break;
            default:
                gem = <div className={styles.EmptySmall}></div>;
                break;
        }

        return gem;
    }
}

RowBlockSmall.propTypes = {
    type: PropTypes.number.isRequired
};

export default RowBlockSmall;