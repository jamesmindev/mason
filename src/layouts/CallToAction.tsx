import Button from "@/components/Button";
import styles from "./CallToAction.module.scss";

const CallToAction = () => {
  return (
    <section className={styles.CallToAction}>
      <div className="wrapper">
        <h2>
          Discover the future of sustainable and responsible investing with
          Terrasage
        </h2>
        <Button href="/register" size="md">
          Register Interest
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
