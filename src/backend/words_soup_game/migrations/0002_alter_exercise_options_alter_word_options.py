# Generated by Django 5.1.2 on 2024-10-22 05:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("words_soup_game", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="exercise",
            options={
                "ordering": ["-id"],
                "verbose_name": "Exercise",
                "verbose_name_plural": "Exercises",
            },
        ),
        migrations.AlterModelOptions(
            name="word",
            options={
                "ordering": ["-id"],
                "verbose_name": "Word",
                "verbose_name_plural": "Words",
            },
        ),
    ]
