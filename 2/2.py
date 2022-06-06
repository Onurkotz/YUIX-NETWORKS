def quicksort(array):
    if len(array) <= 1:
        return array

    pivot = array[0]

    left = []
    right = []

    for i in range(1, len(array)):

        if array[i] < pivot:
            left.append(array[i])
        else:
            right.append(array[i])

    return left, pivot, right


unsorted = [5, 16, -50, 48, 2, 78]
sorted = quicksort(unsorted)
word = "Quicksort: "

print(word, sorted)
