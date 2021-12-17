import React from "react";
import TrainingList from "./TrainingList";

export default {
  component: TrainingList,
  title: "Components/TrainingList",
};

const unit = {
  category: "Weightlifting",
  movement: "Back Squat",
  items: [
    {
      sets: 1,
      reps: 5,
      weight: 80,
    },
  ],
};

export const Default = () => (
  <TrainingList
    category={unit.category}
    movement={unit.movement}
    items={unit.items}
  />
);
