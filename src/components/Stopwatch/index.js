// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  runTimer = () => {
    this.timerId = setInterval(() => {
      const {seconds} = this.state

      if (seconds >= 0 && seconds <= 59) {
        console.log('timer on')
        this.setState(prevState => ({seconds: prevState.seconds + 1}))
      }
      if (seconds === 59) {
        console.log('60 above')
        this.setState(prevState => ({
          seconds: 0,
          minutes: prevState.minutes + 1,
        }))
      }
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetOn = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state

    const s = seconds < 10 ? `0${seconds}` : seconds
    const m = minutes < 10 ? `0${minutes}` : minutes
    const app = (
      <div className="home-cont">
        <div className="stop-watch-cont">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-cont">
            <div className="logo-cont">
              <img
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="logo"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="runner">
              {m}:{s}
            </h1>
            <div className="control-panel">
              <button
                className="control-btn start"
                type="button"
                onClick={this.runTimer}
              >
                Start
              </button>
              <button
                className="control-btn stop"
                type="button"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                className="control-btn reset"
                type="button"
                onClick={this.resetOn}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
    return app
  }
}
export default Stopwatch
