package konra;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MController {

    @ResponseBody
    @RequestMapping("/test")
    public String test(){

        return "dupa";
    }
}
