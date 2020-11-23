package com.anthonychedid.project.controller;

import java.util.List;

import com.anthonychedid.project.model.Restaurant;
import com.anthonychedid.project.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins ="http://localhost:3000")
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
    @GetMapping("/restaurants-by-name")
    public List<Restaurant> getRestaurantsByName(@RequestParam String name){

        return restaurantRepository.findByRestaurantNameIgnoreCase(name);
    }

    @GetMapping("/restaurants-by-type")
    public List<Restaurant> getRestaurantsByType(@RequestParam String type){
        //String regex = "\\B"+type+"|"+type+"\\B";
        return restaurantRepository.findByRestaurantTypeIgnoreCase(type);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/restaurants-by-type_name")
    public List<Restaurant> getRestaurantsByTypeName(@RequestParam String name,@RequestParam String type){

        return restaurantRepository.findByRestaurantNameIgnoreCaseAndRestaurantTypeIgnoreCase(name,type);
    }

}
