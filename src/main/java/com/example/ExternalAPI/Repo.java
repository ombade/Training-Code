package com.example.ExternalAPI;

import com.example.ExternalAPI.DTO.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;


@FeignClient(name = "UserList", url = "https://jsonplaceholder.typicode.com/")
public interface Repo {
    @GetMapping("/users")
    List<UserDTO> getUsers();
}
