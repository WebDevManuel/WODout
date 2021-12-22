import styles from "./TrainingList.module.css";

type TrainingListProps = {
  category: string;
  movement: string;
  items: item[];
};

type item = {
  sets: number;
  reps: number;
  weight: number;
};

function TrainingList({ category, movement, items }: TrainingListProps) {
  return (
    <>
      <section className={styles.container}>
        <h2>{category}</h2>
        <h3>{movement}</h3>

        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.sets} * {item.reps} @ {item.weight}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default TrainingList;
