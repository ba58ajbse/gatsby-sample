import React from 'react';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby-link';


const ContactForm = () => {
  const { register, handleSubmit, reset, errors } = useForm();

  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");
  //   }

  const onSubmit = (data) => {
    console.log(data);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // body: encode({
      //   "form-name": form.getAttribute("name"),
      //   ...values
      // })
      body: data
    })
      .then(() => navigate("/thanks/"))
      .then(() => reset())
      .catch(error => alert(error));
  }
  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="form-name" value="contact" ref={register}/>
      <span className="required">必須</span>
      <label htmlFor="name">お名前</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        className="form-input"
        placeholder="お名前"
        ref={register({ required: true })} />
      {errors.name && <div className="form-error">お名前を入力してください</div>}
      <span className="required">必須</span>
      <label htmlFor="email">メールアドレス</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        className="form-input"
        placeholder="Email"
        ref={register({ required: true })} />
      {errors.email && <div className="form-error">メールアドレスを入力してください</div>}
      <span className="required">必須</span>
      <label htmlFor="message">お問い合わせ内容</label>
      <br />
      <textarea
        id="message"
        name="message"
        className="form-input form-textarea"
        placeholder="お問合せ内容"
        ref={register({ required: true })} />
      {errors.message && <div className="form-error">お問い合わせ内容を入力してください</div>}
      <button className="submit-btn" type="submit">送信</button>
    </form>
  )
}
export default ContactForm;
