import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import styles from "./TrainingInput.module.css";

function TrainingInput() {
  const [training, setTraining] = useState({
    sets: 1,
    reps: 1,
    weight: 1,
  });

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault;
    console.log(event);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTraining({ ...training, [event.target.name]: value });
    console.log(training);
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
            value={training.sets}
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
            value={training.reps}
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
            value={training.weight}
            onChange={handleChange}
          />
        </div>
      </div>

      <input className={styles.button} type="submit" value="ADD UNIT" />
    </form>
  );
}

export default TrainingInput;
