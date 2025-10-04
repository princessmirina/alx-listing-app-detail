import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Ocean View Villa",
    rating: 4.8,
    address: { city: "Miami", country: "USA" },
    image: "/images/villa1.jpg",
    images: ["/images/villa1.jpg", "/images/villa2.jpg", "/images/villa3.jpg"],
    description: "Beautiful ocean view villa perfect for relaxation.",
    category: ["Pool", "Wi-Fi", "Breakfast"],
    price: 250,
    reviews: [
      {
        name: "John Doe",
        rating: 5,
        comment: "Amazing stay, loved the view!",
        avatar: "/images/avatar1.jpg",
      },
    ],
  },
];
