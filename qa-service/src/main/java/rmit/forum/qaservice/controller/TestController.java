package rmit.forum.qaservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping(value="/")
    public String hello(){
        return "Hello World!!";
    }
}
