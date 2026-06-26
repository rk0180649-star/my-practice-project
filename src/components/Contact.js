import react, {useState} from "react";
import './Contact.css';
import { FaMobile, FaLocationArrow } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot, FaSquareTwitter, FaSquareWhatsapp, FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {

     const [formData, setFormData] = useState({
            name: '',
            email: '',
            project: '',
            message: ''
        });
    
        const [error, setError] = useState('');
        const [success, setSuccess] = useState(false);
        const [submitting, setSubmitting] = useState(false); // Button ko disable karne ke liye jab tak mail ja raha ho
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            if (!formData.name || !formData.project || !formData.message ) {
                setError('Please fill in all fields.');
                return;
            }
    
            setSubmitting(true);
            setError('');
    
            // ---- REAl MAIL SENDING LOGIC ----
            try {
                // here in fetch put your email url
                const response = await fetch("https://formspree.io/f/mrevdzaz", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email, // Isse aap use direct reply kar payenge
                        project: formData.project,
                        message: formData.message
                    })
                });
    
                if (response.ok) {
                    setSuccess(true);
                    // Form khali karne ke liye
                    setFormData({ name: '', email: 'rk0180649@gmail.com', project: '', message: '' });
                } else {
                    setError('Something went wrong. Please try again.');
                }
            } catch (err) {
                setError('Network error. Please try again later.');
            } finally {
                setSubmitting(false);
            }
        };


    return(
        <div className="contact-section">
            <h1>CONTACT GET IN TOUCH</h1>
            <p className="textheaderdesing">FEEL FREE TP REACH OUT IF YOU HAVE ANY QUESTIONS OR WANT TO DISCUSS A PROJECT</p>
            <div className="contact">
                <div className="contact-box-one">
                    <p>Let's work together</p>
                    <p>Rupesh Kumar</p>
                    <p><FaMobile /> +91 6201442285</p>
                    <p> <SiGmail /> rk0180649@gmail.com</p>
                    <p> <FaLocationDot /> Bihar India</p>
                    <div className="contactnumber">
                    <p><a href="https://wa.me/916201442285"> <FaSquareWhatsapp /></a></p>
                    <p><a href="https://x.com/Rupeshkuma54634"> <FaSquareTwitter /></a></p>
                    <p><a href="https://instagram.com/rupesh620144"><FaSquareInstagram /></a></p>
                    </div>
                </div>

                <div className="contact-box-two">
            {error && <div className="error-msg">{error}</div>}
            {success && <div className="success-msg">Thank you! Your message has been sent directly to Rupesh.</div>}

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-group">
                    <label>Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                </div>

                <div className="input-group">
                    <label>To Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email' />
                </div>

                <div className="input-group">
                    <label>To Project</label>
                    <input type="text" name="project" value={formData.project} onChange={handleChange} placeholder='Enter your project' />
                </div>

                <div className="input-group">
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." rows="5" />
                </div>

                {/* Submitting state ke mutabik button ka text badlega */}
                <button type="submit" className="submit-btn" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
              </button>

             </form>

            </div>

           </div>
      </div>
    );
}

export default Contact;