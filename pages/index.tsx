import Head from "next/head";
import Link from "../components/Link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>James Morris</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="Hey, I'm James. I make things." />
      </Head>
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      <article className="prose prose-neutral md:prose-lg dark:prose-invert p-8 sm:p-16 ">
        <h1>Hey, I{"'"}m James 👋</h1>
        <p>
          I{"'"}m a software programmer, part-time musician and photographer based in
          the UK.
        </p>
        <div className="space-x-1 -ml-2">
          <Link href="https://twitter.com/actuallyjamez" name="Twitter"/>
          <Link href="https://github.com/actuallyjamez" name="GitHub"/>
          <Link href="https://soundcloud.com/actuallyjamez" name="SoundCloud"/>
        </div>
      </article>
    </div>
  );
};

export default Home;
