import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

class LibraryList extends Component {
  render() {
    return (
      <FlatList 
        
      />
    )
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)