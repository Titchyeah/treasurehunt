
function DescriptionCard( { image, description }) {


  return (
    <div className="w-96 h-144 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center">
      <div className="font-bold text-center text-xl mb-2">Description</div>
    <img className="w-full h-48 object-contain" src={image} alt="Treasure" />
    <div className="px-6 py-4 text-center">
    </div>
  </div>
  );
}


export default DescriptionCard;