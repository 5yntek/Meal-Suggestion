package sysl.meal.suggestion.db;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Table(name = "uses")
public class Uses {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Getter
    @Column(name = "recipe_id")
    private int recipeId;

    @Getter
    @OneToOne
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @Getter
    private int amount;

    @Getter
    private String unit;

}
