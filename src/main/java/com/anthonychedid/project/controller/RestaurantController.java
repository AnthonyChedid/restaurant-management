package com.anthonychedid.project.controller;

import java.util.List;

import com.anthonychedid.project.model.Restaurant;
import com.anthonychedid.project.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepository;

    //get all restaurants

    @GetMapping("/restaurants")
    public List<Restaurant> getAllRestaurants(){
        return restaurantRepository.findAll();
    }
}
