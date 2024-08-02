import Button from "@/components/Button";
import styles from "./CallToAction.module.scss";

const CallToAction = () => {
  return (
    <section className={styles.CallToAction}>
      <div className="wrapper">
        <h2>
          Start the journey to your new home with minimal upfront deposit
        </h2>
        <Button href="/register" size="lg">
        Start Your Application
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
