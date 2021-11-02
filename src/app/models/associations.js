import User from "./user";
import Recipe from "./recipe";
import HomeCook from "./homeCook";
import UserBasket from "./userBasket";
import RecipeLikes from "./recipeLikes";
import SavedRecipe  from "./savedRecipe";
import UserHashtags from "./userHashtags";
import RecipeReviews from "./recipeReviews";
import UserFollowers  from "./userFollowers";
import RecipeComments from "./recipeComments";
import RecipeHashtags  from "./recipeHashtags";
import RecipeCategories from "./recipeCategories";
import UserRecipeCategories from "./userRecipeCategories";

// User to HomeCook
User.hasOne(HomeCook,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
HomeCook.belongsTo(User,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// User to RecipeComments
User.hasMany(RecipeComments,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
RecipeComments.belongsTo(User,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// User to RecipeLikes
User.hasMany(RecipeLikes,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
RecipeLikes.belongsTo(User,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// User to RecipeReviews
User.hasMany(RecipeReviews,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
RecipeReviews.belongsTo(User,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// User to SavedRecipe
User.hasMany(SavedRecipe,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
SavedRecipe.belongsTo(User,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// User to UserBasket
User.hasMany(UserBasket,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
UserBasket.belongsTo(User,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// User to UserFollowers
User.hasMany(UserFollowers,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
UserFollowers.belongsTo(User,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// HomeCook to UserFollowers
HomeCook.hasMany(UserFollowers,{
    foreignKey: {
        name: 'homecook_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
UserFollowers.belongsTo(HomeCook,{
    foreignKey: {
        name: 'homecook_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// HomeCook to Recipe
HomeCook.hasMany(Recipe,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
Recipe.belongsTo(HomeCook, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// Recipe to RecipeComments
Recipe.hasMany(RecipeComments,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
RecipeComments.belongsTo(Recipe,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// Recipe to RecipeLikes
Recipe.hasMany(RecipeLikes,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
RecipeLikes.belongsTo(Recipe,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// Recipe to RecipeReviews
Recipe.hasMany(RecipeReviews,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
RecipeReviews.belongsTo(Recipe,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// Recipe to SavedRecipe
Recipe.hasMany(SavedRecipe,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
SavedRecipe.belongsTo(Recipe,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// Recipe to UserBasket
Recipe.hasMany(UserBasket,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
UserBasket.belongsTo(Recipe,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// Recipe to RecipeHashtags
Recipe.belongsToMany(RecipeHashtags, { through: UserHashtags });
RecipeHashtags.belongsToMany(Recipe, { through: UserHashtags });

// Recipe to RecipeCategories
Recipe.belongsToMany(RecipeCategories, { through: UserRecipeCategories });
RecipeCategories.belongsToMany(Recipe, { through: UserRecipeCategories });

module.exports = {
    User,
    Recipe,
    HomeCook,
    UserBasket,
    RecipeLikes,
    SavedRecipe,
    UserHashtags,
    RecipeReviews,
    UserFollowers,
    RecipeComments,
    RecipeHashtags,
    RecipeCategories,
    UserRecipeCategories
}
