import { useParams } from "react-router-dom";
import { properties } from "../data/properties";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <div className="p-8">Bien non trouvé.</div>;

  return (
    <div className="p-8">
      <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-xl font-bold mt-2">{property.price}</p>
      <p className="mt-4">{property.description}</p>
    </div>
  );
}
