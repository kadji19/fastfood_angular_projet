import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
       food.name.toLowerCase().includes(searchTerm.toLowerCase()
      ));
  }

  getAllTags():Tag[]{
    return[
      {name: 'All', count: 14},
      {name: 'FastFood', count: 4},
      {name: 'Pizza', count: 2},
      {name: 'Lunch', count: 3},
      {name: 'SlowFood', count: 2},
      {name: 'Hamburger', count: 1},
      {name: 'Fry', count: 1},
      {name: 'Soup', count: 1},
    ]
  }


  getAllFoodsByTag(tag: string): Food [] {

    return tag == "All"?  this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))

  }

  getAll():Food[]{
    return[
      {
        id: 1,
        name: "pizza pepperoni",
        price: 10,
        favorite: false,
        star: 4.5,
        tags: ["FastFood","Pizza","Lunch"],
        imageUrl: "./assets/images/foods/food-1.jpg",
        cookTime: "10-12",
        origins: ["Italy"]
      },
      {
        id: 2,
        name: "Hamburger",
        price: 5,
        favorite: false,
        star: 3.5,
        tags: ["FastFood","Hamburger"],
        imageUrl: "./assets/images/foods/food-2.jpg",
        cookTime: "10-15",
        origins: ["Germany", "US"]
      },
      {
        id: 3,
        name: "fresed patate",
        price: 20,
        favorite: true,
        star: 4.7,
        tags: ["SlowFood","Lunch"],
        imageUrl: "./assets/images/foods/food-3.jpg",
        cookTime: "20-30",
        origins: ["persia", "Middle east", "china"]
      },
      {
        id: 4,
        name: "Hamburger",
        price: 12,
        favorite: true,
        star: 4.5,
        tags: ["FastFood","Hamburger"],
        imageUrl: "./assets/images/foods/food-4.jpg",
        cookTime: "10-15",
        origins: ["Germany", "US"]
      },
      {
        id: 5,
        name: " Vegetables pizza",
        price: 20,
        favorite: true,
        star: 4.0,
        tags: ["FastFood","Pizza"],
        imageUrl: "./assets/images/foods/food-5.jpg",
        cookTime: "40-50",
        origins: ["Italy"]
      },
      {
        id: 6,
        name: "  pizza",
        price: 60,
        favorite: false,
        star: 4.0,
        tags: ["FastFood","Pizza"],
        imageUrl: "./assets/images/foods/food-6.jpg",
        cookTime: "40-50",
        origins: ["Italy"]
      },
      {
        id: 7,
        name: " spaghetti",
        price: 20,
        favorite: true,
        star: 4.0,
        tags: ["SlowFood","spaghetti"],
        imageUrl: "./assets/images/foods/food-7.jpg",
        cookTime: "30-40",
        origins: ["Italy"]
      },
      {
        id: 8,
        name: " meet ang yam",
        price: 20,
        favorite: true,
        star: 4.0,
        tags: ["SlowFood","yam"],
        imageUrl: "./assets/images/foods/food-8.jpg",
        cookTime: "40-50",
        origins: ["Africa"]
      },
      {
        id: 9,
        name: " Hamburger",
        price: 40,
        favorite: true,
        star: 4.0,
        tags: ["FastFood","Hamburger"],
        imageUrl: "./assets/images/foods/food-9.jpg",
        cookTime: "10-15",
        origins: ["Germany", "US"]
      },
      {
        id: 10,
        name: "Chicken soup",
        price: 20,
        favorite: true,
        star: 4.0,
        tags: ["SlowFood","spaghetti"],
        imageUrl: "./assets/images/foods/food-10.jpg",
        cookTime: "15-20",
        origins: ["Africa"]
      },
      {
        id: 11,
        name: "Meatball",
        price: 15,
        favorite: true,
        star: 4.0,
        tags: ["SlowFood"],
        imageUrl: "./assets/images/foods/food-15.jpg",
        cookTime: "40-50",
        origins: ["Africa"]
      },
      {
        id: 12,
        name: "fry",
        price: 30,
        favorite: true,
        star: 4.0,
        tags: ["SlowFood","Lunch"],
        imageUrl: "./assets/images/foods/food-13.jpg",
        cookTime: "10-15",
        origins: ["Africa"]
      },
    ]
  }

}
