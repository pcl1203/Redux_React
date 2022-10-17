import React, { Component } from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        componentDidMount() {
            this.shouldNaviAway();
        }

        componentDidUpdate() {
            this.shouldNaviAway();
        }

        shouldNaviAway() {
            if (!this.props.auth) {
                setTimeout(() =>this.props.navigate('/', { replace: true })); // this is necessary to kick in
            }
        }
        render() {
            return <ChildComponent {...this.props}/>; // needed to pass the props to the child component
        }


    }

    function WithNavigate(props) {
        let navigate = useNavigate();
        return <ComposedComponent {...props} navigate={navigate} />
    }
    
    function mapStateToProps(state) {
        return { auth: state.auth };
    }

    return connect(mapStateToProps)(WithNavigate);
};