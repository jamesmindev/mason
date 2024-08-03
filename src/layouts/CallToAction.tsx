import Button from "@/components/Button";
import styles from "./CallToAction.module.scss";

const CallToAction = () => {
  return (
    <section className={styles.CallToAction}>
      <div className="wrapper">
        <h2>
          Start Selling with State
        </h2>
        <Button href="/apply" size="rg">
        Get Started
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
