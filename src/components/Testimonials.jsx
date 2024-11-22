import TestimonialsCard from './TestimonialsCard'
import { useState, useEffect } from 'react'

function Testimonials() {

    const [testimonialsList, setTestimonialsList ] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            try {
                    const res = await fetch("https://win24-assignment.azurewebsites.net/api/testimonials")
                    if (!res.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    const data = await res.json();
                    setTestimonialsList(data);

            }catch (error) {
                console.error('Error fetching FAQs:', error);
            }
        }


        fetchData();


    },[])

  
  return (
    <section id="testimonials">
        
        <div className="testimonial-container">

            <div className="h2">
                <h2>Clients are Loving Our App</h2>
            </div>

            {testimonialsList&&testimonialsList?.map((item)=>(
                <TestimonialsCard key={item.id} rating={item?.starRating} description={item?.comment} profile_user={item?.avatarUrl} user_name={item?.author} designation={item?.jobRole} />
            ))
            }

        </div>
    </section>
  )
}

export default Testimonials