#!/usr/bin/env python3

def no_c(my_string):
    val1 = 'c'
    val2 = 'C'

    new_str = ''

    for char in my_string:
        if char != val1 and char != val2:
            new_str += char
    return (new_str)
