import Image from 'next/Image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import Link from 'next/link'

export default function FirstPost() {
    return (
    <Layout>
        <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
        <h1> Home Post</h1>
        <h2> <Link href = "/"> Back to home </Link></h2>     
        <Image
            src="/images/profile.jpeg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
        />
    </Layout>
    );
  }
