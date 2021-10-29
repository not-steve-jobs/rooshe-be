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

HomeCook.belongsTo(User,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

HomeCook.hasMany(UserFollowers,{
    foreignKey: {
        name: 'homecook_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

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

Recipe.hasMany(RecipeComments,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Recipe.hasMany(RecipeLikes,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Recipe.hasMany(RecipeReviews,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Recipe.hasMany(SavedRecipe,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Recipe.hasMany(UserBasket,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Recipe.hasMany(UserHashtags,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Recipe.hasMany(UserRecipeCategories,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

RecipeCategories.hasMany(UserRecipeCategories,{
    foreignKey: {
        name: 'recipe_category_id',
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

RecipeComments.belongsTo(Recipe,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

RecipeHashtags.hasMany(UserHashtags,{
    foreignKey: {
        name: 'user_hashtag_id',
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

RecipeLikes.belongsTo(Recipe,{
    foreignKey: {
        name: 'recipe_id',
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

RecipeReviews.belongsTo(Recipe,{
    foreignKey: {
        name: 'recipe_id',
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

SavedRecipe.belongsTo(Recipe,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasOne(HomeCook,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasMany(RecipeComments,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasMany(RecipeLikes,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasMany(RecipeReviews,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasMany(SavedRecipe,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasMany(UserBasket,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasMany(UserFollowers,{
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

UserBasket.belongsTo(Recipe,{
    foreignKey: {
        name: 'recipe_id',
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

UserFollowers.belongsTo(HomeCook,{
    foreignKey: {
        name: 'homecook_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

UserHashtags.belongsTo(Recipe,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

UserHashtags.belongsTo(RecipeHashtags,{
    foreignKey: {
        name: 'user_hashtag_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

UserRecipeCategories.belongsTo(Recipe,{
    foreignKey: {
        name: 'recipe_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

UserRecipeCategories.belongsTo(RecipeCategories,{
    foreignKey: {
        name: 'recipe_category_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

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