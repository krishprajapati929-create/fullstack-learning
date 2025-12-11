
export async function fetchProductById(id){
    const res = await fetch(`http://localhost:3001/products/${id}`);
    if(!res.ok){
        throw new Error("Failed to fetch data")
    }
    return res.json()
}