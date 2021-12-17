import styles from "./TrainingList.module.css";

type TrainingListProps = {
  category: string;
  movement: string;
  items: item[];
}

type item = {
  sets: number;
  reps: number;
  weight: number;
}


function TrainingList({category, movement, items}: TrainingListProps) {
  return (
    <>
    <section className={styles.container}>
      <h2>{category}</h2>
      <h3>{movement}</h3>
      
      
      <ul>
        <li>{items.map((item) () => (
          <item key={ClipboardItem.value} value={interfacem.value}>
            {item}
            </item>
        ))}
        </li>
      </ul>
    </section>
    </>
  );
}

export default TrainingList;
