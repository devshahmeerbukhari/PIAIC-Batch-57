import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 h-[90vh] p-6">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Welcome to Blogging Website</h1>
        <p className="text-lg mb-6">Sharing thoughts on web development, technology, and more!</p>
      </header>
    </div>
  );
}
