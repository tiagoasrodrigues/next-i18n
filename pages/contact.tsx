import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { Header } from '../components/Header';
import { LoadTranslation } from '../utils/translation';

export const getStaticProps: GetStaticProps = async({ locale }) => {
  return {
    props: {
      ...(await LoadTranslation(locale!, ["contact"])),
    },
  };
}

export default function Contact() {
  const { t } = useTranslation("contact")

  return (
    <div>
      <Head>
        <title>{t(["title"])}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>{t(["title"])}</h1>
    </div>
  )
}
