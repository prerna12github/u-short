import UrlForm from "../components/urlform";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-40 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          <h1 className="w-auto text-4xl font-semibold font-mono leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to U-Short
          </h1>
          <p className="w-auto mt-3 text-lg font-mono leading-8 text-zinc-600 dark:text-zinc-400">
           Turn your long, messy URLs into short, easy to share links.
          </p>
        </div>
        <div className="w-full mt-8">
          <UrlForm />
        </div>
      </main>
    </div>
  );
}
