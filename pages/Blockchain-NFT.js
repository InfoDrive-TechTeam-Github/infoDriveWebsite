import { useEffect } from "react";
import { useRouter } from "next/router";
export default function blockchain() {
  const router = useRouter();
  useEffect(() => {
    // Redirect to the home page immediately
    router.push("/"); // Redirect to the home page

    // You can also use window.location.replace('/') if you prefer
  }, []);

  return null; // This page won't be visible, so return null
}
