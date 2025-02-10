export const DUMMY_PRODUCTS = [
	{
		id: 1,
		name: "Loveseat Sofa",
		description: "",
		price: 400,
		discount: "50",
		colors: ["black", "red", "white", "brown"],
		image: "src/assets/sofa.jpg",
		measurements: '17 1/2 x 20 5/8 "',
		rating: 4,
		reviews: [],
		categories: ["Living Room"],
	},
	{
		id: 2,
		name: "Luxury Sofa",
		description: "",
		price: 299,
		discount: "50",
		colors: ["black", "red", "white", "brown"],
		image: "src/assets/sofa.jpg",
		measurements: '17 1/2 x 20 5/8 "',
		rating: 3,
		reviews: [],
		categories: ["Living Room"],
	},
	{
		id: 3,
		name: "Table Lamp",
		description: "",
		price: 19,
		discount: "50",
		colors: [],
		image: "src/assets/table-lamp.jpg",
		measurements: '17 1/2 x 20 5/8 "',
		rating: 4,
		reviews: [],
		categories: ["Living Room", "Bedroom"],
	},
	{
		id: 4,
		name: "White Drawer Unit",
		description: "",
		price: 89,
		discount: "50",
		colors: [],
		image: "src/assets/sofa.jpg",
		measurements: '17 1/2 x 20 5/8 "',
		rating: 4,
		reviews: [],
		categories: ["Bedroom"],
	},
	{
		id: 5,
		name: "Toaster",
		description: "",
		price: 189.5,
		discount: "50",
		colors: [],
		image: "src/assets/table-lamp.jpg",
		measurements: '17 1/2 x 20 5/8 "',
		rating: 4,
		reviews: [],
		categories: ["Kitchen"],
	},
];

export const CATEGORIES = [
	{
		name: "All Rooms",
	},
	{
		name: "Living Room",
	},
	{
		name: "Bedroom",
	},
	{
		name: "Kitchen",
	},
	{
		name: "Bathroom",
	},
	{
		name: "Dinning",
	},
	{
		name: "Outdoor",
	},
];

export const PRICE_RANGES = [
	{
		name: "All Price",
		isSelected: true,
	},
	{
		name: "0.00 - 99.99",
		isSelected: false,
	},
	{
		name: "200.00 - 299.99",
		isSelected: false,
	},
	{
		name: "300.00 - 399.99",
		isSelected: false,
	},
	{
		name: "400.00+",
		isSelected: false,
	},
];
