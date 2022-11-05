import React, {Component} from 'react';
import styles from './StartModal.module.css';
import Aux from '../../hoc/_Aux'
import Backdrop from '../Backdrop/Backdrop';


class StartModal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate () {
        console.log('[StartModal] WillUpdate');
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.StartModalClosed} />
                <div
                    className={styles.StartModal}
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

export default StartModal;