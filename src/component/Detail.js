import React, { Component } from 'react' // 引入React
import { connect } from 'react-redux';
import { setPageAction } from '../actions';
import _ from 'lodash';
import '../App.css';
import { browserHistory } from 'react-router'

class Detail extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.insertData)
    }
    render() {
        return (
            <div>
                {/* <div className="Detail">
                    <p>姓名：{this.props.message.name}</p>
                    <p>內容：{this.props.message.message}</p>
                </div>
                <button className="ant-btn-primary" onClick={this.returnBack}>返回上頁</button> */}
                {_.map(this.props.insertData, (value, index) =>
                    <div className="returnContent" key={index}>
                        <p>姓名：{value.name}</p>
                        <p>內容：{value.message}</p>
                        <p>時間：{value.datetime}</p>
                    </div>
                    // <p key={index}>{value.name} {value.message}</p>
                )}
                <div className="returnContent">
                    <button className="ant-btn-primary m-auto" onClick={this.goBackToApp}>返回首頁</button>
                </div>
            </div>

        )
    }

    goBackToApp = () => {
        browserHistory.push('/')
        this.props.setPage('App')
    }
}
const mapStateToProps = (state) => {
    return {
        insertData: state.insertData,
        page: state.changePage
    }
}
const mapDispatchToProps = (dispatch) => ({
    setPage: (params) => {
        dispatch(setPageAction(params));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
