import { Navigate, Route, Routes } from 'react-router-dom';
import SelectScreen from '../screens/select-screen/SelectScreen';
import SummaryScreen from '../screens/summary-screen/SummaryScreen';
import WelcomeScreen from '../screens/welcome-screen/WelcomeScreen';

export default function Router() {
  return (
    <Routes>
      <Route index element={<WelcomeScreen />} />
      <Route path="/select" element={<SelectScreen />} />
      <Route path="/summary/:figureId" element={<SummaryScreen />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
