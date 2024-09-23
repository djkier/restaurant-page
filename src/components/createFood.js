import { create } from './global.js'

class Food{
    constructor(pic, name, desc, price){
        this.pic = pic;
        this.name = name;
        this.price = price;
        this.desc = desc;
    }

    createCard() {
        const div = create('div');
        const paraDiv = create('div');
        const img = create('img');
        const foodName = create('p');
        const desc = create('p');
        const price = create('p');

        price.className = 'price';
        desc.className = 'foodSub';
        foodName.className = 'foodName';
        img.className = 'img';
        div.className = 'card';
        div.id = this.name;

        price.textContent = this.price;
        desc.textContent = this.desc;
        foodName.textContent = this.name;
        img.src = this.pic;

        paraDiv.append(foodName, desc);
        div.append(img, paraDiv, price);

        return div;
    }
}

class Meal {
    constructor(title) {
        this.title = title;
        this.foodList = [];
    }
    
    createFoodCard(pic, name, desc, price){
        const food = new Food(pic, name, desc, price);
        this.foodList.push(food);
    }

    makeCardAppear(){
        const section = create('section');
        const div = create('div');
        const title = create('h3');

        section.className = 'meals'
        section.id = this.title.toLowerCase();
        title.className = 'meal-title';
        div.className = 'meal-food';

        title.textContent = this.title;
        this.foodList.forEach((food) => {
            const newFood = food.createCard();
            div.appendChild(newFood);
        });

        section.append(title, div)
        return section;
    }
}

const Starters = new Meal('Starters');
Starters.createFoodCard(
    '#',
    'Tomato Toast',
    'Lorem ipsum dolor sit amet, consectetur',
    '$29.00'
);
Starters.createFoodCard(
    '#',
    'Noodle Soup',
    'Lorem ipsum dolor sit amet, consectetur',
    '$5.00'
);
Starters.createFoodCard(
    '#',
    'Pumpkin Soup',
    'Lorem ipsum dolor sit amet, consectetur',
    '$5.00'
);


const Breakfast = new Meal('Breakfast');
Breakfast.createFoodCard(
    '#',
    'Delicious Pancakes',
    'Lorem ipsum dolor sit amet, consectetur',
    '$5.00'
);
Breakfast.createFoodCard(
    '#',
    'Sweet Heaven',
    'Lorem ipsum dolor sit amet, consectetur',
    '$5.00'
);
Breakfast.createFoodCard(
    '#',
    'Oatmeal Spirit',
    'Lorem ipsum dolor sit amet, consectetur',
    '$5.50'
);
Breakfast.createFoodCard(
    '#',
    'Avocado Smash',
    'Lorem ipsum dolor sit amet, consectetur',
    '$4.00'
);

const Dinner = new Meal('Dinner');
Dinner.createFoodCard(
    '#',
    'Italian Pizza',
    'Lorem ipsum dolor sit amet, consectetur',
    '$5.00'
);
Dinner.createFoodCard(
    '#',
    'Sea Curry',
    'Lorem ipsum dolor sit amet, consectetur',
    '$4.00'
);
Dinner.createFoodCard(
    '#',
    'Vegan Burger',
    'Lorem ipsum dolor sit amet, consectetur',
    '$2.50'
);
Dinner.createFoodCard(
    '#',
    'Noodle Bowl',
    'Lorem ipsum dolor sit amet, consectetur',
    '$3.00'
);

const Drinks = new Meal('Drinks');
Drinks.createFoodCard(
    '#',
    'Panthouse Tonic',
    'Lorem ipsum dolor sit amet, consectetur',
    '$4.50'
);
Drinks.createFoodCard(
    '#',
    'Apple Breeze',
    'Lorem ipsum dolor sit amet, consectetur',
    '$3.20'
);
Drinks.createFoodCard(
    '#',
    'Frenchman Blitz',
    'Lorem ipsum dolor sit amet, consectetur',
    '$4.00'
);


export { Starters, Breakfast, Dinner, Drinks }