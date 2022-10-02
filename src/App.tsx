import React from 'react';
import styles from './styles/App.module.scss';
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Rules from './pages/Rules/Rules';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Security from './pages/Security/Security';

interface IApp {
  children?: any;
}

function App({ children }: IApp) {
  return (
    <main className={styles.page}>
      <div className={styles.page + ' _container'}>
        <div className={styles.page__body}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/rules' element={<Rules />} />
            <Route path='/security' element={<Security/>}/>
            <Route path='*' element={<Navigate to='/404' replace/>} />
            <Route path='/404' element={<PageNotFound/>}/>
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;