function CodedPoetry({ text }) {
  return (
    <div className="border-2 mx-auto py-2">
      <h1 className="text-center text-6xl">
        <code className="italic"> &lt;{text}&gt; </code>
      </h1>
    </div>
  );
}
function Header({ children }) {
  return (
    <div className="border-2 mb-2 py-4">
      <div className="border-2 mx-auto mb-1 py-2">
        <h2 className="text-center text-5xl">Portfolio for</h2>
      </div>
      <CodedPoetry text="Coded Poetry" />

      <div className="my-4 border-2 border-red-200">{children}</div>

      <CodedPoetry text="Coded Poetry/" />
    </div>
  );
}

export default Header;
