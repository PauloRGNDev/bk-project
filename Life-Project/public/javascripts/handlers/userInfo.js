export async function signupClick(){
    try{
        console.log("clicked signup area");
        window.location.href = '/auth/signup';
    } catch(error){
        console.error("erro ao enviar mensagem: ", error);
    }
}