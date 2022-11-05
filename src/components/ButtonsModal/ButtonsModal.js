import React, {Component} from 'react';
import styles from './ButtonsModal.module.css';
import Aux from '../../hoc/_Aux'


class ButtonsModal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate () {
        console.log('[ButtonsModal] WillUpdate');
    }

    render () {
        return (
            <Aux>
                <div
                    className={styles.ButtonsModal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default ButtonsModal;