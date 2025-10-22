import Button from "../Button/Button";
import { useState } from "react";

import "./styles.css";

function Counter() {
    console.log("render");
  //   let counter = 0;
  //   const decrement = () => {
  //     counter--;
  //     console.log(counter);
  //   };

  //   const increment = () => {
  //     counter++;
  //     console.log(counter);
  //   };

  // const state = useState();

   // Синтаксис без деструктуризации
  //   const state = useState(0);
  //   console.log(state);
  //   console.log(state[0]);
  //   console.log(state[1]);

  // Синтаксис с деструктуризацией
  // Функция-хук useState() возвращает массив из 2 элементов
  // - 1 элемент - это переменная сотояния
  // - 2 элемент - функция, которая меняет это состояние
  // По умолчанию count = undefined, если мы ничего не передадим в качестве аргумента в функцию useState()

  const [counter, setCount] = useState(0);
  
  const decrement = () => {
    setCount((prevValue) => { 
      return prevValue - 1;
    });
  };

  const increment = () => {
    setCount((prevValue) => {
        return prevValue + 1;
    });
  };

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="+" onClick={increment} />
      </div>
      <p className="count">{counter}</p>
      <div className="button_control">
        <Button name="-" onClick={decrement} />
      </div>
    </div>
  );
}

export default Counter;
