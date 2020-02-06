const pizzaList = [
	{
	  id: 1,
	  img: "1.png",
	  name: "Супер гриль",
	  composition: [
		"охотничьи колбаски",
		"сосиски",
		"моцарелла",
		"баклажан",
		"томаты",
		"лук",
		"перец",
		"соус томатный",
		"соус BBQ",
		"зеленый соус",
		"майонез"
	  ],
	  caloricity: 1569,
	  price: 249
	},
	{
	  id: 2,
	  img: "2.jpg",
	  name: "Маргарита",
	  composition: ["томаты", "моцарелла", "орегано", "базилик", "соус Pomodoro"],
	  caloricity: 1042,
	  price: 70
	},
	{
	  id: 3,
	  img: "3.jpg",
	  name: "Карбонара",
	  composition: [
		"ветчина",
		"шампиньоны",
		"пармезан",
		"моцарелла",
		"томаты",
		"яйцо перепелиное",
		"смесь перцев",
		"соус Carbonara"
	  ],
	  caloricity: 1369,
	  price: 119
	},
	{
	  id: 4,
	  img: "4.jpg",
	  name: "C сырным бортиком",
	  composition: [
		"хамон",
		"моцарелла",
		"сливочный сыр",
		"персик",
		"сливки",
		"руккола"
	  ],
	  caloricity: 1140,
	  price: 139
	},
	{
	  id: 5,
	  img: "5.png",
	  name: "Полло",
	  composition: [
		"куриное филе sous-vide",
		"ананас",
		"моцарелла",
		"орегано",
		"перец чили",
		"соус Pomodoro"
	  ],
	  caloricity: 1232,
	  price: 99
	},
	{
	  id: 6,
	  img: "6.jpeg",
	  name: "Пепперони",
	  composition: ["Салями Пепперони", "моцарелла", "орегано", "соус Pomodoro"],
	  caloricity: 1280,
	  price: 119
	},
	{
	  id: 7,
	  img: "7.png",
	  name: "Гурмео",
	  composition: [
		"охотничьи колбаски",
		"салями пепперони",
		"ветчина",
		"куриное филе sous-vide",
		"шампиньоны",
		"орегано",
		"соус BBQ"
	  ],
	  caloricity: 1343,
	  price: 149
	},
	{
	  id: 8,
	  img: "8.jpeg",
	  name: "Четыре сыра",
	  composition: [
		"пармезан",
		"дор блю",
		"чеддер",
		"моцарелла",
		"груша",
		"грецкий орех",
		"соус сливочный"
	  ],
	  caloricity: 1220,
	  price: 109
	},
	{
	  id: 9,
	  img: "9.jpeg",
	  name: "Американо",
	  composition: [
		"куриное филе sous-vide",
		"салями",
		"пепперони",
		"охотничьи колбаски",
		"кукуруза",
		"моцарелла",
		"лук",
		"орегано",
		"соус Pomodoro",
		"соус BBQ"
	  ],
	  caloricity: 1422,
	  price: 149
	},
	{
	  id: 10,
	  img: "10.jpg",
	  name: "Кальцоне",
	  composition: [
		"ветчина",
		"шампиньоны",
		"дор блю",
		"моцарелла",
		"томаты",
		"орегано"
	  ],
	  caloricity: 1056,
	  price: 99
	},
	{
	  id: 11,
	  img: "11.png",
	  name: "Берлускони",
	  composition: [
		"сливочный соус из белых грибов и шампиньонов с трюфельным маслом",
		"моцарелла",
		"дор блю",
		"орегано",
		"лук"
	  ],
	  caloricity: 1293,
	  price: 125
	},
	{
	  id: 12,
	  img: "12.png",
	  name: "Супер гриль",
	  composition: [
		"охотничьи колбаски",
		"сосиски",
		"сыр моцарелла",
		"баклажан",
		"томаты",
		"лук",
		"перец",
		"соус томатный"
	  ],
	  caloricity: 1410,
	  price: 132
	},
	{
	  id: 13,
	  img: "13.jpeg",
	  name: "Кампанья",
	  composition: [
		"охотничьи колбаски",
		"ветчина",
		"салями пепперони",
		"куриное филе sous-vide",
		"шампиньоны",
		"моцарелла",
		"томаты"
	  ],
	  caloricity: 1510,
	  price: 144
	},
	{
	  id: 14,
	  img: "14.png",
	  name: "Дьявола",
	  composition: [
		"горчичный соус",
		"моцарелла",
		"молочные сосиски",
		"бекон",
		"помидор",
		"зелень"
	  ],
	  caloricity: 1180,
	  price: 107
	},
	{
	  id: 15,
	  img: "15.png",
	  name: "Бекон ранч",
	  composition: [
		"фирменный пицца-соус",
		"моцарелла",
		"бекон",
		"ветчина",
		"телятина",
		"помидор",
		"перец болгарский",
		"соус ранч"
	  ],
	  caloricity: 1322,
	  price: 113
	},
	{
	  id: 16,
	  img: "16.png",
	  name: "Гроссето",
	  composition: [
		"фирменный пицца-соус",
		"моцарелла",
		"лосось",
		"креветки",
		"сладкий перец",
		"маслины",
		"лимон",
		"базилик",
		"орегано"
	  ],
	  caloricity: 980,
	  price: 159
	},
	{
	  id: 17,
	  img: "17.png",
	  name: "Тоскана",
	  composition: [
		"фирменный пицца-соус",
		"моцарелла",
		"ветчина",
		"бекон",
		"салями-пеперони",
		"сладкий перец",
		"сыр «Пармезан»",
		"базилик",
		"орегано"
	  ],
	  caloricity: 1310,
	  price: 139
	},
	{
	  id: 18,
	  img: "18.png",
	  name: "Грибная",
	  composition: [
		"фирменный пицца-соус",
		"моцарелла",
		"шампиньоны",
		"опята",
		"маслины",
		"лук",
		"базилик",
		"орегано",
		"зелень"
	  ],
	  caloricity: 1451,
	  price: 132
	},
	{
	  id: 19,
	  img: "19.png",
	  name: "Туринская",
	  composition: [
		"горчичный соус",
		"моцарелла",
		"салями",
		"охотничьи колбаски",
		"огурцы маринованные",
		"зелень"
	  ],
	  caloricity: 1140,
	  price: 138
	},
	{
	  id: 20,
	  img: "20.jpg",
	  name: "Венецианская",
	  composition: [
		"фирменный пицца-соус",
		"моцарелла",
		"телятина",
		"куриная грудка",
		"бекон",
		"шампиньоны",
		"помидор",
		"перец",
		"пармезан",
		"зелень"
	  ],
	  caloricity: 1341,
	  price: 142
	},
	{
	  id: 21,
	  img: "21.jpg",
	  name: "Четыре сезона",
	  composition: [
		"фирменный пицца-соус",
		"моцарелла",
		"опята",
		"куриная грудка",
		"помидор",
		"перец",
		"лук",
		"шампиньоны",
		"пармезан",
		"зелень"
	  ],
	  caloricity: 1479,
	  price: 145
	}
  ];
  
  const compositionList = [
	{
	  id: 1,
	  name: "Моцарела",
	  caloricity: 28,
	  price: 15
	},
	{
	  id: 2,
	  name: "Креветки",
	  caloricity: 37,
	  price: 35
	},
	{
	  id: 3,
	  name: "Салями",
	  caloricity: 42,
	  price: 25
	},
	{
	  id: 4,
	  name: "Лук",
	  caloricity: 13,
	  price: 7
	},
	{
	  id: 5,
	  name: "Томаты",
	  caloricity: 21,
	  price: 17
	},
	{
	  id: 6,
	  name: "Ветчина",
	  caloricity: 37,
	  price: 35
	}
];

