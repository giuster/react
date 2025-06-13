import PropertyList from "../components/PropertyList";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Biens Immobiliers à Vendre</h1>
      <PropertyList />
    </div>
  );
}
