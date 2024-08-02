import Link from "next/link";

import styles from "./Button.module.scss";

const Button = ({
  // label,
  href,
  size,
  orange,
  children,
}: {
  // label: string;
  href: string;
  size?: string;
  orange?: boolean;
  children: React.ReactNode;
}) => {
  const btnSize = size ? size : "rg";

  return (
    <Link className={styles[`btn-${btnSize}`]} href={href} style={{ backgroundColor: orange ? "#EB7A28" : "#293028"}}>
      {children}
    </Link>
  );
};

export default Button;
