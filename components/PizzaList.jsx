import { PizzaCard } from "@/components/index";
import styles from "../styles/PizzaList.module.css";

export function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {Array.from({ length: 8 }).map((item, i) => (
          <PizzaCard key={i} />
        ))}
      </div>
    </div>
  );
}
