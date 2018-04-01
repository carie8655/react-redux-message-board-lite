import React, { Component } from 'react' // 引入React
import { connect } from 'react-redux';
import { setPageAction } from '../actions';
import _ from 'lodash';
import '../App.css';
import { browserHistory } from 'react-router'

class Detail extends Component {

    render() {
        return (
            <div>
                {_.map(this.props.insertData, (value, index) =>
                    <div className="returnContent" key={index}>
                        <p>ID：{value.id}</p>
                        <p>姓名：{value.name}</p>
                        <p>內容：{value.message}</p>
                        <p>時間：{value.datetime}</p>
                        <button className="ant-btn-primary" onClick={() => this.test(value)}>查看</button>
                    </div>
                    // <p key={index}>{value.name} {value.message}</p>
                )}
                <div className="returnContent">
                    <button className="ant-btn-primary m-auto" onClick={this.goBackToApp}>返回首頁</button>
                </div>
            </div>

        )
    }
    test = (params) => {
        browserHistory.push({
            pathname: '/messagedetail',
            state: { value: params }
        })
    }

    goBackToApp = () => {

        browserHistory.goBack();
        this.props.setPage('App')
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
