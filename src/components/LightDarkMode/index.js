// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    name: 'Light Mode',
    back: 'ob-container',
    inner: 'iw-container',
    head: 'w-head',
  }

  onMode = () => {
    const {name, back, inner, head} = this.state
    if (name === 'Light Mode') {
      this.setState(prevState => ({
        name: 'Dark Mode',
        back: 'ow-container',
        inner: 'ib-container',
        head: 'b-head',
      }))
    } else if (name === 'Dark Mode') {
      this.setState(prevState => ({
        name: 'Light Mode',
        back: 'ob-container',
        inner: 'iw-container',
        head: 'w-head',
      }))
    }
  }

  render() {
    const {name, back, inner, head} = this.state

    return (
      <div className="bg-container">
        <div className={`${back}`}>
          <h1 className={`${head}`}>Click To Change Mode</h1>
          <div className="btn-center">
            <button className={`${inner}`} onClick={this.onMode}>
              {name}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
