import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./app.css";

import {
  DemoCalendarPage,
  DemoHomePage,
  DemoInboxPage,
  DemoSearchPage,
  DemoSettingPage,
  DemoSidebarPage
} from 'demo';

import {
  DocsIntroduction
} from 'docs';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<DocsIntroduction />} />
        <Route path="/demo/homepage" element={<DemoHomePage />} />
        <Route path='/demo/sidebar/home' element={<DemoSidebarPage/>} />
        <Route path="/demo/inbox" element={<DemoInboxPage />} />
        <Route path="/demo/calendar" element={<DemoCalendarPage />} />
        <Route path="/demo/search" element={<DemoSearchPage />} />
        <Route path="/demo/settings" element={<DemoSettingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

