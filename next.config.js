/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   async rewrites() {
//     return [
//       {
//         source: "/:path*",
//         destination:
//           "https://kauth.kakao.com/oauth/authorize?client_id=c79a3544b3466643b7709be0f727f138/:path*",
//       },
//     ];
//   },
// };
module.exports = nextConfig;
