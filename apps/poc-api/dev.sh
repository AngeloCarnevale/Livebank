python -m venv venv
venv/Scripts/activate
python.exe -m pip install --upgrade pip
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver