import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import HowToUse from './pages/HowToUse';
import EnterName from './pages/CreateTree/EnterName';
import ChooseTree from './pages/CreateTree/ChooseTree';
import ChooseTopper from './pages/CreateTree/ChooseTopper';
import EnterEmail from './pages/CreateTree/EnterEmail';
import SetPassword from './pages/CreateTree/SetPassword';
import MyTree from './pages/MyTree';
import ShareTree from './pages/ShareTree';
import Login from './pages/Login';
import DecorateTree from './pages/DecorateTree';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/create/name" element={<EnterName />} />
        <Route path="/create/tree" element={<ChooseTree />} />
        <Route path="/create/topper" element={<ChooseTopper />} />
        <Route path="/create/email" element={<EnterEmail />} />
        <Route path="/create/password" element={<SetPassword />} />
        <Route path="/my-tree" element={<MyTree />} />
        <Route path="/share" element={<ShareTree />} />
        <Route path="/login" element={<Login />} />
        <Route path="/decorate/:treeId" element={<DecorateTree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;