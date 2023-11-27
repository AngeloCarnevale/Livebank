python -m venv venv
venv/Scripts/activate
python.exe pip install --upgrade pip
pip install -r requirements.tx
python manage.py makemigrations
python manage.py migrate
python manage.py runserver