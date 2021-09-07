import "./style.css"

const Contact = () => {
    return (
        <div className="contact">
      <br/>
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.3808676356853!2d13.326841616520285!3d52.508446079812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d99b54b90d%3A0x82d4d490c6efed00!2sEpitech%20Berlin!5e0!3m2!1sde!2sde!4v1621366931144!5m2!1sde!2sde"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h2>Phone</h2>
      <p>0152 336 29 484</p>
      <br/>
      <h2>Email</h2>
      <p>karl-erik.stoerzel@epitech.eu</p>
      <br/>
      <h2>Address</h2>
      <p>Fasanenstraße 86, 10623 Berlin</p>
    </div>
    );
}

export default Contact;