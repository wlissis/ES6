import { rejects } from "assert";
import { resolve } from "url";
import axios from 'axios';

class Api {
    static async getUserInfor(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`); //metodo get vai retornar meu githube
        
            console.log(response);
        } catch (error) {
        
        console.warn('Erro na API')

        }
    }            
}

Api.getUserInfor('wlissis');