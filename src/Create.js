function handleCreate(name){
    console.log('Name: ' + name)
    fetch(`http://localhost:9292/category/${name}`,{
        method: "POST",
    }).then((r)=>r.json())
}

export default handleCreate;