import { pageMetadata } from "@/lib/pageMetadata";
import { redirect } from 'next/navigation';

export const generateMetadata = pageMetadata("contact");

export default function ContactPage() {
  // Redirect to homepage (contact will be handled by modal)
  redirect('/');
} 