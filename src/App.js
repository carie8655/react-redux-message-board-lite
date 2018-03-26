import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { onInsertAction, setPageAction } from './actions';
import { connect } from 'react-redux';
import Home from './component/Home';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      showItem: true,
    };
    this.stateChange = this.stateChange.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.page !== 'Home' ? (
          <div>
            <div>
              <span>姓名：</span>
              <input name='nameInput' value={this.state.name} onChange={this.stateChange} />
            </div>
            <br />
            <div>
              <span>內容：</span>
              <input name="messageInput" value={this.state.message} onChange={this.stateChange} />
            </div>
            <br />
            <div>
              <button onClick={this.btnClick}>Submit</button>
            </div>
            <br />
          </div>
        ) : (
            <div>
              <Home message={this.props.insertData} />
            </div>
          )}
      </div>
    );
  }

  btnClick = () => {
    const body = {
      name: this.state.name,
      message: this.state.message,
      datetime: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    this.props.onInsert(body);
    this.props.setPage('Home');

    this.setState({
      name: '',
      message: ''
    })
  }

  stateChange(event) {
    switch (event.target.name) {
      case 'nameInput':
        this.setState({
          name: event.target.value
        });
        break;
      case 'messageInput':
        this.setState({
          message: event.target.value
        });
        break;
      default:
        break;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    insertData: state.insertData,
    page: state.changePage
  }
}
const mapDispatchToProps = (dispatch) => ({
  onInsert: (params) => {
    dispatch(onInsertAction(params));
  },
  setPage: (params) => {
    dispatch(setPageAction(params))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);