import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";
import Search from "../components/Dashboard/Search";
import Pagination from "../components/Dashboard/Pagination";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
import { get100Coins } from "../functions/get100Coins";
import CryptoFallback from "../components/Common/FallBack";
import ClearButton from "../components/Common/ClearButton";
import Button from "../components/Common/Button";
const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };
  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );
   
function handleClearSearch(){
  setSearch("")
}
  
  useEffect(() => {
    getData();
    // axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&per_page=100&page=1"
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     setCoins(response.data);
    //     setPaginatedCoins(response.data.slice(0, 10));
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setIsLoading(false);
    //   });
  }, []);
  const getData = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const myCoins = await get100Coins();
      if (!myCoins) {
        // setCoins(myCoins);
        // setPaginatedCoins(myCoins.slice(0, 10));
        // setIsLoading(false);
        throw new Error("No Coin data")
      }
      setCoins(myCoins)
      setPaginatedCoins(myCoins.slice(0,10))
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  console.log("the.........",coins.length)
  return (
    <>
      <Header />
      <BackToTop />
      {error ? (
        <CryptoFallback message="Failed to load coin data" onRetry={getData} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          
         {filteredCoins.length==0?<div className="clear-search-text-button">
          <h1 className="clear-search-text">No Coins Found</h1>
          <Button text={"Clear Search"} onClick={handleClearSearch}/>
         </div>:<TabsComponent coins={search ? filteredCoins : paginatedCoins} />}
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default DashboardPage;
