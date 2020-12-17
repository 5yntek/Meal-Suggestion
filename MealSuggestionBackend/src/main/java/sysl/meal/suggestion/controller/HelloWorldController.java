package sysl.meal.suggestion.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class HelloWorldController {

    private static final String helloWorldMessage = "Hello World. This message comes from the backend service.";

    @GetMapping("/hello")
    public String requestHelloWorld() {
        return helloWorldMessage;
    }

}
