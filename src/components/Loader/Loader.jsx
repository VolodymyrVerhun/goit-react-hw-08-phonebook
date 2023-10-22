import React from 'react';
import { RevolvingDot } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div>
      <RevolvingDot
        radius="45"
        strokeWidth="5"
        color="red"
        secondaryColor="green"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
