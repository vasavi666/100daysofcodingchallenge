 def calculate_area(length, width):
    return length * width
 
rectangle_area = calculate_area(8, 5)
print(f"The area of the rectangle is {rectangle_area} square units.")
 
person = {
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}
def print_person_info(person):
    print(f"Name: {person['name']}")
    print(f"Age: {person['age']}")
    print(f"City: {person['city']}")
print_person_info(person)
