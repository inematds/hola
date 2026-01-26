import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Trail } from './pages/Trail';
import { Lesson } from './pages/Lesson';
import { ParentPanel } from './pages/Parent';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trail" element={<Trail />} />
      <Route path="/lesson/:lessonId" element={<Lesson />} />
      <Route path="/parent" element={<ParentPanel />} />
    </Routes>
  );
}
