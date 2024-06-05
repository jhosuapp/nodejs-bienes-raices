import { emailMasive } from "../helpers/Emails.js";
import { SendEmailsUsers  } from '../models/index.js';

const SendEmails = async ()=>{
    //get data
    const users = await SendEmailsUsers.findAll();
    //Get first index with status false
    const firstUserWithFalseStatus = users.findIndex(user => user.status === false);
    let counter = firstUserWithFalseStatus;
    const interval = setInterval(async () => {
        if (users[counter]){
            if (users[counter].status === false) {
                // Send email
                try{
                    //Update status user
                    users[counter].status = true;
                    //Send email
                    await emailMasive({
                        name: users[counter] ? users[counter].name ? users[counter].name : '' : '',
                        document_type: users[counter].document_type ? users[counter].document_type ? users[counter].document_type : '' : '',
                        document_number: users[counter].document_number ? users[counter].document_number ? users[counter].document_number : '' : '',
                        message: users[counter].message ? users[counter].message ? users[counter].message : '' : '',
                        email: users[counter].email ? users[counter].email ? users[counter].email : '' : '',
                    }).catch((error)=>{
                        if(error){
                            console.log('error en el envion del email',error);
                            users[counter].status = false;
                            clearInterval(interval);
                            // counter--;
                        }
                    });
                    //Save status in database
                    await users[counter].save();
                    //Show status
                    console.log('enviado', users[counter].name);
                    counter++;
                    console.log(counter);
                }catch(err){
                    console.log('error en la obtencion de datos', err);
                    clearInterval(interval);
                }
            }else{
                console.log('se para el intervalo porque llegamos al final')
                clearInterval(interval);
            }
        }
    }, 10000);
}

SendEmails();