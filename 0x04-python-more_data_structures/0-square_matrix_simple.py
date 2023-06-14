#!/usr/bin/python3
def square_matrix_simple(matrix=[]):

    result = []
    for row in matrix:
        square_row = [num ** 2 for num in row]
        result.append(square_row)
    return result
