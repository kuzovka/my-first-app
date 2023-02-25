import Title from "components/Title";
import Good from "components/Good";
import { useState } from "react";

function App() {

  const [goods, setGoods] = useState([
    {
      name: "Мука",
      isAdd: true,
      id: 1
    },
    {
      name: "Гречка",
      isAdd: true,
      id: 2
    },
    {
      name: "Хлеб",
      isAdd: false,
      id: 3
    },
    {
      name: "Бананы",
      isAdd: false,
      id: 4
    },
    {
      name: "Чай",
      isAdd: false,
      id: 5
    },
    {
      name: "Молоко",
      isAdd: false,
      id: 6
    }
  ])

  const deleteGood = (id) => {
    const filteredGood = goods.filter(good => good.id !== id)
    setGoods(filteredGood)

  }

  const changeButton = (id) => {
    const goodJson = JSON.parse(JSON.stringify(goods))
    const goodAdd = goodJson.find(good => good.id === id);

      if (goodAdd.isAdd === true) {
        goodAdd.isAdd = false
    } else {
        (goodAdd.isAdd = true)
    }
    setGoods(goodJson)
 }

  return (
    <div className="h-screen">
        <Title />
        <div className="max-w-2xl mx-auto mt-12">
        {goods.length === 0  && (
          <div className="mt-20 text-center text-5xl text-red-400 font-thin flex flex-col justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-28 h-28 mx-auto text-red-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <p className="mt-10">Ваш список покупок пуст!</p>
          </div>
          )}

        {goods.length > 0 && goods.map((good) => {
                return(
                <Good key={good.id} good={good} deleteGood={deleteGood} changeButton={changeButton}/>
                )
            })}
        </div>
    </div>
  );
}

export default App;
