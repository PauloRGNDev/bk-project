export async function signupClick(){
    try{
        const response = await fetch('/auth/signup');
    } catch(error){
        console.error("erro ao enviar mensagem: ", error);
    }
}