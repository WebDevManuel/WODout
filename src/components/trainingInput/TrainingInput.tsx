import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./TrainingInput.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";

function TrainingInput() {
  const [training, setTraining] = useLocalStorage("trainingJournal", []);

  const [formInput, setFormInput] = useState({
    sets: 1,
    reps: 1,
    weight: 1,
  });

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(training, typeof training);
    setTraining([...training, formInput]);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormInput({ ...formInput, [event.target.name]: value });
    console.log(formInput);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className={styles.flex}>
        <div>
          <label className={styles.label} htmlFor="sets">
            Sets
          </label>
          <input
            className={styles.input}
            type="number"
            name="sets"
            id="sets"
            step="1"
            min="1"
            value={formInput.sets}
            onChange={handleChange}
          />
        </div>
        <span>X</span>
        <div>
          <label className={styles.label} htmlFor="reps">
            Reps
          </label>
          <input
            type="number"
            name="reps"
            id="reps"
            step="1"
            min="1"
            value={formInput.reps}
            onChange={handleChange}
          />
        </div>
        <span>@</span>
        <div>
          <label className={styles.label} htmlFor="weights">
            Weight
          </label>
          <input
            type="number"
            name="weight"
            id="weight"
            step="0.5"
            min="1"
            value={formInput.weight}
            onChange={handleChange}
          />
        </div>
      </div>

      <input className={styles.button} type="submit" value="ADD UNIT" />
    </form>
  );
}

export default TrainingInput;
