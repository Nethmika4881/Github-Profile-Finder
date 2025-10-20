import { SearchProvider } from "./contexts/SearchContext";
import Home from "./pages/Home";
function App() {
  return (
    <SearchProvider>
      <Home />
    </SearchProvider>
  );
}

export default App;
