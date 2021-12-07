import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";


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
      <label htmlFor="sets">Sets</label>
      <input
        type="number"
        name="sets"
        id="sets"
        step="1"
        min="1"
        value={training.sets}
        onChange={handleChange}
      />
      <span>X</span>
      <label htmlFor="reps">Reps</label>
      <input
        type="number"
        name="reps"
        id="reps"
        step="1"
        min="1"
        value={training.reps}
        onChange={handleChange}
      />
      <span>@</span>
      <label htmlFor="weights">Weight</label>
      <input
        type="number"
        name="weight"
        id="weight"
        step="0.5"
        min="1"
        value={training.weight}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
}

export default TrainingInput;
