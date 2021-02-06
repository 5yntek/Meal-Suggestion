package sysl.meal.suggestion.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sysl.meal.suggestion.db.Ingredient;
import sysl.meal.suggestion.db.repository.IngredientRepository;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
public class IngredientController {

    @Autowired
    private IngredientRepository ingredientRepository;

    @PostMapping("/ingredients")
    public List<Ingredient> requestHelloWorld() {
        return ingredientRepository.findAll();
    }

}
