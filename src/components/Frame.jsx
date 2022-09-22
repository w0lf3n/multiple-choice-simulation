/* eslint-disable padded-blocks */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Frame({ title, children }) {

  const [minimized, toggleMinimize] = useState(false);
  const hidden = (minimized) ? ' Hide' : '';

  console.log('Render Frame', title);
  return (
    <div className={`Frame${hidden}`}>
      <div className="Header">
        <h2 className="Title">
          {title}
        </h2>
        <button type="button" aria-label="Minimize" onClick={() => toggleMinimize(!minimized)} className="Minimize" />
      </div>
      <div className={`Body${hidden}`}>
        {children}
      </div>
    </div>
  );
}

Frame.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

Frame.defaultProps = {
  children: null,
};

export default Frame;
