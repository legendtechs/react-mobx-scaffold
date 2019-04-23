import React, { lazy, Suspense } from 'react';
import Loader from '../components/common/Loader';

const routes = [{
  key: 'demo',
  bundle: () => import('../components/Demo'),
  path: '/demo'
}, {
  key: 'detail',
  bundle: () => import('../components/Demo/Detail'),
  path: '/detail'
}];

const finalRoutes = routes.map(route => {
  const LazyComponent = lazy(route.bundle);
  const final = () => (<Suspense fallback={<Loader></Loader>}>
    <LazyComponent></LazyComponent>
  </Suspense>);
  return {
    path: route.path,
    component: final,
    exact: true
  }
})
export default finalRoutes;