import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { withErrorBoundary } from 'react-error-boundary';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Layout from './layouts/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SwapiItemLayout from './layouts/SwapiItemLayout';
import SwapiItemPage from './pages/SwapiItemPage/SwapiItemPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<SwapiItemLayout />}>
          <Route path="/:id" element={<SwapiItemPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

const WrappedApplication = withErrorBoundary(WrappedApp, {
  FallbackComponent: ErrorPage,
});

export default WrappedApplication;