const getPizzasNames = () => {
	let names = [];
	pizzaList.forEach((item) => {

		names.push(item.name);
	});
	console.log(names);
};

// getPizzasNames() 

const getPizzaById = id => {
	let pizza = pizzaList.find(item => item.id == id);
	console.log(pizza);
};

// getPizzaById(2) 

let getPizzasByComposition = (number) => {
	let composition = pizzaList.filter(item => {
		for(let i = 0; i < item.composition.length; i++) {
			if(item.composition[i] == number) {
				return item;
			}
		}
	});
	console.log(composition);
};

// getPizzasByComposition('лук');

const maxCaloricity = 1100;

const getPizzasByCalloricity = caloricity => {
    let calories = pizzaList.filter(item => {
		if(item.caloricity > maxCaloricity) {
			return item;
		}
	});
	console.log(calories);
};

// getPizzasByCalloricity(maxCaloricity);

const getAllWithoutPizzaById = id => {
	let pizzasSort = pizzaList.filter(item => {
		if(item.id !== id) {
			return item;
		}
	});
	console.log(pizzasSort);
};

// getAllWithoutPizzaById(1) 

const maxCompositions = 6;

const sortByMaxCompositions = compositions => {
	let composition = pizzaList.filter(item => {
		if(item.composition.length > compositions) {
			return item;
		}
	});
	console.log(composition);
};

// sortByMaxCompositions(maxCompositions) 