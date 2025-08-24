import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {

    const provider = new JsonDatabaseService();
    // const provider = new LocalDataBaseService();
    // No funciona el cambio porque falta el principio de inversión de dependencias
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();