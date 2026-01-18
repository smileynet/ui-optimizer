import { Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Sandbox } from './pages/Sandbox';
import { StoryIndex } from './pages/story';
import { DashboardStory } from './pages/story/DashboardStory';
import { Examples } from './pages/examples';
import { Dashboard } from './pages/examples/Dashboard';
import { Settings } from './pages/examples/Settings';
import { Ecommerce } from './pages/examples/Ecommerce';
import { DataTable } from './pages/examples/DataTable';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/story" element={<StoryIndex />} />
      <Route path="/story/dashboard" element={<DashboardStory />} />
      <Route path="/sandbox" element={<Sandbox />} />
      <Route path="/examples" element={<Examples />} />
      <Route path="/examples/dashboard" element={<Dashboard />} />
      <Route path="/examples/settings" element={<Settings />} />
      <Route path="/examples/ecommerce" element={<Ecommerce />} />
      <Route path="/examples/datatable" element={<DataTable />} />
    </Routes>
  );
}

export default App;
