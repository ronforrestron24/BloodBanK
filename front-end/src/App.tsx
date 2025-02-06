import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';
import BloodInventory from './components/BloodInventory';
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <BloodInventory />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
