import {useEffect, useState} from 'react'
import CallIcon from '../assets/images/call-icon.svg'
import MessageIcon from '../assets/images/message-icon.svg'

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [faqsData, setFaqsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');  
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setFaqsData(data);
            } catch (error) {
                console.error('Error fetching FAQs:', error);
            }
        };

        fetchData();

    },[]);


    const togglePanel = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


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
            {faqsData.map((faq, index) => (
                <div
                    key={faq.id}
                    className={`panel ${activeIndex === index ? 'open' : ''}`}
                >
                    <div className='cursor-pointer' onClick={() => togglePanel(index)}>
                        <p>{faq.title}
                        {activeIndex === index ? (
                            <i className="fa-regular fa-chevron-up"></i>
                        ) : (
                            <i className="fa-regular fa-chevron-down"></i>
                        )}
                        </p>
                    </div>
                    {activeIndex === index && (
                        <div className="answer">
                            <p>{faq.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>

            <button>Contact us now</button>

        </div>

    </section>
  )
}

export default FAQ