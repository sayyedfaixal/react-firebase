import React from 'react'
import QuoteCss from "./Quote.module.css"

const Quote = ({quote, quoteTitle}) => {
  return (
    <div>
        <section className={QuoteCss.bgColor}>
                    <div className={QuoteCss.textPaddingLeft}>
                        <div>
                            <div>
                                <div class={QuoteCss.quoteText}><strong>{quote}</strong>
                            <br />
                                {quoteTitle}
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
    </div>
  )
}

export default Quote