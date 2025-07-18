import "../public/assets/css/main.scss";
import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "../public/assets/custom.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";

export const metadata = {
  title: "View4Sight - 3D Point Cloud Visualization",
  description: "Share your 3D point clouds and BIM files in any browser. French SaaS solution for surveyors and engineering firms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <meta name="theme-color" content="#FE552E" />
      </head>
      <body>
                  {children}
      </body>
    </html>
  );
}
