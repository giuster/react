import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <div className="border rounded p-4 shadow-sm">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover mb-2 rounded" />
      <h3 className="text-xl font-semibold">{property.title}</h3>
      <p className="text-gray-600">{property.location}</p>
      <p className="font-bold mt-2">{property.price}</p>
      <Link to={`/property/${property.id}`} className="text-blue-500 mt-2 block">Voir plus</Link>
    </div>
  );
}
