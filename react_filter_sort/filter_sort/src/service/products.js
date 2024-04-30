export async function getAllProducts(){
    const res=await fetch("https://fakestoreapi.com/products")
    const data=res.json()
    return data
}