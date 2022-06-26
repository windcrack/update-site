// import logo from './logo.svg';
import Header from '../Header';
import Main from '../../Pages/Main';
import Aside from '../Aside';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from '../Footer';
import Timetable from '../../Pages/Timetable';
import Literature from '../../Pages/Literature';
import Members from '../../Pages/Members';
import Newmember from '../../Pages/Newmember';
import Twelvestep from '../../Pages/Twelvestep';
import Howcan from '../../Pages/Howcan';
import AnMeeting from '../../Pages/AnMeeting';
import OpenMeeting from '../../Pages/OpenMeeting';

function App() {
  return (
    <div className="App">
      <Router>
        <Aside />
        <Header />
        <Routes>
          <Route exack path="/" element={<Main />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/newmember" element={<Newmember />} />
          <Route path="/members" element={<Members />} />
          <Route path="/twelvestep" element={<Twelvestep />} />
          <Route path="/howcan" element={<Howcan />} />
          <Route path="/an-meeting" element={<AnMeeting />} />
          <Route path="/open-meeting" element={<OpenMeeting />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
