import React from 'react';
import type { NextPage } from 'next';
import UserIcon from 'assets/images/contact-info/user.svg';
import EmailIcon from 'assets/images/contact-info/email.svg';
import PhoneCallIcon from 'assets/images/contact-info/phonecall.svg';
import PencilIcon from 'assets/images/contact-info/pencil.svg';
import BackgroundBottom from 'assets/images/coming-soon.svg';
import Input from 'components/input';
import TextArea from 'components/text-area';
import Button from 'components/button';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ERRORS } from 'utils/constant';
import classNames from 'classnames/bind';
import styles from './contact-info.module.scss';
const cx = classNames.bind(styles);

interface InitValues {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Review: NextPage = () => {
  const { handleSubmit, setSubmitting, errors, handleChange, values, resetForm } = useFormik({
    validateOnChange: false,
    initialValues: { name: '', email: '', phone: '', message: '' } as InitValues,
    onSubmit: async (values) => {
      const rawResponse = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      await rawResponse.json();
      setSubmitting(false);
      resetForm();
    },
    validationSchema: () => {
      return Yup.object().shape({
        name: Yup.string().max(1000, ERRORS.E3('Name', 1000)),
        email: Yup.string().max(1000, ERRORS.E3('Email', 1000)),
        phone: Yup.string().max(1000, ERRORS.E3('Phone', 1000)),
        message: Yup.string().max(1000, ERRORS.E3('Message', 1000)),
      });
    },
  });

  const scrollToError = () => {
    const validErrors = Object.keys(errors);
    if (validErrors.length > 0) {
      const element = document.getElementById(validErrors[0]);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  };

  return (
    <section className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('section-header')}>
          <h2 data-aos="fade-up" data-aos-duration="1000" className={cx('header-title')}>
            Contact Info
          </h2>
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Get in touch
          </h2>
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Subscribe for the latest GoDatingFi updates and new version release for dating apps on the Web3, SocialFi,
            Polygon
          </h2>
        </div>
        <article data-aos="fade-up" data-aos-duration="1000" className={cx('form-contact')}>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              e.preventDefault();
            }}
          >
            <div className={cx('input-info')}>
              <Input
                name="name"
                value={values.name}
                onChange={handleChange}
                preIcon={<UserIcon />}
                placeholder="Your name"
              />
              <Input
                name="email"
                value={values.email}
                onChange={handleChange}
                preIcon={<EmailIcon />}
                placeholder="Your email"
              />
              <Input
                name="phone"
                value={values.phone}
                onChange={handleChange}
                preIcon={<PhoneCallIcon />}
                placeholder="Your phone"
              />
            </div>
            <TextArea
              name="message"
              value={values.message}
              onChange={handleChange}
              maxLength={1000}
              preIcon={<PencilIcon />}
              placeholder="Enter message"
            />

            <div className={cx('group-btn')}>
              <Button className={cx('btn-contact-info')} type="submit" onClick={scrollToError}>
                Send message
              </Button>
            </div>
          </form>
        </article>
      </div>
      <BackgroundBottom className={cx('bg-coming-soon')} />
    </section>
  );
};

export default Review;
