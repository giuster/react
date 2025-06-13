import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rooms, setRooms] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ minPrice, maxPrice, rooms });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-4 flex-wrap">
      <input
        type="number"
        placeholder="Prix min"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Prix max"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Nombre de pièces"
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
        className="border p-2 rounded"
      />
      <button className="bg-blue-500 text-white px-4 rounded">Rechercher</button>
    </form>
  );
}
