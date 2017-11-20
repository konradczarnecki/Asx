package konra;

import konra.model.LoginResponse;
import konra.model.User;
import konra.model.UserLogin;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserController {

    private static final Logger log = Logger.getLogger(UserController.class);

    UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public LoginResponse login(@RequestBody UserLogin loggedUser, HttpServletRequest request){

        String username = loggedUser.getUsername();
        String password = loggedUser.getPassword();

        User user = service.getUserByUsername(username);
        if(!user.getPassword().equals(password)) return new LoginResponse("failed");

        request.getSession().setAttribute("user", user);

        LoginResponse rsp = new LoginResponse("success");
        rsp.setUser(user);
        rsp.setToken(service.getToken(user));
        return rsp;
    }
}
