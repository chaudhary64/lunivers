// components/Meta.js
import Head from 'next/head';

export default function Meta({ title = "Lunivers", description = "Default description" }) {
  return (
    <Head>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/icons/fav-192x192.png" type="image/x-icon"></link>
      <title>{title}</title>
    </Head>
  );
}
