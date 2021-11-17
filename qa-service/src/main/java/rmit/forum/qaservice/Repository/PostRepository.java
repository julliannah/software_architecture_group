package rmit.forum.qaservice.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import rmit.forum.qaservice.Model.Post;

import java.util.List;

public interface PostRepository extends PagingAndSortingRepository<Post, Long> {

    List<Post> findByTitle(String title);

    @Query(value = "SELECT * FROM post p WHERE p.Title = ?1",
            nativeQuery = true)
    List<Post> findPostByTitle(String title);
}
