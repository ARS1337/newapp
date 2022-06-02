import React from 'react';

function DisclaimerComponent(props) {
    return (
        <div className="flex flex-col items-start justify-start my-8 px-4">
        <label className="text-red-600 text-lg font-Poppins-Medium ">Disclaimer</label>
        <label className="text-sm font-Poppins-Regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices dolor non erat sollicitudin, in
          pretium ante varius. Cras lorem diam, sollicitudin eget tortor vitae, sodales faucibus massa.Nullam
          iaculis luctus metus, non interdum nulla commodo ac.
        </label>
      </div>
    );
}

export default DisclaimerComponent;