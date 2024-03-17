favorite_movies = ["malleswari", "oye", "Mr.perfect"]
 
favorite_movies.append("Arya2")
 
release_years = (2004,2009, 2011, 2009)
 
print(f"The third movie in the list is {favorite_movies[2]} and it was released in {release_years[2]}.")
 
movie_to_check = "The Godfather"
if movie_to_check in favorite_movies:
    print(f"{movie_to_check} is in the list.")
else:
    print(f"{movie_to_check} is not in the list.")
 
friends_movies = ["sakhi", "Go Ahead", "Darling"]
combined_list = favorite_movies + friends_movies
 
print("The combined list of movies is:", combined_list) 
