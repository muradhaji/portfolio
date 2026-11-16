import PropTypes from 'prop-types';

function Background({ label, data = [] }) {
  return (
    <div className='backgroundItem'>
      <h4 className='label'>{label}</h4>
      <div className='backgroundDatas'>
        {data.map((item) => (
          <div className='backgroundDataItem' key={item.name}>
            <p className='name'>{item.name}</p>
            {(item.start || item.end) && (
              <div className='times'>
                {item.start && <p className='start'>{item.start}</p>}
                {item.start && item.end && <span>–</span>}
                {item.end && <p className='end'>{item.end}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='line'></div>
    </div>
  );
}

Background.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      start: PropTypes.string,
      end: PropTypes.string,
    })
  ),
};

export default Background;
