 for i in range(1, 6):
    print(i**2)
 
j = 1
while j <= 3:
    print(j**3)
    j += 1
 
favorite_books = ["1984", "To Kill a Mockingbird", "The Great Gatsby"]
for book in favorite_books:
    print(book) 
sum_of_numbers = 0
while True:
    number = int(input("Please enter a number (0 to stop): "))
    if number == 0:
        break
    sum_of_numbers += number
 
print("The sum of all entered numbers is:", sum_of_numbers)
