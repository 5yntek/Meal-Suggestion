package sysl.meal.suggestion.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sysl.meal.suggestion.db.Ingredient;
import sysl.meal.suggestion.db.Recipe;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {
}
