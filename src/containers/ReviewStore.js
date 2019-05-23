import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as TodoActions from '../actions'

import ReviewMain from '../components/reviewPortal/ReviewMain'

const ReviewStore=({actions,reviewReducer,history})=>{
    console.log(actions,reviewReducer,history)
    return (
        <div className="wrapper-container">
            <ReviewMain actions={actions} reviewReducer={reviewReducer}/>
        </div>
    )
}
ReviewStore.propTypes={
    actions:PropTypes.object.isRequired,
    reviewReducer:PropTypes.object.isRequired
}

const mapStateToProps=state=>({
    reviewReducer:state.reviewReducer
})
const mapDispatchToProps=dispatch=>({
    actions:bindActionCreators(TodoActions,dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewStore)
