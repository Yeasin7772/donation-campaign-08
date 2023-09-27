import { useLoaderData, useLocation } from "react-router-dom";
import SearchCard from "./SearchCard";


const SearchItems = () => {
    const location = useLocation()
    const value = location.state.inputValue
    console.log(value)

    function capitalizeWords(string) {
        return string.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
    }
    const capital = capitalizeWords(value)
    console.log(capital)


    const cardData = useLoaderData()
    const filterData = cardData.filter(item => item.name == capital)

    console.log(filterData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                filterData?.length > 0 ? filterData.map(data => <SearchCard key={data.id} data={data}></SearchCard>) : 
                <div>
                    <div className="flex justify-center items-center">
                       <h1 className="text-center text-5xl mt-6">No Found</h1>
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchItems;