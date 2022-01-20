const obtenerData = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/photos'
    const response = await fetch(url)
    const json = await response.json()
    const variable = json.forEach(element => {
        if(element.id<21){
            console.log(element.title);
        }
    });
    return variable
    } catch (error) {
        console.log(error);
    }
}

const tresSegundos = () => {
    return new Promise((resolve) => setTimeout(() => {
        resolve('Informacion Enviada')
    }, 3000));
}
tresSegundos()

const funcionAsincrona = async() => {
    const info = await tresSegundos()
    console.log(await info);
    obtenerData()
}
funcionAsincrona()