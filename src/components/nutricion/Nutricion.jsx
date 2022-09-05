import { useState } from "react";
import foods from "../../foods.json";
import FoodBox from "../food-box/FoodBox";
import AddFoodForm from "../add-food-form/AddFoodForm";

function Nutricion () {
  const [name,setName] = useState("")

  const handleSubmit  = (event) => {
    
  }


  return (
    
    <div className="d-flex">
      {foods.map((food) => (
        <FoodBox {...food}/>))
      }
    </div>
  )
}

export default Nutricion;