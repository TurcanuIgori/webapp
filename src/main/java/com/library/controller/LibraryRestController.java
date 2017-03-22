package com.library.controller;

import com.library.entity.Genre;
import com.library.service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

/**
 * Created by igori on 3/22/17.
 */
@RestController
public class LibraryRestController {

    @Autowired
    private LibraryService libraryService;

    @RequestMapping(value={"/genres"}, method = RequestMethod.GET)
    @ResponseBody
    public List<Genre> getGenres(){
        return libraryService.getAllGenre();
    }
}
