import React, { Component } from 'react' // 引入React
import { connect } from 'react-redux';
import { setPageAction, editMessage, deleteMessage } from '../actions';
// import _ from 'lodash';
import '../App.css';
import { browserHistory } from 'react-router'
import moment from 'moment';

class messageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.location.state.value.name,
            message: this.props.location.state.value.message,
        }
        this.stateChange = this.stateChange.bind(this);
    }

    render() {
        return (
            <div>
                <div className="returnContent">
                    <p>ID：{this.props.location.state.value.id}</p>
                    <div>
                        <span>姓名：</span>
                        <input className="ant-input" name="nameInput" value={this.state.name} onChange={this.stateChange} />
                    </div>
                    <br />
                    <div>
                        <span>內容：</span>
                        <input className="ant-input" name="messageInput" value={this.state.message} onChange={this.stateChange} />
                    </div>
                    <p>時間：{this.props.location.state.value.datetime}</p>
                    <button className="ant-btn-primary" onClick={this.btnClick}>提交</button>
                    <button className="ant-btn-danger" onClick={this.btnDelete}>刪除</button>
                </div>

                <div className="returnContent">
                    <button className="ant-btn-primary m-auto" onClick={this.goBackToApp}>返回首頁</button>
                </div>
            </div>

        )
    }
    btnDelete = () => {
        this.props.delete(this.props.location.state.value);
        this.goBackToApp();
    }
    btnClick = () => {
        const body = {
            id: this.props.location.state.value.id,
            name: this.state.name,
            message: this.state.message,
            datetime: moment().format('YYYY-MM-DD HH:mm:ss')
        }
        this.props.edit(body)
        this.goBackToApp();
    }

    goBackToApp = () => {
        browserHistory.goBack();
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
        page: state.changePage,
        UID: state.setUID,
    }
}
const mapDispatchToProps = (dispatch) => ({
    setPage: (params) => {
        dispatch(setPageAction(params));
    },
    edit: (params) => {
        dispatch(editMessage(params));
    },
    delete: (params) => {
        dispatch(deleteMessage(params));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(messageDetail);
