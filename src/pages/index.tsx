export default function Home() {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <form className='bg-white p-6 rounded shadow-md w-full max-w-md'>
          <div className='mb-4'>
            <label htmlFor='todo' className='block mb-2 text-sm font-bold'>
              Todo:
            </label>
            <input
              type='text'
              id='todo'
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
