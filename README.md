User Stories – Web Page (Luxury Brands Products)
1. As a visitor, I want to browse different categories of products (makeup, perfumes, others) so that I can easily find what I am looking for.
2. As a visitor, I want to view product details (name, price, description, image) so that I can decide whether to purchase.
3. As a user, I want to create an account (sign up) so that I can save my information and have a personalized experience.
4. As a user, I want to log in using my username/email and password so that I can access my account securely.
5. As a user, I want to log out when I finish shopping so that my account stays secure.
6. As a user, I want to add products to my shopping cart so that I can review and purchase them later.
7. As a user, I want to search for products by name or category so that I can quickly find what I need.
8. As an admin, I want to manage categories and products (add, edit, delete) so that the website content stays updated.
 
![Image (28)](https://github.com/user-attachments/assets/fa3945c2-64c7-4d6b-814f-8c1434dc0e68)



Main Routes

Categories

Index  /categories  GET
Show  /categories/:categoryId  GET
Create  /categories  POST
Update  /categories/:categoryId  PUT
Delete  /categories/:categoryId  DELETE

Products

Index  /products  GET
Show  /products/:productId  GET
Create  /products  POST
Update  /products/:productId  PUT
Delete  /products/:productId  DELETE
Search  /products/search  GET

Auth

Sign Up  /auth/signup  POST
Log In  /auth/login  POST
Log Out  /auth/logout  POST

Cart

Show  /cart  GET
Add  /cart  POST
Update  /cart/:productId  PUT
Delete  /cart/:productId  DELETE

<img width="720" height="272" alt="screenshot_2025-09-22_at_7 59 45___pm_720" src="https://github.com/user-attachments/assets/62746b77-991c-49f0-84bf-d79ca8959fd7" />


References:

	•	Video tutorial by Abdulrahman Gamal (used for styling and CSS part).
    https://youtu.be/1WeVMnWqoqA
    https://www.youtube.com/watch?v=Iy7oFI76FpE&t=2094s

	•	Yehia Tech YouTube channel (used for understanding the basics of building web pages).
    https://www.youtube.com/watch?v=Pwatx1n1Ws0&t=3616s
 
 
