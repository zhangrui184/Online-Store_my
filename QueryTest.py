import urllib.request

response = urllib.request.urlopen("http://127.0.0.1:8000/categories/").read().decode('utf-8')
print(response)
