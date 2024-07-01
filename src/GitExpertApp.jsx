import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GitExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    const valUniqueCategori = categories.find((cat) => cat.toUpperCase() == newCategory.toUpperCase())

    if (valUniqueCategori !== undefined) return;

    setCategories([newCategory, ...categories]);
  }


  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />

      {categories.map(category => (<GifGrid key={category} category={category} />)
      )}
    </>
  )
}

export default GitExpertApp
