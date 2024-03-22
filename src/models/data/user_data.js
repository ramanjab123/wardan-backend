const userData = {
    "username": "Rahul",
    "password": "xyz123"
}

exports.products = {
    "products": [
        {
            "name": "Turmeric Powder",

            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 100,
            "category": "powdered-spices",
            // "thumbnail": "...",
            "images": ["https://m.media-amazon.com/images/I/71mgzVFnjZL.jpg"],
            "bestSeller": false,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "Turmeric Powder is one of the staple spice blends in Indian recipes. It is a spice enriched with strong flavour and healing properties, having a curcumin percentage of up to 3%, that gives a distinct flavour and colour to all your dry and curry-based preparations."
        },
        {
            "name": "Black Salt Powder",
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 65,
            "category": "powdered-spices",
            // "thumbnail": "...",
            "images": ["https://m.media-amazon.com/images/I/51hxcAHXiGL._SL1000_.jpg"],
            "bestSeller": false,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "With careful harvesting and manufacturing, Wardan's Black Salt powder (Kala namak) maintains its distinctive characteristics and flavour. It is visually appealing and simple to sprinkle or grind to the required consistency because to its light pinkish-gray colour and gritty texture. A pinch of it makes the dishes tastier and more nutritious. Zoff's premoium Black salt powder keeps your heart healthy and prevents oral problems."
        },
        {
            "name": "Green Cardamom | Choti Elaichi Whole",
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 55,
            "category": "whole-spices",
            // "thumbnail": "...",
            "images": ["https://spicesmall.com/image/cache/catalog/Products/20210713_CDT_Cardamom-1-550x580.jpg"],
            "bestSeller": false,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "Wardan Green Cardamom: Experience the pure essence of Choti Elaichi Whole, a 100% natural spice that adds a burst of authentic flavor to your culinary creations. Elevate your dishes with ZOFF's quality Green Cardamom for a delightful and aromatic touch."
        },
        {
            "name": "Coriander-Powder",
            "discountPercentage": 40,
            "rating": 4.69,
            "stock": 15,
            "category": "powdered-spices",
            // "thumbnail": "...",
            "images": ["https://m.media-amazon.com/images/I/61LP77oUQfL._SL1299_.jpg"],
            "bestSeller": true,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "Wardan's Coriander Powder thickens gravies and imparts an authentic flavor while providing a perfect balance of garden-fresh scent and natural green coloring and it uses cool grinding technology to make the grounded coriander powder. It is frequently used to give Indian curries a unique flavor. Learn the secrets of coriander powder, and expand the boundaries of your culinary abilities."
        },
        {
            "name": "Red-Chilli-Powder",
            "discountPercentage": 25,
            "rating": 4.69,
            "stock": 94,
            "category": "combo-packs",
            // "thumbnail": "...",
            "images": ["https://shop.mtrfoods.com/cdn/shop/products/ChilliPowder-200g-frontcopy_600x.png?v=1611208620"],
            "bestSeller": false,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "Wardan presents Red Chilli Powder made from hand-picked red chillies from India's finest gardens. Pure and unadulterated, ground using cool technology to retain aroma, oil, and pungency. Elevate your dishes with our premium powder, free from preservatives and artificial colours."
        },
        {
            "name": "Jeera Whole | Cumin | Easy to use",
            "discountPercentage": 69,
            "rating": 4.69,
            "stock": 25,
            "category": "whole-spices",
            // "thumbnail": "...",
            "images": ["https://www.jkcart.com/uploads/product/70fac620798607d82525dbcf74561898.png"],
            "bestSeller": true,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "Enhance your dishes with the rich, nutty, peppery flavor of Wardan's Jeera (Cumin Seeds). Perfect for bread, biscuits, cakes, veggies, curry pastes, and rice. Level up the flavors of your cooking with Zoff's Jeera Whole."
        },
        {
            "name": "Chaat-Masala",
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 40,
            "category": "powdered-spices",
            // "thumbnail": "...",
            "images": ["https://m.media-amazon.com/images/I/91oXX6OzZfL._SL1500_.jpg"],
            "bestSeller": false,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "Chaat Masala is your gateway to elevating the flavour of your dishes. Whether you're preparing street-style snacks or experimenting with fusion cuisine, our chaat masala is your trusted companion. Experience the perfect blend of sweet, sour, and savoury by choosing Zoff Chaat Masala. Don't miss the opportunity to transform your culinary creations with this exceptional spice mix. Buy chaat masala online at Zoff and get the best Chaat Masala powder at the best prices. Your taste buds are in for a treat!"
        },
        {
            "name": "Turmeric Powder",
            "discountPercentage": 12,
            "rating": 4.69,
            "stock": 40,
            "category": "whole-spices",
            // "thumbnail": "...",
            "images": ["https://m.media-amazon.com/images/I/71AK6ErhjhL._SL1500_.jpg"],
            "bestSeller": true,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "Turmeric Powder is one of the staple spice blends in Indian recipes. It is a spice enriched with strong flavour and healing properties, having a curcumin percentage of up to 3%, that gives a distinct flavour and colour to all your dry and curry-based preparations."
        },
        {
            "name": " Ajwain Whole | Natural and Fresh Carom Seeds",
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 40,
            "category": "whole-spices",
            // "thumbnail": "...",
            "images": ["https://m.media-amazon.com/images/I/71cP15xoj9L._SL1500_.jpg"],
            "bestSeller": false,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "Ajwain seeds is one of the essential ingredients you can find in an Indian kitchen. Ajwain whole spice (Carom Seeds) is hand-picked by trained workers and machine cleaned by the latest technologies."
        },
        {
            "name": " Black Big Cardamom | Rich in Aroma | Badi Elaichi",
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 40,
            "category": "whole-spices",
            // "thumbnail": "...",
            "images": ["https://m.media-amazon.com/images/I/81EkskBFpMS._SL1500_.jpg"],
            "bestSeller": false,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "Black Big Cardamom offers a sensory delight with its rich and captivating aroma. Packed with the intense flavor of Badi Elaichi, this pack ensures a generous supply of premium quality cardamom, perfect for enhancing the taste of your culinary creations."
        },
        {
            "name": "Garam masala",
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 40,
            "category": "powdered-spices",
            // "thumbnail": "...",
            "images": ["https://www.bigbasket.com/media/uploads/p/l/40001443_3-mtr-masala-garam-masala.jpg"],
            "bestSeller": false,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "Garam Masalais your gateway to infusing warmth and depth into your cooking. Whether you're preparing classic Indian dishes or experimenting with global cuisine, our Garam Masala is your trusted companion. Experience the perfect blend of spices that will elevate your culinary creations to new heights. Don't miss the opportunity to transform your meals with this exceptional spice mix. Get the best Garam Masala powder at the best prices, exclusively from Zoff. Your taste buds are in for a treat!"
        },
        {
            "name": "Roasted Jeera Powder",
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 40,
            "category": "powdered-spices",
            // "thumbnail": "...",
            "images": ["https://m.media-amazon.com/images/I/71FmQ-15ovL._SL1500_.jpg"],
            "bestSeller": false,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "Only the best quality cumin seeds are cleaned, roasted, and ground to a perfect blend to bring you our Roasted Jeera Powder. Compared to unroasted jeera powder, this adds more aroma and an intense flavour to all your Indian recipes."
        },
        {
            "name": "Makhana (Lotus Seeds)",
            "discountPercentage": 40,
            "rating": 4.69,
            "stock": 40,
            "category": "dry-fruits",
            // "thumbnail": "...",
            "images": ["https://m.media-amazon.com/images/I/81JhFLkWgDL._SL1500_.jpg"],
            "bestSeller": true,
            "variant": [{
                "weight": "100 gm",
                "price": 50
            },
            {
                "weight": "200 gm",
                "price": 100
            },
            {
                "weight": "500 gm",
                "price": 250
            },
            ],
            "description": "Makhana is directly sourced from Darbhanga, Bihar. Rich in proteins, its health benefits are superior to dry fruits such as almonds and walnuts. It's also a good source of protein, carbohydrates, fibre, magnesium, potassium, phosphorus, iron and zinc."
        },

    ],

    "total": 100,
    "skip": 0,
    "limit": 30
}