import React from 'react'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import Select from 'react-select'
import customStyles from './customStyleSelect'
import quotationSchema from './validation-squema'
import './form-quotation-styles.scss'

const FormQuotation = ({
  t,
}) => {
  const howOptions = [
    { label: t('quotation.form.how.google'), value: 'google' },
    { label: t('quotation.form.how.facebook'), value: 'facebook' },
    { label: t('quotation.form.how.instagram'), value: 'instagram' },
    { label: t('quotation.form.how.family'), value: 'family' },
    { label: t('quotation.form.how.friends'), value: 'friends' },
    { label: t('quotation.form.how.events'), value: 'events' },
    { label: t('quotation.form.how.billboards'), value: 'billboards' },
    { label: t('quotation.form.how.viber'), value: 'viber' },
    { label: t('quotation.form.how.others'), value: 'others' },
  ]

  const purposeOptions = [
    { label: t('quotation.form.purpose.medical'), value: 'medical' },
    { label: t('quotation.form.purpose.travel'), value: 'travel' },
    { label: t('quotation.form.purpose.others'), value: 'others' },
  ]

  const timeOptions = [
    { label: '08:00 - 10:00', value: '08:00-10:00' },
    { label: '10:00 - 12:00', value: '10:00-12:00' },
    { label: '12:00 - 14:00', value: '12:00-14:00' },
    { label: '14:00 - 16:00', value: '14:00-16:00' },
    { label: '16:00 - 18:00', value: '16:00-18:00' },
    { label: '18:00 - 20:00', value: '18:00-20:00' },
    { label: '20:00 - 22:00', value: '20:00-22:00' },
  ]

  const RadioButton = ({
    field: {
      name, value, onChange, onBlur,
    },
    id,
    label,
    className,
    ...props
  }) => (
    <div className="radioButton__container">
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className="radioButton"
        {...props}
      />
      <label htmlFor={id}>
        {label}
      </label>
    </div>
  )

  const SelectField = ({
    options,
    field,
    form,
  }) => {
    return (
      <Select
        placeholder={''}
        options={options}
        name={field.name}
        value={options ? options.find((option) => option.value === field.value) : ''}
        onChange={(option) => form.setFieldValue(field.name, option.value)}
        onBlur={field.onBlur}
        styles={customStyles}
      />

    )
  }

  return (
    <div className="formQuotation__container">
      <Formik
        // innerRef={formRef}
        initialValues={{
          firstName: '',
          lastName: '',
          age: '',
          occupation: '',
          location: '',
          purpose: '',
          plan: '',
          email: '',
          phone: '',
          reach: '',
          when: '',
          what: '',
          others: '',
          message: '',
          data: '',
          accept: '',
        }}
        validationSchema={quotationSchema}
      >
        {() => (
          <Form>
            <div className="formQuotation__form__title ">
              <p>{t('quotation.form.personal')}</p>
            </div>
            <div className="row">
              <div className="col-sm-6 formQuotation__form__group">
                <label className="" htmlFor="location">{t('quotation.form.firstName')}</label>
                <Field type="text" name="firstName" className="input" placeholder={t('quotation.form.firstName')} />
                <ErrorMessage className="" name="firstName" component="div" />
              </div>
              <div className="col-sm-6 formQuotation__form__group">
                <label className="" htmlFor="lastName">{t('quotation.form.lastName')}</label>
                <Field placeholder={t('quotation.form.lastName')} className="input" type="text" name="lastName" />
                <ErrorMessage className="" name="lastName" component="div" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 formQuotation__form__group">
                <label className="" htmlFor="age">{t('quotation.form.age')}</label>
                <Field type="text" name="age" className="input" placeholder={t('quotation.form.age')} />
                <ErrorMessage className="" name="age" component="div" />
              </div>
              <div className="col-sm-6 formQuotation__form__group">
                <label className="" htmlFor="occupation">{t('quotation.form.occupation')}</label>
                <Field placeholder={t('quotation.form.occupation')} className="input" type="text" name="occupation" />
                <ErrorMessage className="" name="occupation" component="div" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 formQuotation__form__group">
                <label className="" htmlFor="location">{t('quotation.form.location')}</label>
                <Field type="text" name="location" className="input" placeholder={t('quotation.form.location')} />
                <ErrorMessage className="" name="location" component="div" />
              </div>
            </div>

            <div className="formQuotation__form__title up">
              <p>{t('quotation.form.quotation')}</p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-12 formQuotation__form__group">
                <label className="" htmlFor="when">{t('quotation.form.purpose.title')}</label>
                <Field
                  name={'purpose'}
                  component={SelectField}
                  options={purposeOptions}
                  type="purpose"
                />
              </div>
              <div className="col-sm-6 col-12 formQuotation__form__group">
                <label className="" htmlFor="purpose">{t('quotation.form.plan')}</label>
                {/* <Field
                  name={'how'}
                  component={SelectField}
                  options={purposeOptions}
                  type="how"
                /> */}
              </div>
            </div>

            <div className="formQuotation__form__title up">
              <p>{t('quotation.form.availability')}</p>
            </div>
            <div className="row">
              <div className="col-sm-6 formQuotation__form__group">
                <label className="" htmlFor="contact">{t('quotation.form.contact')}</label>
                <Field type="text" name="contact" className="input" placeholder={t('quotation.form.contact')} />
                <ErrorMessage className="" name="contact" component="div" />
              </div>
              <div className="col-sm-6 formQuotation__form__group">
                <label className="" htmlFor="email">{t('quotation.form.email')}</label>
                <Field placeholder={t('quotation.form.email')} className="input" type="text" name="email" />
                <ErrorMessage className="" name="email" component="div" />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 formQuotation__form__group">
                <label className="" htmlFor="reach">{t('quotation.form.reach.title')}</label>
                <div role="group" aria-labelledby="reach-radio-group">
                  <Field
                    component={RadioButton}
                    name="reach"
                    id="phone"
                    label={t('quotation.form.reach.phone')}
                  />
                  <Field
                    component={RadioButton}
                    name="reach"
                    id="email"
                    label={t('quotation.form.reach.email')}
                  />
                  <Field
                    component={RadioButton}
                    name="reach"
                    id="both"
                    label={t('quotation.form.reach.both')}
                  />
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 formQuotation__form__group">
                <label className="" htmlFor="when">{t('quotation.form.when.title')}</label>
                <div role="group" aria-labelledby="when-radio-group">
                  <Field
                    component={RadioButton}
                    name="when"
                    id="phone"
                    label={t('quotation.form.when.weekdays')}
                  />
                  <Field
                    component={RadioButton}
                    name="when"
                    id="email"
                    label={t('quotation.form.when.weekends')}
                  />
                  <Field
                    component={RadioButton}
                    name="when"
                    id="both"
                    label={t('quotation.form.when.specific')}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 formQuotation__form__group">
                <label className="" htmlFor="when">{t('quotation.form.what.title')}</label>
                <Field
                  name={'what'}
                  component={SelectField}
                  options={timeOptions}
                  type="what"
                />
                <ErrorMessage className="" name="message" component="div" />
              </div>
            </div>

            <div className="formQuotation__form__title up">
              <p>{t('quotation.form.others')}</p>
            </div>
            <div className="row">
              <div className="col-sm-12 formQuotation__form__group">
                <label className="" htmlFor="when">{t('quotation.form.how.title')}</label>
                <Field
                  placeholder="test"
                  name={'how'}
                  component={SelectField}
                  options={howOptions}
                  type="how"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 formQuotation__form__group">
                <label className="" htmlFor="when">{t('quotation.form.free')}</label>
                <Field
                  component="textarea"
                  rows={4}
                  name="message"
                  className="textarea"
                />
                <ErrorMessage className="" name="message" component="div" />
              </div>
            </div>

            <div className="formQuotation__box__checkbox">
              <label className="formQuotation__checkbox">
                {t('quotation.form.procced')}
                <Field type="checkbox" name="data" />
                <span className="formQuotation__checkbox__span"></span>
              </label>
            </div>
            <div className="formQuotation__box__checkbox">
              <label className="formQuotation__checkbox">
                {t('quotation.form.accept')}
                <Field type="checkbox" name="accept" />
                <span className="formQuotation__checkbox__span"></span>
              </label>
            </div>
            <div className="formQuotation__button__box">
              <button
                onClick={() => console.log('hi')}
                className="formQuotation__button">
                <span>{t('quotation.form.button')}</span>
              </button>
            </div>

            <div className="">
              {/* todo */}
              {/* {successEmail && <span className={styles.formPayment__message__success}>{t('contact.form.success')}</span>}
              {errorEmail && <span className={styles.formPayment__message__error}>{t('contact.form.error')}</span>} */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormQuotation
