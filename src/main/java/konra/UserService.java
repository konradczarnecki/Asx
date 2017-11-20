package konra;

import konra.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {

    DAO dao;

    @Autowired
    public UserService(DAO dao) {
        this.dao = dao;
    }

    @Transactional
    public User getUserByUsername(String username){
        return dao.getUserByUsername(username);
    }

    public String getToken(User user) {

        return "stub";
    }
}
