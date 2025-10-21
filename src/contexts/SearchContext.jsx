import { createContext, useContext, useState } from "react";

const token = import.meta.env.VITE_GITHUB_TOKEN;

const SearchContext = createContext();
const SearchProvider = function ({ children }) {
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchedObject, setSearchedObject] = useState({});
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
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
  const fetchUserRepos = async (username) => {
    if (!username) return;
    setSearchedObject({});
    try {
      setSearchLoading(true);
      setMessage("");
      const res = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token  ${token}`,
        },
      });

      if (!res.ok) throw new Error("wrong username ");
      const resJson = await res.json();
      setSearchedObject(resJson);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Error fetching repos:", err.message);
        setMessage(err.message);
      }
    } finally {
      setSearchLoading(false);
      setSearch("");
    }
  };

  return (
    <SearchContext.Provider
      value={{
        fetchUserRepos,
        searchLoading,
        setSearchLoading,
        searchedObject,
        message,
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
