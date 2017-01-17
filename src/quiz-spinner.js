import React, { Component, PropTypes } from 'react';
import styles from './style.scss';
import defaultHints from './default-hints';
import {
    popRandom,
    angleDiff,
} from './util';

class QuizSpinner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            angle: 0,
            spinning: false,
            message: '',
        };

        this.spin = this.spin.bind(this);
        this.spinningDone = this.spinningDone.bind(this);
    }

    componentDidMount() {
        this.hints = [ ...this.props.hints ];
        this.pastAngles = [];
        this.rotationContainer.addEventListener('transitionend', this.spinningDone);
    }

    componentWillUnmount() {
        this.rotationContainer.removeEventListener('transitionend', this.spinningDone);
    }

    spin() {
        const {
            players,
            avoidLastNPlayers,
        } = this.props;

        let angle;

        const genAngle = () => this.state.angle + (360 * 2) + (Math.random() * 360 * 3);

        angle = genAngle();
        // Generate angles until the last <avoidLastNPlayers> players are excluded
        if (avoidLastNPlayers > 0) {
            const isTooClose = oldAngle =>
                angleDiff(oldAngle, angle) < (180 / (Math.max(avoidLastNPlayers + 1, players) + 1));

            while (this.pastAngles.some(isTooClose)) {
                angle = genAngle();
            }
        }

        this.pastAngles = [ angle, ...this.pastAngles.slice(0, avoidLastNPlayers - 1) ];

        let message = '';
        ([this.hints, message] = popRandom(this.hints));
        if (this.hints.length < 1) {
            this.hints = [ ...this.props.hints ];
        }

        this.setState({
            spinning: true,
            angle,
            message,
        });
    }

    spinningDone(event) {
        // Ignore transitionend events by any other element but the rotation container
        if (event.target !== this.rotationContainer) {
            return;
        }

        this.setState({
            angle: this.state.angle % 360,
            spinning: false,
        });
    }

    render() {
        const {
            angle,
            spinning,
            message,
        } = this.state;
        const {
            spinSpeed,
        } = this.props;

        const style = {
            transform: `rotateZ(${angle}deg)`,
        };

        if (spinning) {
            style.transition = `transform ${spinSpeed * angle / 360}ms cubic-bezier(0.095, 0.915, 0.370, 0.910)`;
        }

        return (
            <div
                className={styles['rotation-container']}
                style={style}
                ref={(el) => { this.rotationContainer = el; }}
            >
                <button
                    className={styles.arrow}
                    onClick={this.spin}
                    style={{
                        opacity: spinning || !message ? 1 : 0.4,
                    }}
                />

                <div className={styles['hint-text']}>
                    {!spinning && message}
                </div>
            </div>
        );
    }
}

QuizSpinner.propTypes = {
    spinSpeed:         PropTypes.number,
    players:           PropTypes.number,
    avoidLastNPlayers: PropTypes.number,
    hints:             PropTypes.arrayOf(PropTypes.string),
};

QuizSpinner.defaultProps = {
    spinSpeed: 700,
    players: 4,
    avoidLastNPlayers: 2,
    hints: defaultHints,
};

export default QuizSpinner;
