import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuizSpinner from '../../quiz-spinner';
// import styles from './stylesheets/app.scss';
import '../shared/favicon/apple-touch-icon.png';
import '../shared/favicon/favicon-16x16.png';
import '../shared/favicon/favicon-32x32.png';
import '../shared/favicon/favicon.ico';
import '../shared/favicon/safari-pinned-tab.svg';

class App extends Component {
    render() {
        return (
            <QuizSpinner spinSpeed={700} />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
