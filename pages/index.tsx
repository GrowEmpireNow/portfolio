import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Danny Lev</title>
        <meta name='description' content='CMO as a Service' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-5 py-20 min-h-screen relative flex md:items-center'>
        <div className='container relative z-20 mx-auto'>
          <div className='flex flex-col gap-2 md:gap-8 text-center'>
            <h1 className='text-6xl md:text-9xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-slate-50 via-slate-100 to-slate-400'>
              Danny Lev
            </h1>
            <p className='text-base md:text-2xl opacity-70'>
              I&apos;m too busy creating other companies&apos; sites :)
            </p>
          </div>

          <form
            autoComplete='new-password'
            className='w-full max-w-lg mx-auto mt-16 flex flex-col gap-4 items-start'
            action='https://usebasin.com/f/4ded76266710'
            method='POST'>
            <div className='relative z-0 w-full'>
              <input
                type='email'
                id='email'
                autoComplete='off'
                className='block py-2.5 px-0 w-full text-sm text-slate-50 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-100 peer'
                placeholder=' '
                required
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
              />
              <label
                htmlFor='email'
                className='absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-100 peer-focus:dark:text-slate-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                Email
              </label>
            </div>
            <button
              className='px-9 py-2 border border-slate-50 text-lg font-medium rounded transition duration-500 hover:bg-purple-700 hover:border-purple-700'
              type='submit'>
              Submit
            </button>
          </form>
        </div>

        {/* <div className='absolute inset-0 pointer-events-none top-auto left-auto w-3/6 -right-48 -bottom-48 aspect-square opacity-70 rounded-full bg-red-600 filter blur-xl' /> */}
      </main>
    </>
  );
}
