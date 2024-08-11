"use client";
import { SessionProvider, signIn, useSession } from "next-auth/react";
// import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import Layout from "@/layout";

const LoginPage = () => {
  const { data, status } = useSession();

  console.log("THe data isL", data);
  console.log("The status is", status);
  const router = useRouter();

  // if (status === "loading") {
  //   return <div className={styles.loading}>Loading...</div>;
  // }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.socialButton} onClick={() => signIn("google")}>
            Sign in with Google
          </div>
          <div className={styles.socialButton}>Sign in with Github</div>
          <div className={styles.socialButton}>Sign in with Facebook</div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
