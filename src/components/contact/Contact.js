import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { Formik } from 'formik';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_l18n06m',
        'template_47cbhz8',
        form.current,
        'LTPl2bC9lLV-Wox5B'
      )
      .then(
        (result) => {
          alert('Message Sent!');
          console.log('good', result.text);
        },
        (error) => {
          console.log('bad', error.text);
        }
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>qiqiliangjob@gmail.com</h5>
            <a href='mailto:qiqiliangjob@gmail.com' target='_blank'>
              Send a Message
            </a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>9294208210</h5>
            <a href='tel:+9294208210' target='_blank'>
              Contact Me
            </a>
          </article>
        </div>

        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            sendEmail();
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} ref={form}>
              <input
                type='text'
                name='name'
                placeholder='Your Full Name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}

              <textarea
                name='message'
                rows={7}
                placeholder='Your Message'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                style={{ width: '100%' }}
              />
              {errors.message && touched.message && errors.message}
              <button
                type='submit'
                className='btn btn-primary'
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}
