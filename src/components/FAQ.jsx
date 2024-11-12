import React from 'react'
import CallIcon from '../assets/images/call-icon.svg'
import MessageIcon from '../assets/images/message-icon.svg'

function FAQ() {
  return (
    <section id="faq">

        <div className="container">

            <div className="info">

                <div className="title">
                    <h2>Any questions? Check out the FAQs</h2>
                    <p>Still have unanswered questions and need to get in touch?</p>
                </div>
    
                <div className="icons">
    
                    <div className="icon-box">
                        <img src={CallIcon} alt=""/>
                        <p>Still have questions?</p>
                        <button>Contact us</button>
                    </div>
    
                    <div className="icon-box" id="green">
                        <img src={MessageIcon} alt=""/>
                        <p>Dont like phone calls?</p>
                        <button>Contact us</button>
                    </div>
                </div>

            </div>

            

            <div className="accordion">

                <div className="panel">
                    <p>
                        Is any of my personal information stored in the App?
                        <i className="fa-regular fa-chevron-down"></i>
                    </p>

                    <div className="answer">
                        
                    </div>
                </div>

                <div className="panel">
                    <p>
                        Can I schedule future transfers?
                        <i className="fa-regular fa-chevron-up"></i>
                    </p>
                </div>

                <div className="panel open">
                    <p>
                        What formats can I download my transaction history in?
                        <i className="fa-regular fa-chevron-down"></i>
                    </p>

                    <div className="answer">
                        <p></p>
                    </div>
                    
                </div>

                <div className="panel">
                    <p>
                        When can I use Banking App services?
                        <i className="fa-regular fa-chevron-down"></i>
                    </p>
                </div>

                <div className="panel">
                    <p>
                        Can I create my own password that is easy for me to remember?
                        <i className="fa-regular fa-chevron-down"></i>
                    </p>
                </div>

                <div className="panel">
                    <p>
                        What happens if I forget or lose my password?
                        <i className="fa-regular fa-chevron-down"></i>
                    </p>
                </div>

            </div>

            <button>Contact us now</button>

        </div>

    </section>
  )
}

export default FAQ