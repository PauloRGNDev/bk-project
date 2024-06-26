async function load(){
    try{
        const response = await fetch('/apirestful/foods');
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error('Erro na requisição', error);
    }
}

load();