import csv
import json
import sys


sys.stdout.write("Enter the path of the file to parse:")
input_file_path = input()
sys.stdout.write("Enter the output path:")
output_file_path = input()

csvDict = {}

with open ( input_file_path ) as csvfile:
  reader = csv.DictReader( csvfile, fieldnames=["Country", "Parties"] )
  for row in reader:
    country_name = row["Country"].strip()
    country_parties = row["Parties"].strip()
    if ( country_parties == "" ):
      country_parties = None
    else:
      country_parties = list( map( lambda party: party.strip(), country_parties.split(",") ) )
      country_parties.append( "Other/Independent" )
    if ( country_name != "" ):
      csvDict[ country_name ] = country_parties

with open ( output_file_path, "w") as jsonfile:
  json.dump( csvDict, jsonfile )

print("Output json file written to {}.".format(output_file_path))