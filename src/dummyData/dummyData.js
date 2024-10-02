import Img from '../assets/Car1.png'
import Img1 from '../assets/Car2.png'
import Img2 from '../assets/Car3.png'
import Img3 from '../assets/Car4.png'
import Img4 from '../assets/chair.png'
import Img5 from '../assets/couch.png'
import Img6 from '../assets/couch1.png'
import Img7 from '../assets/couch3.png'


export const cars= [
    {
        id: 1,
        title: 'Toyota Camry New',
        subtitle: '3.5 D5 PowerPulse Momentum 5dr',
        mileage: '20 Miles',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        img:Img,
        price:1300,
      },
      {
        id: 2,
        title: 'Honda Accord',
        subtitle: '2.0 VTEC Turbo Sport 5dr',
        mileage: '15 Miles',
        fuelType: 'Petrol',
        transmission: 'Manual',
         img:Img1,
         price:1100,
      },
      {
        id: 3,
        title: 'Tesla Model S',
        subtitle: 'Long Range Plus 5dr',
        mileage: '30 Miles',
        fuelType: 'Electric',
        transmission: 'Automatic',
         img:Img2,
         price:1900,
      },
      {
        id: 4,
        title: 'BMW 3 Series',
        subtitle: '320d M Sport 4dr',
        mileage: '25 Miles',
        fuelType: 'Diesel',
        transmission: 'Automatic',
         img:Img3,
         price:1200,
      },
]

export const furniture = [
    {
      id: 1,
      title: "Modern Soft Chair",
      color: "#e8c4ac",
      img: Img4,
      price: 1200,
      colors: ["#e8c4ac", "#f5a623", "#50e3c2", "#4a90e2"], // Example colors
    },
    {
      id: 2,
      title: "Modern Soft Chair",
      color: "#aed0e3",
      img: Img5,
      price: 1900,
      colors: ["#aed0e3", "#b8e986", "#7ed321", "#417505"], // Example colors
    },
    {
      id: 3,
      title: "Modern Soft Chair",
      color: "#ccabe5",
      img: Img6,
      price: 1100,
      colors: ["#ccabe5", "#f8e71c", "#f5a623", "#9013fe"], // Example colors
    },
    {
      id: 4,
      title: "Modern Soft Chair",
      color: "#e8c4ac",
      img: Img7,
      price: 1300,
      colors: ["#e8c4ac", "#f5a623", "#50e3c2", "#4a90e2"], // Example colors
    },
  ];