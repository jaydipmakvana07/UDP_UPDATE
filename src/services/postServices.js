import axios from 'axios';

class Post{
    create(formData){
        const url = "http://localhost:8080/postAdd";
        const config = {
            headers:{
                'content-Type': 'multipart/form-data',
            }   
        }
        return axios.post(url,formData,config);
    }

    getPosts(){
        const url = "http://localhost:8080/postshow";
        return  axios.get(url);
    }
}

export default new Post();