import React, { Component } from 'react' // 引入React
import { connect } from 'react-redux';
import { setPageAction } from '../actions';
import _ from 'lodash';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(this.props.aa);
    // }
    render() {
        return (
            <div>
                {/* <div className="returnContent">
                    <p>姓名：{this.props.message.name}</p>
                    <p>內容：{this.props.message.message}</p>
                </div> */}


                {_.map(this.props.message, (value, index) =>
                    <div className="returnContent" key={index}>
                        <p>姓名：{value.name}</p>
                        <p>內容：{value.message}</p>
                        <p>時間：{value.datetime}</p>
                    </div>
                    // <p key={index}>{value.name} {value.message}</p>

                )}
                <button onClick={this.returnBack}>返回上頁</button>
            </div>
        )
    }
    returnBack = () => {
        this.props.setPage('App');
    }
}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => ({
    setPage: (params) => {
        dispatch(setPageAction(params));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
