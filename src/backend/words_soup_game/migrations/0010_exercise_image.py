# Generated by Django 5.1.2 on 2024-12-04 02:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('words_soup_game', '0009_exercise_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='exercise',
            name='image',
            field=models.ImageField(default=1, upload_to='exercises'),
            preserve_default=False,
        ),
    ]
