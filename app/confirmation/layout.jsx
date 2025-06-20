import Header from "@/components/view4sight/Header";
import View4SightFooter from "@/components/view4sight/View4SightFooter";

export const metadata = {
  title: "Payment Successful - View4Sight",
  description: "Thank you for your purchase. Welcome to View4Sight!",
};

export default function ConfirmationLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <View4SightFooter />
    </>
  );
} 