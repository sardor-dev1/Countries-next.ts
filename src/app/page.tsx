import Navigation from "@/components/Navigation";

const links = [
  { title: "Home", href: "/" },
  { title: "Users", href: "/users" },
  { title: "Products", href: "/products" },
];
export default function Home() {
  return (
    <>
    <Navigation items={links} />
    <div className='page font-[family-name:var(--font-geist-sans)] page'>
      <h1>Home</h1>
    </div>
    </>
  );
}
