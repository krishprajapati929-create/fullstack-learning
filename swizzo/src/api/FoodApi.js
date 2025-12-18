export async function fetchProductById(id){
    const res = await fetch(`http://localhost:3000/products/${id}`)
    if(!res.ok){
        throw new error("failed to fached data")
    }
    return res.json()
}