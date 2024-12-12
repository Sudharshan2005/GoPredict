import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Login } from './components/pages/Login';
import { Home } from './components/pages/Home';
import { PredictForm } from './components/pages/PredicPage';
import { PredictionForm1 } from './components/pages/PredictionForm1';
import { PredictionForm2 } from './components/pages/PredictionForm2';
import { PredictionForm3 } from './components/pages/PredictionForm3';
import { PredictionForm4 } from './components/pages/PredictionForm4';

import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className=" w-full bg-gradient-to-b from-black to-blue-gray-900">
        <div>
          {/* Routes */}
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='home' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
            <Route path='predict-page' element={<ProtectedRoute> <PredictForm /> </ProtectedRoute>} />
            <Route path='predict-page/prediction-form1'  element={<ProtectedRoute><PredictionForm1 /></ProtectedRoute>} />
            <Route path='predict-page/prediction-form2' element={<ProtectedRoute><PredictionForm2 /></ProtectedRoute>} />
            <Route path='predict-page/prediction-form3'  element={<ProtectedRoute><PredictionForm3 /></ProtectedRoute>} />
            <Route path='predict-page/prediction-form4' element={<ProtectedRoute><PredictionForm4 /></ProtectedRoute>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
