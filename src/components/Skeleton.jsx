const LINE_COUNT = 4;

function Skeleton() {
  return (
    <div className='skeleton'>
      {Array.from({ length: LINE_COUNT }, (_, i) => (
        <div className='line' key={i}></div>
      ))}
    </div>
  );
}

export default Skeleton;
