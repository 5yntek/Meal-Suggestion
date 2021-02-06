package sysl.meal.suggestion.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sysl.meal.suggestion.db.Ingredient;
import sysl.meal.suggestion.db.Recipe;
import sysl.meal.suggestion.db.Uses;
import sysl.meal.suggestion.db.repository.IngredientRepository;
import sysl.meal.suggestion.db.repository.RecipeRepository;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping("/recipes")
    public List<Recipe> requestAllRecipes() {
        return recipeRepository.findAll();
    }

    /**
     * Expects list of ingredient id's
     * @param ingredients
     * @return
     */
    @PostMapping("/recipes")
    public List<Recipe> requestRecipesContainingIngredients(@RequestBody List<Integer> ingredients) {
        List<Recipe> recipes = recipeRepository.findAll();
        return recipes.stream().filter(r -> {
            List<Integer> contained = r.getIngredients().stream().map(Ingredient::getId).collect(Collectors.toList());
            boolean containsAll = true;
            for(int i : ingredients) {
                if(!contained.contains(i)) {
                    containsAll = false;
                    break;
                }
            }
            return containsAll;
        }).collect(Collectors.toList());
    }

}
