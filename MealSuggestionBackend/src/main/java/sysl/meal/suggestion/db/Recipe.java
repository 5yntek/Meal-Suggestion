package sysl.meal.suggestion.db;

import lombok.Getter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Table(name = "recipe")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    private int id;

    @Getter
    private String name;

    @Getter
    private String picture;

    @Getter
    private String description;

    @Getter
    private int difficulty;

    @Getter
    private int preparationTime;

    @Getter
    private int quantity;

    @Getter
    @OneToMany
    @JoinColumn(name = "recipe_id") // we need to duplicate the physical information
    private List<Uses> ingredientUsages;

    public List<Ingredient> getIngredients() {
        return ingredientUsages.stream().map(u -> u.getIngredient()).collect(Collectors.toList());
    }

}
