import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
import PostsTable from "@/components/posts/PostTable"

const PostsPage = () => {
    return ( <>
    <BackButton text='Go Back' link='/'/>
    <PostsTable/>
    <PostsPagination/>
    
    </> );
}
 
export default PostsPage;