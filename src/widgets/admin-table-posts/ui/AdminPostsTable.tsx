import { useFetchPosts } from "@/entities/posts/model/usePosts";
import { AdminPostsTableItem } from "@/shared/ui/AdminPostsTableItem";
import style from './AdminPostsTable.module.scss'

export const AdminPostsTable = () => {
  const { data: posts = [] } = useFetchPosts();

  return (
    <div className={style.postsTable}>
      {posts.map((post) => (
        <AdminPostsTableItem
          key={post.id}
          id={post.id}
          content={post.content}
          date={post.date}
          username={post.username}
          userPictureSrc={post.userPictureSrc}
          imageContentSrc={post.imageContentSrc}
        />
      ))}
    </div>
  );
};
