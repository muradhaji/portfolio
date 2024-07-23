import PropTypes from 'prop-types';

function Background({ label = 'No label', data }) {
  return (
    <div className='backgroundItem'>
      <h3 className='label'>{label}</h3>
      <div className='backgroundDatas'>
        {data
          ? data.map((obj, i) => (
              <div className='backgroundDataItem' key={i}>
                <p className='name'>{obj.name ? obj.name : 'No name'}</p>
                <div className='times'>
                  <p className='start'>{obj.start ? obj.start : 'No start'}</p>
                  <span>-</span>
                  <p className='end'>{obj.end ? obj.end : 'No end'}</p>
                </div>
              </div>
            ))
          : 'No background data'}
      </div>
      <div className='line'></div>
    </div>
  );
}

export default Background;

Background.propTypes = {
  label: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      start: PropTypes.string,
      end: PropTypes.string,
    })
  ),
};
