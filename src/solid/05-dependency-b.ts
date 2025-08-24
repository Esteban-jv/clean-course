import { LocalDataBaseService, JsonDatabaseService } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: JsonDatabaseService) {}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        // const jsonDb = new JsonDatabaseService();
        // this.posts = await jsonDb.getPosts() //jsonDB.getFakePosts();

        // return this.posts;
        this.posts = await this.postProvider.getPosts();
        return this.posts;
    }
}
