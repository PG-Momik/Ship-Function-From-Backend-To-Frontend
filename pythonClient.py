import requests

url = 'http://localhost:3000/getFunction?language=python'

response = requests.get(url)
data = response.json()

function_name = data['functionName']
function_definition = data['functionDefinition']

exec(function_definition)

result = add_numbers(2, 4)
print(result)
