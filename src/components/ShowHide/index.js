// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: false,
    isLastName: false,
  }

  OnChangeFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  OnChangeLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div>
            <button
              type="button"
              className="button"
              onClick={this.OnChangeFirstName}
            >
              Show/Hide FirstName
            </button>
            {isFirstName && <p className="names">Joe</p>}
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.OnChangeLastName}
            >
              Show/Hide LastName
            </button>
            {isLastName && <p className="names">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
