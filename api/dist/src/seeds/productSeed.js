"use strict";
// import Product from '../models/Product';
// Product.bulkCreate([ // Returning and thus passing a Promise here
//     {
//         name: "Organic Apples",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Nature's Finest",
//         image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/FujiApples4pieces_1.png?v=1649296371"
//     },
//     {
//         name: "Whole Wheat Bread",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Wonder Bread",
//         image: "https://kristineskitchenblog.com/wp-content/uploads/2014/08/whole-wheat-bread-1200-square-2678.jpg"
//     },
//     {
//         name: "Cage-Free Eggs",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Happy Hen Farms",
//         image: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg"
//     },
//     {
//         name: "Fresh Spinach",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Green Giant",
//         image: "https://cdn.britannica.com/30/82530-050-79911DD4/Spinach-leaves-vitamins-source-person.jpg"
//     },
//     {
//         name: "Organic Milk",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Horizon Organic",
//         image: "https://images.albertsons-media.com/is/image/ABS/136050013-C1N1?$ng-ecom-pdp-mobile$&defaultImage=Not_Available"
//     },
//     {
//         name: "Almond Butter",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Justin's",
//         image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/06/almond-butter-recipe.jpg"
//     },
//     {
//         name: "Free-Range Chicken",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Perdue",
//         image: "https://thumbs.dreamstime.com/b/fresh-whole-chicken-package-sale-grocery-store-131895623.jpg"
//     },
//     {
//         name: "Organic Quinoa",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Ancient Harvest",
//         image: "https://cdn.shopify.com/s/files/1/0326/3538/8041/products/OrganicTrio-Quinoa_1.jpg?v=1652840775"
//     },
//     {
//         name: "Cage-Free Turkey",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Butterball",
//         image: "https://img.money.com/2014/11/141118_em_turkeyshortage1.jpg"
//     },
//     {
//         name: "Wild-Caught Salmon",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Bumble Bee",
//         image: "https://res.cloudinary.com/wildasset/image/upload/w_600/c_scale,w_1000/v1671043512/blog/WA_Dec_SalmonCompare_014.jpg"
//     },
//     {
//         name: "Organic Bananas",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Chiquita",
//         image: "https://www.hsph.harvard.edu/nutritionsource/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg"
//     },
//     {
//         name: "Natural Peanut Butter",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Smucker's",
//         image: "https://cdn.shopify.com/s/files/1/0326/3538/8041/products/clearspring-peanut-butter-crunchy-jams-spreads-radiant-whole-food-organic-delivery-kl-pj-malaysia-16032248823945.jpg?v=1598422898"
//     },
//     {
//         name: "Organic Baby Spinach",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Simple Truth Organic",
//         image: "https://cdn.shopify.com/s/files/1/0095/1651/5390/products/030036-1-1.jpg?v=1676362066"
//     },
//     {
//         name: "Whole Grain Pasta",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Barilla",
//         image: "https://hips.hearstapps.com/hmg-prod/images/whole-wheat-pasta-gettyimages-488392474-64359d6e6fa92.jpg?crop=0.6648xw:1xh;center,top&resize=1200:*"
//     },
//     {
//         name: "Organic Strawberries",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Driscoll's",
//         image: "https://images.everydayhealth.com/images/potential-health-benefits-of-strawberries-1440x810.jpg"
//     },
//     {
//         name: "100% Pure Maple Syrup",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Coombs Family Farms",
//         image: "https://cdn.shopify.com/s/files/1/0279/7404/1709/products/056AED74-0AD9-48B3-ABED-0565583D006F_1200x1200.png?v=1646212812"
//     },
//     {
//         name: "Organic Sweet Potatoes",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Nature's Promise",
//         image: "https://sunkissedkitchen.com/wp-content/uploads/2022/11/how-to-bake-purple-sweet-potatoes.jpg"
//     },
//     {
//         name: "Cage-Free Duck Eggs",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Muscovy Duck Farm",
//         image: "https://www.thespruceeats.com/thmb/jUE0dvYDQAQdnMKefOYX9wK0fqk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/duckeggsnaliaschwarz-03c2260b48054cde86ac0954e73e4cb6.jpg"
//     },
//     {
//         name: "Organic Grape Tomatoes",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Nature Sweet",
//         image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg"
//     },
//     {
//         name: "Wild Blueberries",
//         upc12: Math.floor(Math.random() * 9000000000) + 100000000000,
//         brand: "Wyman's",
//         image: "https://www.realsimple.com/thmb/yVqqVlsG94jnsex4I_zWbmhoTkI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-store-blueberries-2000-00cda4a2eda74037af3aaf6224cb1912.jpg"
//     }
// ]);
