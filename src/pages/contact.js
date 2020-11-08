import React from 'react';
import Layout from './components/Layout';
import ContactForm from './components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <h1 className="contact-title">CONTACT</h1>
      <ContactForm />
    </Layout>
  )
}

export default Contact;
