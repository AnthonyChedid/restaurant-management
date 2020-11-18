package com.anthonychedid.project.model;


import javax.persistence.*;


@Entity
@Table(name="Restaurant")
public class Restaurant {

    @Id
    @Column(name = "id_restaurant")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String restaurantName;
    private String restaurantType;
    private Long cost;
    private String address;
    private String phone;

    private String image;

    public Restaurant() {
    }

    public Restaurant(Long id, String restaurantName, String restaurantType,
                      Long cost, String address, String phone, String image) {
        this.id = id;
        this.restaurantName = restaurantName;
        this.restaurantType = restaurantType;
        this.cost = cost;
        this.address = address;
        this.phone = phone;
        this.image = image;

    }

    public Long getId() {
        return id;
    }


    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getRestaurantType() {
        return restaurantType;
    }

    public void setRestaurantType(String restaurantType) {
        this.restaurantType = restaurantType;
    }

    public long getCost() {
        return cost;
    }

    public void setCost(long cost) {
        this.cost = cost;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
