import requests: requests
response!: requests.Response

# Importing requests library
import requests: requests
response!: requests.Response

# Trying to send a POST request to a URL that only accepts GET requests
response = requests.post('https://aurecx.github.io/MedicDePoche/envoyer_email.php')
# Printing the status code of the response
print(response.status_code)