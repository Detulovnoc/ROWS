import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import GameManager from './containers/GameManager/GameManager';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <GameManager />
        </Layout>
      </div>

    )
  }
}

export default App;
