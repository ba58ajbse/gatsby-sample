import React, { useState } from 'react';

const About = () => {
  const [values, setValue] = useState({name: '', email: '', message: ''});

  const handleChange = (e => {
    setValue({...values, [e.target.name]: e.target.value});
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます')
    setValue({name: '', email: '', message: ''});
  }

  return (
    <div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
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
    </div>
  )
}

export default About;
