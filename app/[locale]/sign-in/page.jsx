import { redirect } from 'next/navigation';

export const metadata = {
  title: "Sign In - View4Sight",
  description: "Sign in to your View4Sight account.",
};

export default function SignInPage() {
  // Redirect to the existing sign-in page (outside locale structure)
  redirect('/sign-in');
} 