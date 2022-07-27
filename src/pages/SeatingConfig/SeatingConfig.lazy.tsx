import React, { lazy, Suspense } from 'react';

const LazySeatingConfig = lazy(() => import('./SeatingConfig'));

const SeatingConfig = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySeatingConfig {...props} />
  </Suspense>
);

export default SeatingConfig;
