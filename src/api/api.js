export const baseUrl = 'https://dummyjson.com/products'

export const getProduct = async ({dispatch, type="def", value="def"}) =>{
    try {
      let res; 
      if (type === "def") {
        res = await fetch(baseUrl)
      }
      else if (type === "search") {
        res = await fetch(baseUrl + `/search?q=${value}`)
      }
      else if(type === "filter"){
        res = await fetch(baseUrl + `/category/${value}`)
      }
      const {products} = await res.json()
      dispatch({type: "ALL_PRODUCTS", payload: products})
    } catch (error) {
      console.log(error);
    }
  }


export  const getCategoryList = async ({setCategories}) =>{
    try {
      const res = await fetch(baseUrl+"/categories")
      const ans = await res.json()
      setCategories([{slug: "all", name: "all"}, ...ans])
      
    } catch (error) {
      console.log(error);
    }
  }