package com.example.ExternalAPI;

import com.example.ExternalAPI.DTO.UserDTO;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("Users")
public class Controller {
    UserService service;
    @GetMapping
    public List<UserDTO> getuser()
    {
        return service.getUsers();
    }
}
