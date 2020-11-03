import React, { useState } from 'react';
import { navigate } from "gatsby-link";
import Layout from './components/Layout';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact = () => {
  const [values, setValue] = useState({name: '', email: '', message: ''});

  const handleChange = (e => {
    setValue({...values, [e.target.name]: e.target.value});
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...values
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .then(() => setValue({name: '', email: '', message: ''}))
      .catch(error => alert(error));
  }

  return (
    <Layout>
      <form
        name="contact"
        method="POST"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <input type="text" required name="name" placeholder="お名前" value={values.name} onChange={handleChange} />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
        </div>
        <div>
          <textarea name="message" required placeholder="お問合せ内容" value={values.message} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">送信</button>
        </div>
      </form>
    </Layout>
  )
}

export default Contact;
