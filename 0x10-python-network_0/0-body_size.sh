#!/bin/bash
# This script sends a request to get the wc of the HTTP response
curl -s "$1" | wc -c
