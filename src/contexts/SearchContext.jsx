import { createContext, useContext, useState } from "react";

const SearchContext = createContext();
const SearchProvider = function ({ children }) {
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  //   useEffect(() => {
  //     const controller = new AbortController();
  //     if (!search) return;
  //     const fetchUserRepos = async () => {
  //       try {
  //         const res = await fetch(`https://api.github.com/users/${search}`, {
  //           signal: controller.signal,
  //         });
  //         if (!res.ok) throw new Error("👎 wrong username ");
  //         const resJson = await res.json();
  //         console.log(resJson);
  //       } catch (err) {
  //         if (err.name !== "AbortError") {
  //           console.error("Error fetching repos:", err.message);
  //         }
  //       }
  //     };
  //     fetchUserRepos();
  //     return function () {
  //       controller.abort();
  //     };
  //   }, [search]);

  const fetchUserRepos = async () => {
    try {
      setSearchLoading(true);
      const res = await fetch(`https://api.github.com/users/${search}`);
      if (!res.ok) throw new Error("👎 wrong username ");
      const resJson = await res.json();
      console.log(resJson);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Error fetching repos:", err.message);
      }
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        fetchUserRepos,
        searchLoading,
        setSearchLoading,
        search,
        setSearch,
      }}
    >
      {children}{" "}
    </SearchContext.Provider>
  );
};

const useSearch = function () {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useSearch, SearchProvider };
