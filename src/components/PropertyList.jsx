import PropertyCard from "./PropertyCard";
import { properties } from "../data/properties";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function PropertyList() {
  const [filters, setFilters] = useState({});

  const filtered = properties.filter((prop) => {
    const min = filters.minPrice ? parseInt(filters.minPrice) : 0;
    const max = filters.maxPrice ? parseInt(filters.maxPrice) : Infinity;
    const roomCount = filters.rooms ? parseInt(filters.rooms) : null;

    return (
      prop.priceNumber >= min &&
      prop.priceNumber <= max &&
      (roomCount ? prop.rooms === roomCount : true)
    );
  });

  return (
    <>
      <SearchBar onSearch={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((prop) => (
          <PropertyCard key={prop.id} property={prop} />
        ))}
      </div>
    </>
  );
}
