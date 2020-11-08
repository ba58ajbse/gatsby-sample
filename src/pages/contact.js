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
      <h1 className="contact-title">CONTACT</h1>
      <form
        className="contact-form"
        name="contact"
        method="POST"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
          <span className="required">必須</span><label for="name">お名前</label>
          <br />
          <input type="text" id="name" className="form-input" required name="name" placeholder="お名前" value={values.name} onChange={handleChange} />
          <span className="required">必須</span><label for="email">メールアドレス</label>
          <br />
          <input type="email" id="email" className="form-input" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
          <span className="required">必須</span><label for="message">お問い合わせ内容</label>
          <br />
          <textarea id="message" name="message" className="form-input form-textarea" required placeholder="お問合せ内容" value={values.message} onChange={handleChange} />
          <button className="submit-btn" type="submit">送信</button>
      </form>
    </Layout>
  )
}

export default Contact;
