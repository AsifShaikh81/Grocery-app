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