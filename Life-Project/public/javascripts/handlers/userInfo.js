export async function signupClick(){
    try{
        console.log("clicked signup area");
        const response = await fetch('/auth/signup');
    } catch(error){
        console.error("erro ao enviar mensagem: ", error);
    }
}