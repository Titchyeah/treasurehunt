function TreasureCard({ title, image, description }) {
  return (
    <div className="w-96 h-144 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center">
      <div className="font-bold text-center text-xl mb-2">Treasure</div>
      <img className="w-full h-48 object-contain" src={image} alt="Treasure" />
      <div className="px-6 py-4 text-center">
        <p className="text-gray-700 text-xl font-bold">{description}</p>
      </div>
    </div>
  );
}

export default TreasureCard;
