package konra;

import konra.model.User;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DAO {

    SessionFactory factory;

    @Autowired
    public DAO(SessionFactory factory){
        this.factory = factory;
    }

    public User getUserByUsername(String username) {
        Query q = factory.getCurrentSession().createQuery("from User where username =:username");
        q.setParameter("username", username);
        return (User) q.getSingleResult();
    }
}
