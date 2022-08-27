
import '../App.css'

const QuoteBox = ({Quote, Author} ) => {
    return (
        <div className='container'>
            <i className="fa-solid fa-quote-left" id="quoteIcon"></i>
            <p className="quote"> {Quote}</p>
            <p className="author">{Author}</p>
            
        </div>)
};

export default QuoteBox;