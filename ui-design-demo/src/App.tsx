import { Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Sandbox } from './pages/Sandbox';
import { StoryIndex } from './pages/story';
import { DashboardStory } from './pages/story/DashboardStory';
import { SettingsStory } from './pages/story/SettingsStory';
import { EcommerceStory } from './pages/story/EcommerceStory';
import { DataTableStory } from './pages/story/DataTableStory';
import { TradingPlatformStory } from './pages/story/TradingPlatformStory';
import { Examples } from './pages/examples';
import { Dashboard } from './pages/examples/Dashboard';
import { Settings } from './pages/examples/Settings';
import { Ecommerce } from './pages/examples/Ecommerce';
import { DataTable } from './pages/examples/DataTable';
import { TradingPlatform } from './pages/examples/TradingPlatform';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/story" element={<StoryIndex />} />
      <Route path="/story/dashboard" element={<DashboardStory />} />
      <Route path="/story/settings" element={<SettingsStory />} />
      <Route path="/story/ecommerce" element={<EcommerceStory />} />
      <Route path="/story/datatable" element={<DataTableStory />} />
      <Route path="/story/trading" element={<TradingPlatformStory />} />
      <Route path="/sandbox" element={<Sandbox />} />
      <Route path="/examples" element={<Examples />} />
      <Route path="/examples/dashboard" element={<Dashboard />} />
      <Route path="/examples/settings" element={<Settings />} />
      <Route path="/examples/ecommerce" element={<Ecommerce />} />
      <Route path="/examples/datatable" element={<DataTable />} />
      <Route path="/examples/trading" element={<TradingPlatform />} />
    </Routes>
  );
}

export default App;
