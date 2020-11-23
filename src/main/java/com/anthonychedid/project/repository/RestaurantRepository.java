package com.anthonychedid.project.repository;

import com.anthonychedid.project.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant,Long> {

    List<Restaurant> findByRestaurantTypeIgnoreCase (String type);
    List<Restaurant> findByRestaurantNameIgnoreCaseAndRestaurantTypeIgnoreCase (String name, String type);
    List<Restaurant> findByRestaurantNameIgnoreCase (String name);
}
