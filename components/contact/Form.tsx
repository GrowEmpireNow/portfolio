import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import Container from '../Container';

const emailRegExp = /^\S+@\S+\.\S+$/;

type Inputs = { name: string; email: string; message: string };

const schema = yup
  .object({
    name: yup.string().required('Please fill your name'),
    email: yup
      .string()
      .email('Email must be a valid email')
      .matches(emailRegExp, 'Email is not valid')
      .required('Email is required'),
    message: yup.string().required('How can I help?'),
  })
  .required();

const Form = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE ?? '',
          process.env.NEXT_PUBLIC_TEMPLATE ?? '',
          data,
          process.env.NEXT_PUBLIC_USER
        )
        .then(() => {
          setSuccess(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <Container>
        {success ? (
          <div className='flex flex-col gap-3 mx-auto container mt-16'>
            <h2 className='font-medium text-xl'>Thank You!</h2>
          </div>
        ) : (
          <form
            autoComplete='new-password'
            className='w-full mt-16'
            onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-6 max-w-md mb-6'>
              {/* name */}
              <div className='relative z-0 w-full'>
                <input
                  autoComplete='off'
                  className='block py-2.5 rounded-none px-0 w-full text-sm text-slate-50 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-100 peer'
                  placeholder=' '
                  {...register('name')}
                />
                <label
                  htmlFor='name'
                  className='absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-100 peer-focus:dark:text-slate-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Name
                </label>
                {errors.name && (
                  <p className='text-red-500 text-xs mt-2'>
                    {errors.name?.message}
                  </p>
                )}
              </div>
              {/* email */}
              <div className='relative z-0 w-full'>
                <input
                  autoComplete='off'
                  className='block py-2.5 rounded-none px-0 w-full text-sm text-slate-50 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-100 peer'
                  placeholder=' '
                  {...register('email')}
                />
                <label
                  htmlFor='email'
                  className='absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-100 peer-focus:dark:text-slate-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Email
                </label>
                {errors.email && (
                  <p className='text-red-500 text-xs mt-2'>
                    {errors.email?.message}
                  </p>
                )}
              </div>
              {/* message */}
              <div className='relative z-0 w-full'>
                <textarea
                  autoComplete='off'
                  id='message'
                  className='block py-2.5 px-0 w-full rounded-none text-sm text-slate-50 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-100 peer'
                  {...register('message')}
                  placeholder=' '
                />
                <label
                  htmlFor='message'
                  className='absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-100 peer-focus:dark:text-slate-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Message
                </label>
              </div>
            </div>

            <button
              className='px-9 py-2 border border-slate-50 text-lg font-medium rounded transition duration-500 hover:bg-purple-700 hover:border-purple-700'
              type='submit'>
              Submit
            </button>
          </form>
        )}
      </Container>
    </section>
  );
};

export default Form;
