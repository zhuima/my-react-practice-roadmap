import React from 'react'

class ClassComp extends React.Component {
  state = {
    message: 'Class Component',
    time: new Date().toLocaleString(),
  }

  componentDidMount() {
    console.log('====================================')
    console.log('DidMount is triggered')
    console.log('====================================')
    this.interval = setInterval(this.showDate, 1000)
  }

  componentDidUpdate() {
    console.log('====================================')
    console.log('DidUpdate is triggered')
    console.log('====================================')
  }

  componentWillUnmount() {
    console.log('====================================')
    console.log('Unmount is triggered')
    console.log('====================================')
    console.log(this.interval)
  }

  showDate = () => {
    this.setState({ time: new Date().toLocaleString() })
  }

  render() {
    return (
      <div>
        {this.state.message}
        <div>{this.state.time}</div>
      </div>
    )
  }
}

export default ClassComp
