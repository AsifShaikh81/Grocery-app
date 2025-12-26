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
creating animated category
src\components\CategorySlider.tsx

creating grocery item card
src\components\GroceryItemCard.tsx -(redux issue)