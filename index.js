// Write your code here
import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {isDarkMode: true}

  toggleMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClass = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className={`background ${modeClass}`}>
        <div className="sub-background">
          <h1 className={`heading ${modeClass}`}>Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.toggleMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default App
