#Design Brief

You’ve been asked to develop a responsive website for a clothing retailer. The retailer sells six different categories of clothes: women’s footwear, men’s footwear, women’s casualwear, men’s casualwear, women’s formalwear and man’s formalwear.

The page that you develop should display all of the available products, as well as a shopping cart to which they can be added.

*(See sample data for full list of clothing items)*

There are also discount vouchers available that can be redeemed. The discount vouchers are as follows:

- £5.00 off your order
- £10.00 off when you spend over £50.00
- £15.00 off when you have bought at least one footwear item and spent over £75.00

#User Stories
The prioritised list of user stories is as follows:

As a User I can view the products and their category, price and availability information.

1. As a User I can add a product to my shopping cart.
2. As a User I can remove a product from my shopping cart.
3. As a User I can view the total price for the products in my shopping cart.
4. As a User I can apply a voucher to my shopping cart.
5. As a User I can view the total price for the products in my shopping cart with discounts applied.
6. As a User I am alerted when I apply an invalid voucher to my shopping cart.
7. As a User I am unable to Out of Stock products to the shopping cart.

#Installation
To install the dependencies and run the webapp locally on port 3000, follow the below instructions:
- clone the following SSH key to your chosen directory:
```
git@github.com:PowerlessCube/Deloitte-Apparel.git
```
- navigate to the following folder level and type the following to install express package:

$deloitteApparel/
```
npm install
```
- to run the server file on your local host type the following:

$deloitteApparel/
```
npm start
```

- open a new terminal tab and navigate to the client level and type the following to install further dependencies:
$deloitteApparel/client/
```
npm install
```
- once installed run webpacker by typing the following:
$deloitteApparel/client/
```
npm start
```

- in your web browser of choice type in the following url to view the app:
```
localhost:3000/
```
