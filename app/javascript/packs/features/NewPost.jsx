import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as postActions from '../actions/postActions'
import Nav from '../containers/Nav'
import PostForm from '../containers/PostForm'
import PostPreview from '../components/PostPreview'
import styles from '../styles/NewPost.scss'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.createPost(this.props.editor.state)
  }

  render() {
    return (
      <div styleName="container">
        <Nav />
        <PostForm handleSubmit={this.handleSubmit} />
        <PostPreview editor={this.props.editor} />
      </div>
    )
  }
}

NewPost.propTypes = {
  editor: PropTypes.object.isRequired,
  createPost: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    editor: state.editor
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(postActions, dispatch)
}

NewPost = CSSModules(NewPost, styles)

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)