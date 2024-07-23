import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { clientRoutes } from '~/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '~/Global/GlobalStyle.scss'
import '~/Global/Responsive.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {clientRoutes.map((value, index) => {
            return (
              <Route key={index} path={value.path} element={
                <value.layout>
                  <value.component />
                </value.layout>
              } />
            )
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
