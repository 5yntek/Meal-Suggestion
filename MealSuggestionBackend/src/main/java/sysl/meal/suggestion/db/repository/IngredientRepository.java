package sysl.meal.suggestion.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sysl.meal.suggestion.db.Ingredient;

public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {
}
