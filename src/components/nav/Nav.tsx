import NavLink from "@/components/nav/NavLink";
import NavButton from "@/components/buttons/NavButton";

const navLinks: { title: string; href: string }[] = [
  {
    title: "Proyectos",
    href: "#",
  },
  {
    title: "Servicios",
    href: "#",
  },
  {
    title: "Pasos",
    href: "#"
  },
  {
    title: "Contacto",
    href: "#"
  }
];

function Nav() {
  return (
    <nav className="flex justify-center bg-white text-black items-center p-4 text-sm">
      <div className="flex justify-between w-full max-w-7xl items-center">
        <div className="text-2xl">Logo</div>
        <div className="flex gap-5 items-center">
          {navLinks.map((item) => (
            <NavLink {...item} key={item.title} />
          ))}
          <span className="text-blue">|</span>
          <NavButton/>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
