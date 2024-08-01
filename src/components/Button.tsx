import Link from "next/link";

import styles from "./Button.module.scss";

const Button = ({
  // label,
  href,
  size,
  children,
}: {
  // label: string;
  href: string;
  size?: string;
  children: React.ReactNode;
}) => {
  const btnSize = size ? size : "rg";

  return (
    <Link className={styles[`btn-${btnSize}`]} href={href}>
      {children}
    </Link>
  );
};

export default Button;
