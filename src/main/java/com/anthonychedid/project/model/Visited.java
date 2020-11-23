package com.anthonychedid.project.model;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name="visited")
public class Visited {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String restaurant;

    private String date;

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(String restaurant) {
        this.restaurant = restaurant;
    }

    public UUID getId() {
        return id;
    }
}
