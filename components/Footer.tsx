export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E0] mt-24 py-8">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-xs tracking-wider text-[#6B6B6B]">
        <span>© {new Date().getFullYear()} Sean Hammett</span>
        <span className="uppercase">All rights reserved</span>
      </div>
    </footer>
  );
}
