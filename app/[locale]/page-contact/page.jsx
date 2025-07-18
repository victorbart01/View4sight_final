import { redirect } from 'next/navigation';

export const metadata = {
  title: "Contact - View4Sight",
  description: "Get in touch with View4Sight team.",
};

export default function ContactPage() {
  // Redirect to homepage (contact will be handled by modal)
  redirect('/');
} 