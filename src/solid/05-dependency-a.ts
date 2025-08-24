import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, ApiPostProvider } from './05-dependency-c';


// Main
(async () => {

    /* En este caso, los proveedores son intercambiables sin modificar el código de dominio */
    // const provider = new JsonDatabaseService();
    // const provider = new LocalDataBaseService();
    const provider = new ApiPostProvider();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();