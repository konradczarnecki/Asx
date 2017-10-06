package konra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class GameController {

    UserService userService;

    @Autowired
    public GameController(UserService userService) {
        this.userService = userService;
    }

    @ResponseBody
    @RequestMapping("/test")
    public User getConfig(){

        User u = userService.getUserByUsername("konra");
        return u;
    }
}
