import '../styles/global.scss'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { AuthProvider } from '../supabase/auth'
import CssBaseline from '@mui/material/CssBaseline'
import { UserSettingsProvider } from '../contexts/UserSettingsContext'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
})

export default function App({ Component, pageProps }) {
  // TODO: Get userId from AuthProvider or pageProps if available
  const userId = null;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <UserSettingsProvider userId={userId}>
            <Component {...pageProps} />
          </UserSettingsProvider>
        </AuthProvider>
      </ThemeProvider>
    </LocalizationProvider>
  )
}