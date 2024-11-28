import  { auth } from "./app/(auth)/auth";

export default auth;

// export const config = {
//   matcher: ['/', '/:id', '/api/:path*', '/login', '/register'],
// };

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}