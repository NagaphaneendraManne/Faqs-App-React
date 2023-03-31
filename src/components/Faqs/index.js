// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="faqs-container">
      <div className="container">
        <h1 className="heading">FAQS</h1>
        <ul className="list-container">
          {faqsList.map(each => (
            <FaqItem key={each.id} faqDetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
