# Generated by Django 4.2.6 on 2023-11-24 18:50

import authentication.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='usermodel',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=authentication.models.upload_image_profile),
        ),
    ]
