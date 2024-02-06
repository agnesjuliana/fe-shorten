// App.jsx
import { Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/auth'
import routes from './routes'

function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthLayout/>} />
    </Routes>
  );
}

export default App;
