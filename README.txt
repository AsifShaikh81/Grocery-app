text-[#F25A1A]-orange
text-[#F7F2D7] - beige
#f15d1eaf -faded
[#D94E14] - hover orange

bg-gradient-to-b from-[#F25A1A] to-[#F7F2D7] 

1. model created
   src/model/user.model.ts

2. connecting database
   src/lib/db.ts
   src/global.ts

3. creating register api 
   src/app/api/auth/register/router.ts

4. authentication - next auth
    https://authjs.dev/ - follow doc

    .env.local - added auth secret
    src/auth.ts
    app/api/auth/[...nextauth]/route.ts
    src/next-auth.d.ts - made changes in module(next-auth) for "role"

// for understanding flow
User -> /api/auth/signin (NextAuth route)
         |
         V
Provider (Google/Credentials)
         |
         v
JWT Token Generate
         |
         v
Session Create Hoti Hai
         |
         v
Frontend: useSession se access karte ho
// for understanding flow

5.creating register and sign in page
framer motion -> for aniamtion
src/app/register/page.tsx
src/app/login/page.tsx

src/components/Welcome.tsx
src/components/RegisterFormm.tsx

Session provider
src/app/layout.tsx - provider
src/provider.tsx - creating session provide bcz of 'use client' cant directly be written in layout.tsx

6-google authentication
src/auth.ts
get client id and client secret from "https://console.cloud.google.com/apis/credentials?project=next-js-477212" and paste in .env then use it inside callback

7- proxy(middleware)- to protect routes
src/proxy.tsx

8- Roles
src\app\page.tsx
src\components\EditRoleMobile.tsx

src\app\api\user\edit-role-mobile\route.ts

9- nav component
src\components\Nav.tsx

10 - Hero section
src\components\HeroSection.tsx

src\components\AdminDashboard.tsx
src\components\DeliveryDashboard.tsx
src\components\UserDashboard.tsx

11 - grocery model,grocery api, cloudinary
src\model\grocery.model.ts
src\lib\cloudinary.ts
src\app\api\admin\add-grocery\route.ts

12 - middleware update
src\proxy.tsx
src\app\unauthorized\page.tsx

src\components\EditRoleMobile.tsx - session update(for role)
src\auth.ts- triggering session update

13- updating nav for admin 
src\components\Nav.tsx 

14- grocery add page
src\app\admin\add-grocery\page.tsx

--------------section 2-----------
1.creating animated category
src\components\CategorySlider.tsx

2.creating grocery item card
src\components\GroceryItemCard.tsx -(redux issue)

3.redux tool kit
src\redux\store.ts
src\redux\userSlice.ts

- wraping redux as a provider in layout.tsx(main)
src\redux\StoreProvider.tsx

4. get me api -
this api is for adding user data in redux state

src\app\api\me\route.ts - get me api 
src\hooks\useGetMe.tsx - custom hook

src\InitUser.tsx - used in layout.tsx

5. add to cart functionality

6. creating cart page
src\app\user\cart\page.tsx

7. creating checkout page
src\app\user\checkout\page.tsx - mapview is in this page

leaflet for map:
https://react-leaflet.js.org/
npm i leaflet
npm i react-leaflet
npm i --save @types/leaflet


this api helps to fetch address u pin on the map
website -https://nominatim.org/release-docs/latest/api/Reverse/
api - https://nominatim.openstreetmap.org/reverse?lat=<value>&lon=<value>&<params>


leaflet geosearch - this is a plugin for searching address in map:
https://github.com/sjaakp/leaflet-search
npm i --save leaflet-geosearch

src\components\CheckoutMap.tsx
src\app\user\checkout\page.tsx - some leaflet code in this


8. order model
src\model\order.model.ts

9. place order api
src\app\api\user\order\route.ts

10. order success page
src\app\user\order-success\page.tsx


11. stripe pay Intg
stripe document - https://docs.stripe.com/payments/accept-a-payment

npm i stripe
stripe api - src\app\api\user\payment\route.ts

stripe webhook: is used to verify payment is success or not
stripe cli - https://docs.stripe.com/stripe-cli/install?install-method=windows
stripe webhook - src\app\api\user\stripe\webhook\route.ts

note: stripe(online) and cod payment api fetched in checkout page

12. my orders page
src\app\user\my-orders\page.tsx

my order api - src\app\api\user\my-orders\route.ts
src\components\UserOrderCard.tsx

13. creating manage order
src\app\admin\add-grocery\manage-orders\page.tsx
api - src\app\api\admin\get-orders\route.ts


---------------section 3
1. creating delivery assignment                                  
src\components\AdminOrderCard.tsx
src\model\deliveryAssignment.model.ts

src\app\api\admin\update-order-status\[orderId]\route.ts

2. socket server implementing
socketServer - for realtime communication,
as soon as user place order it will visible on admins side without refresh 

npm i socket.io - for backend
nom i socket.io-client - for Frontend
socketServer\index.js - creating instance(backend)

src\lib\socket.ts(frontend nextjs)

Note: socket.on - listening(backend )
      socket.emit - sending(frontend)

socket api -src\app\api\socket\connect\route.ts

3. location update using socket io
src\components\GeoUpdate.tsx
----
Remaining to watch this part:
src\components\CheckoutMap.tsx
src\lib\emitEventHandler.ts