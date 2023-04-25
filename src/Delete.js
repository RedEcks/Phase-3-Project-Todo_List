function handleDelete(category){
    fetch(`http://localhost:9292/category/${category.id}`,{
        method: "DELETE",
    }).then((r)=>r.json())
}

export default handleDelete;