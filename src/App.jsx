import Router from './router';
import GlobalStyles from './styles/GlobalStyles';
import { MusicProvider } from "../src/components/context/MusicContext";
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <MusicProvider>
      <GlobalStyles />
      <Router />
      <MusicPlayer />
    </MusicProvider>
  );
}

export default App;
