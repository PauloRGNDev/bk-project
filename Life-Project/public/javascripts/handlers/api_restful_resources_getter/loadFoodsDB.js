async function load(){
    try{
        const response = await fetch('/api-restful/foods');
        const data = await response.json();
        return data;
    } catch(error){
        console.error('Erro na requisição', error);
    }
}