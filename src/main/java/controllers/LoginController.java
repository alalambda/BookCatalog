package controllers;

/**
 * Created by anna.timoskina on 1/21/2016.
 */
import model.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class LoginController {

    @RequestMapping(value="/displayLoginPage",method=RequestMethod.GET)
    public String displayLoginPage(Model model){
        User user = new User();
        model.addAttribute("user", user);
        return "/login";
    }

    @RequestMapping(value="/doLogin",method=RequestMethod.POST)
    public String doLogin(@ModelAttribute User user,Model model){

        String userName=user.getUserName();
        String password = user.getPassword();
        if("kb".equals(userName) && "1234".equals(password)){
            model.addAttribute("user", user);
            return "/home";
        }
        return "/login";

    }

}