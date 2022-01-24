import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>James Morris</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="Hey, I'm James. I make things." />
      </Head>
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      <article className="prose prose-neutral dark:prose-invert p-4 sm:p-8 max-w-md">
        <h1>Hey, I'm James 👋</h1>
        <p>
          I'm a software programmer, part-time musican and photographer based in
          the UK.
        </p>
        <div className="space-x-4">
          <a
            href="https://twitter.com/actuallyjamez"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://github.com/actuallyjamez"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://soundcloud.com/actuallyjamez"
            rel="noopener noreferrer"
            target="_blank"
          >
            SoundCloud
          </a>
        </div>
      </article>
    </div>
  );
};

export default Home;
