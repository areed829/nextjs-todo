export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className=''>
        <label htmlFor='taskInput'>Task</label>
        <input id='taskInput' type='text' />
      </div>
    </div>
  );
}
