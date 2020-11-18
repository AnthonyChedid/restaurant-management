package com.anthonychedid.project.controller;

import java.util.List;


import com.anthonychedid.project.model.Visited;
import com.anthonychedid.project.repository.VisitedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
