"use client"
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import MaskedInput from 'react-text-mask';
import Styles from './FeedBackForm.module.css';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FeedBackForm( ) {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const pathname = usePathname();
  const initialValues = {
    name: '',
    phone: '',
    question: '',
    area: '',
    consent: false,
  };


  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[а-яА-ЯёЁ\s]+$/, 'Имя должно содержать только русские буквы и пробелы')
      .required('Поле обязательно для заполнения'),
    phone: Yup.string()
      .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Неверный формат номера телефона +7 (XXX) XXX-XX-XX')
      .required('Поле обязательно для заполнения'),
    question: Yup.string()
      .required('Поле обязательно для заполнения'),
    area: Yup.string()
      .required('Поле обязательно для заполнения'),
    consent: Yup.boolean()
      .oneOf([true], 'Необходимо дать согласие на обработку персональных данных')
      .required('Необходимо дать согласие на обработку персональных данных'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:3005/api/contact', values);
      setSuccessMessage('Сообщение отправлено!');
      resetForm();
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Произошла ошибка при отправке:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="feedback-form" className={Styles['section__form']}>
      <h2 className={Styles['h2__form']}>Получите бесплатную онлайн-консультацию</h2>
      <div className={Styles['feedback__form']}>
        <h1 className={Styles['h1']}>Оставьте заявку на онлайн-консультацию</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form >
              {successMessage && <p className={Styles['success']}>{successMessage}</p>}
              <div className={Styles['form__group']}>
                <label htmlFor="name" className={Styles['label']}>Ваше имя</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={`${Styles['input']} ${errors.name && touched.name ? Styles['error__input'] : ''}`}
                />
                {errors.name && touched.name && <p className={Styles['error']}>{errors.name}</p>}
              </div>
              <div className={Styles['form__group']}>
                <label htmlFor="phone" className={Styles['label']}>Ваш номер</label>
                <Field name="phone">
                  {({ field }) => (
                    <MaskedInput
                      {...field}
                      mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                      placeholder="+7 (___) ___-__-__"
                      className={`${Styles['input']} ${errors.phone && touched.phone ? Styles['error__input'] : ''}`}
                    />
                  )}
                </Field>
                {errors.phone && touched.phone && <p className={Styles['error']}>{errors.phone}</p>}
              </div>
              <div className={Styles['form__group']}>
                <label htmlFor="question" className={Styles['label']}>Ваш вопрос</label>
                <Field as="textarea"
                   id="question"
                   name="question"
                   className={`${Styles['textarea']} ${errors.question && touched.question ? Styles['error__textarea'] : ''}`}
                 />
                 {errors.question && touched.question && <p className={Styles['error']}>{errors.question}</p>}
               </div>
               <div className={Styles['form__group']}>
                 <label htmlFor="area" className={Styles['label']}>Область обращения:</label>
                 <Field
                   as="select"
                   id="area"
                   name="area"
                   className={`${Styles['select']} ${errors.area && touched.area ? Styles['error__select'] : ''}`}
                 >
                   <option value="">Выберите область</option>
                   <option value="Банкротство физических лиц">Банкротство физических лиц</option>
                   <option value="Жилищное право">Жилищное право</option>
                   <option value="Наследственное право">Наследственное право</option>
                   <option value="Трудовое право">Трудовое право</option>
                   <option value="Семейное право">Семейное право</option>
                   <option value="Другое">Другое</option>
                 </Field>
                 {errors.area && touched.area && <p className={Styles['error']}>{errors.area}</p>}
               </div>
               <div className={`${Styles['form__group']} ${Styles['consent__group']}`}>
                 <div className={Styles['group__checkbox']}>
                   <Field
                     type="checkbox"
                     id="consent"
                     name="consent"
                     className={Styles['checkbox']}
                   />
                   <label htmlFor="consent" className={Styles['consent']}>
                     Нажимая кнопку «Отправить», я даю свое согласие на{' '}
                     <Link href="/consent" passHref>
                  <p className={Styles['a']}>
                    обработку моих персональных данных.
                  </p>
                </Link>
                   </label>
                 </div>
                 {errors.consent && touched.consent && <p className={Styles['error']}>{errors.consent}</p>}
               </div>
               <button type="submit" disabled={loading} className={Styles['button']}>
                 {loading ? 'Отправка...' : 'Отправить'}
               </button>
             </Form>
           )}
         </Formik>
       </div>
     </section>
   );
 }




