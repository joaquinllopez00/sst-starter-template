export default function Page(): JSX.Element {
  // eslint-disable-next-line -- Dynamically generated env var
  const url = process.env.NEXT_PUBLIC_API_URL;
  // eslint-disable-next-line -- Dynamically generated env var
  const test = process.env.NEXT_PUBLIC_TEST;

  return (
    <main>
      <div className="grid place-items-center h-40">
        <h1 className="text-4xl">Welcome to the Red Hook Starter Kit</h1>
      </div>
    </main>
  );
}
