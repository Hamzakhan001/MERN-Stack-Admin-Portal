import {CssBaseline,ThemeProvider} from '@mui/material';
import createTheme from '@mui/material/styles';
import { themeSettings } from 'theme';
import { useSelector } from 'react-redux';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import { useMemo } from 'react';
import Dashboard from 'components/Screens/Dashboard';
import Layout from 'components/Screens/Layout'

function App() {
  const mode=useSelector((state)=>state.global.mode);
  const theme=useMemo(()=> createTheme(themeSettings(mode)),[mode])


  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* css reset */}
        <CssBaseline />
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
