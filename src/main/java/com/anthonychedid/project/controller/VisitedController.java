package com.anthonychedid.project.controller;

import java.util.List;


import com.anthonychedid.project.model.Visited;
import com.anthonychedid.project.repository.VisitedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/")
public class VisitedController {

    @Autowired
    private VisitedRepository visitedRepository;

    //get all visited restaurants

    @GetMapping("/visited")
    public List<Visited> getAllVisited(){
        return visitedRepository.findAll();
    }


    // add visited employee rest api
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/visit")
    public Visited createVisit (@RequestBody Visited visit){

        return visitedRepository.save(visit);
    }




}
