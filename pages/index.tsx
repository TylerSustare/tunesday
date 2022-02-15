import { Card, Layout } from "@shopify/polaris";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Main.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.body}>
      <Layout>
        <Layout.Section fullWidth>
          <div className={styles.cardWidth}>
            <Card title="Online store dashboard" sectioned>
              <p>View a summary of your online store’s performance.</p>
            </Card>
          </div>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned title="Create Next App">
            <Head>
              <title>Create Next App</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
          </Card>
        </Layout.Section>
      </Layout>
    </div>
  );
};

export default Home;