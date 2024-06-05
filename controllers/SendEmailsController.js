import { emailMasive } from "../helpers/Emails.js";
import { SendEmailsUsers  } from '../models/index.js';

const SendEmails = async (req, res, next)=>{
    //get data
    const users = await SendEmailsUsers.findAll();
    const firstUserWithFalseStatus = users.findIndex(user => user.status === false);
    let counter = firstUserWithFalseStatus;
    setInterval(async () => {
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
                            console.log(error);
                            users[counter].status = false;
                            return next();
                            // counter--;
                        }
                    });
                    //Save status
                    await users[counter].save();
                    //Show status
                    console.log('enviado', users[counter].name);
                    counter++;
                    console.log(counter);
                }catch(err){
                    console.log(err);
                }
            }
        }
    }, 10000);
    //For data
    res.json({ message: 'Enviando correos...' });
}

export { SendEmails }