import React, { useState } from 'react';

const ContactFormComp = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit körs');
  
    // RegEx-mönster för validering
    const namePattern = /.{2,}/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const messagePattern = /.+/;
  
    // Kontrollera om formuläret är giltigt
    if (!namePattern.test(formData.name)) {
      alert('Namn måste innehålla minst två tecken');
      return; // Avbryt om namnet är ogiltigt
    }
  
    if (!emailPattern.test(formData.email)) {
      alert('E-postadressen är ogiltig');
      return; // Avbryt om e-postadressen är ogiltig
    }
  
    if (!messagePattern.test(formData.message)) {
      alert('Meddelandet måste innehålla minst ett tecken');
      return; // Avbryt om meddelandet är ogiltigt
    }
  
    try {
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const responseText = await response.text();
        console.log('Svar från server:', responseText);
        alert('Formuläret skickades!');
      } else {
        console.error('Fel vid API-anrop:', response.statusText);
        // Lägg till felhantering här om det behövs
      }
    } catch (error) {
      console.error('Nätverksfel:', error);
      // Lägg till felhantering här om det behövs
    }
  };
  
  

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name*" onChange={handleChange} value={formData.name} />
      <input name="email" type="email" placeholder="Email*" onChange={handleChange} value={formData.email} />
      <textarea name="message" cols={30} rows={10} placeholder="Your Message*" onChange={handleChange} value={formData.message} />
      <input className="btn-theme" type="submit" value="Submit" />
    </form>
  );
}

export default ContactFormComp;
