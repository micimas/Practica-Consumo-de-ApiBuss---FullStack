package com.buses.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.Getter;
import lombok.Setter;

@RestController

public class AuthController {

    @PostMapping("/auth/login")
    public String login(@RequestBody Credentials credentials) {
        if ("user".equals(credentials.getUsername()) && "password".equals(credentials.getPassword())) {
            return "success";
        } else {
            return "fail";  
        }
    }

    @Getter
    @Setter
    public static class Credentials {
        private String username;
        private String password;
    }

}
