#!/usr/bin/python3

"""Defines read file module"""

def read_file(filename=""):
    
    """The function reads a txt file (UTF8) 
    and prints it result to stdout """

    with open(filename, mode='r', encoding='utf-8') as f:
        print(f.read(), end='')
