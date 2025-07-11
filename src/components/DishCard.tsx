import React from "react";
import { Dish } from "./data";

interface DishCardProps {
  dish: Dish;
  onClick?: () => void;
  size?: "large" | "small";
}

export default function DishCard({ dish, onClick, size = "large", fallbackImage }: DishCardProps & { fallbackImage: string }) {
  const [imgSrc, setImgSrc] = React.useState(dish.image);
  return (
    <div
      className={`menu-card bg-gray-50 dark:bg-gray-900 rounded-lg shadow cursor-pointer flex flex-col items-center ${size === "small" ? "max-w-xs" : ""}`}
      onClick={onClick}
    >
      <div className="relative w-full">
        <img
          src={imgSrc}
          alt={dish.name}
          className={`w-full ${size === "small" ? "h-32" : "h-48"} object-cover rounded-t-lg`}
          onError={() => setImgSrc(fallbackImage)}
        />
        <div className="absolute bottom-0 left-0 w-full px-4 py-2">
          <h3 className="text-lg font-semibold text-white drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.7)]">{dish.name}</h3>
        </div>
      </div>
      <div className="w-full p-4">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{dish.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-primary dark:text-cyan-300">R${dish.price}</span>
          <div className="flex gap-1">
            {dish.tags?.map((tag) => (
              <span key={tag} className="bg-primary dark:bg-cyan-700 text-white text-xs px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 