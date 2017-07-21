import React from 'react'
import { connect } from 'react-redux'
import Loader from '../component/Loader.jsx'

export class App extends React.Component {
  render () {
    const { isFetching } = this.props

    return (
      <div>
        <Loader isFetching={isFetching} />
        <div className='container'>
          React Init
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ isFetching }) => ({ isFetching })
export default connect(mapStateToProps)(App)
