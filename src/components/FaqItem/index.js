// Write your code here.
import {Component} from 'react'

import './index.css'

const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswerText = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const isImage = isActive ? minusImg : plusImg
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button">
        <img
          src={isImage}
          alt={altText}
          className="plus"
          onClick={this.toggleBtn}
        />
      </button>
    )
  }

  toggleBtn = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="list-item">
        <div className="btn-text-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswerText()}
      </li>
    )
  }
}
export default FaqItem
