import Link from "next/link";
import styles from "./Navbar.module.css";
import CartContext from "../contexts/CartContext";
import { useContext, useMemo } from "react";

const links = [
  {
    title: "Home",
    description: "welcome to the truth",
    url: "/",
  },

  {
    title: "Shop",
    description: "Essential of the believer",
    url: "/shop/[[...category]]",
  },

  {
    title: "L'éveil par la vérité",
    description: "Achieve enlightenment",
    url: "/coaching/ShopLesson",
  },

  {
    title: "Nous rejoindre",
    description: "Praise the windows",
    url: "/JoinUs",
  },

  {
    title: "A propos",
    description: "Praise the windows",
    url: "/apropos/Apropos",
  },
];

export default function Navbar() {
  const { openPanel, setOpenPanel, products } = useContext(CartContext);

  const cartQuantity = useMemo(
    () => products?.reduce((sum, product) => sum + product.quantity, 0),
    [products]
  );

  return (
    <nav className={styles.nav}>
      <ul id="list" className={styles.list}>
        <li className={styles.li}>
          <button
            className={styles.openCartButton}
            aria-expanded={openPanel.toString()}
            aria-controls="cart"
            onClick={() => {
              setOpenPanel(!openPanel);
            }}
            suppressHydrationWarning={true}
          >
            {openPanel ? "Fermer" : "Ouvrir"} le panier
            {cartQuantity > 0 && (
              <span
                className={styles.cartCount}
                title="Articles dans le panier"
              >
                {cartQuantity}
              </span>
            )}
          </button>
        </li>
        {links.map((link) => (
          <li className={styles.li} key={link.title}>
            <Link href={link.url}>
              <a className={styles.link}>{link.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
