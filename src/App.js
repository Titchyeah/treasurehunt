import { useState } from 'react';
import TreasureCard from './components/TreasureCard';
import DescriptionCard from './components/DescriptionCard';
import Belt from './images/belt.png';
import Blanket from './images/book.png';
import Book from './images/blanket.png';
import Bowl from './images/bowl.png';
import Cake from './images/cake.png';
import Cd from './images/cd.png';
import Chair from './images/chair.png';
import Coat from './images/coat.png';
import CuddlyToy from './images/cuddlyToy.png';
import Drink from './images/drink.png';
import Dvd from './images/dvd.png';
import Earring from './images/earring.png';
import Envelope from './images/envelope.png';
import Flower from './images/flower.png';
import Fridge from './images/fridge.png';
import Fruit from './images/fruit.png';
import Hairbrush from './images/hairbrush.png';
import Hat from './images/hat.png';
import HolidaySouvenir from './images/holidaySouvenir.png';
import Instrument from './images/instrument.png';
import Jumper from './images/jumper.png';
import KitchenUtensil from './images/kitchenUtensil.png';
import Lipstick from './images/lipstick.png';
import Magazine from './images/magazine.png';
import Mug from './images/mug.png';
import NailPolish from './images/nailPolish.png';
import Necklace from './images/necklace.png';
import Ornament from './images/ornament.png';
import Pen from './images/pen.png';
import Pencil from './images/pencil.png';
import Perfume from './images/perfume.png';
import PhotoFrame from './images/photoFrame.png';
import Photograph from './images/photograph.png';
import Pillowcase from './images/pillowcase.png';
import Plant from './images/plant.png';
import Scarf from './images/scarf.png';
import Shoe from './images/shoe.png';
import Skirt from './images/skirt.png';
import Soap from './images/soap.png';
import Sock from './images/sock.png';
import Sponge from './images/sponge.png';
import Spoon from './images/spoon.png';
import Tin from './images/tin.png';
import Toothbrush from './images/toothbrush.png';
import Towel from './images/towel.png';
import Toy from './images/toy.png';
import Tshirt from './images/tshirt.png';
import Umbrella from './images/umbrella.png';
import Vegetable from './images/vegetable.png';

import Blue from './fonts/blue.png';
import Small from './fonts/small.png';
import Large from './fonts/large.png';
import Weird from './fonts/weird.png';
import Old from './fonts/old.png';
import Shiny from './fonts/shiny.png';
import New from './fonts/new.png';
import Yellow from './fonts/yellow.png';
import Green from './fonts/green.png';
import Soft from './fonts/soft.png';
import Hard from './fonts/hard.png';
import Round from './fonts/round.png';
import Thin from './fonts/thin.png';
import Wooden from './fonts/wooden.png';
import Quirky from './fonts/quirky.png';
import Flat from './fonts/flat.png';

function App() {
  const images = [
    Belt,
    Blanket,
    Book,
    Bowl,
    Cake,
    Cd,
    Chair,
    Coat,
    CuddlyToy,
    Drink,
    Dvd,
    Earring,
    Envelope,
    Flower,
    Fridge,
    Fruit,
    Hairbrush,
    Hat,
    HolidaySouvenir,
    Instrument,
    Jumper,
    KitchenUtensil,
    Lipstick,
    Magazine,
    Mug,
    NailPolish,
    Necklace,
    Ornament,
    Pen,
    Pencil,
    Perfume,
    PhotoFrame,
    Photograph,
    Pillowcase,
    Plant,
    Scarf,
    Shoe,
    Skirt,
    Soap,
    Sock,
    Sponge,
    Spoon,
    Tin,
    Toothbrush,
    Towel,
    Toy,
    Tshirt,
    Umbrella,
    Vegetable,
  ];
  const descriptions = [
    'Belt',
    'Blanket',
    'Book',
    'Bowl',
    'Cake',
    'Cd',
    'Chair',
    'Coat',
    'Cuddly Toy',
    'Drink',
    'Dvd',
    'Earring',
    'Envelope',
    'Flower',
    'Fridge',
    'Fruit',
    'Hairbrush',
    'Hat',
    'Holiday Souvenir',
    'Instrument',
    'Jumper',
    'Kitchen Utensil',
    'Lipstick',
    'Magazine',
    'Mug',
    'Nail Polish',
    'Necklace',
    'Ornament',
    'Pen',
    'Pencil',
    'Perfume',
    'Photo Frame',
    'Photograph',
    'Pillowcase',
    'Plant',
    'Scarf',
    'Shoe',
    'Skirt',
    'Soap',
    'Sock',
    'Sponge',
    'Spoon',
    'Tin',
    'Toothbrush',
    'Towel',
    'Toy',
    'Tshirt',
    'Umbrella',
    'Vegetable',
  ];
  const fonts = [
    Blue,
    Small,
    Large,
    Weird,
    Old,
    Shiny,
    New,
    Yellow,
    Green,
    Soft,
    Hard,
    Round,
    Thin,
    Wooden,
    Quirky,
    Flat
  ];
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [font, setFont] = useState();

  const handleClick = () => {
    const randomClicks = 15; /*Math.floor(Math.random() * 10) + 1;*/ // Random number of clicks between 1 and 10
    chooseRandomImage(randomClicks);
  };

  const chooseRandomImage = (clicks) => {
    let counter = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      const randomIndex2 = Math.floor(Math.random() * fonts.length);
      setImage(images[randomIndex]);
      setDescription(descriptions[randomIndex]);
      setFont(fonts[randomIndex2]);
      counter++;
      if (counter === clicks) {
        clearInterval(interval);
      }
    }, 200); // Adjust interval duration as needed
  };

  // const chooseNewItem = () => {
  //   const index1 = Math.floor(Math.random() * images.length);
  //   const index2 = Math.floor(Math.random() * descriptions.length);
  //   setImage(images[index1]);
  //   // setObject(objects[index1]);
  //   setDescription(descriptions[index2]);
  // };

  return (
    <div className="flex flex-col h-screen w-screen bg-blue-200 items-center">
      <div><h1 className="text-lg font-bold m-8">Treasure Hunt</h1></div>
      <div className="flex justify-center gap-x-3">
        <DescriptionCard image={font} description={description} />
        <TreasureCard title="Object" image={image} description={description} />
      </div>
      <div>
      <button
        className="m-4 p-3 border-4 border-white bg-blue-500 text-white rounded-full"
        onClick={handleClick}
        >
        New Item
      </button>
        </div>
    </div>
  );
}

export default App;
