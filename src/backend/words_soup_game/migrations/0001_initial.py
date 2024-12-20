# Generated by Django 5.1.2 on 2024-10-22 03:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Word",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("deleted_at", models.DateTimeField(blank=True, null=True)),
                ("name", models.CharField(max_length=50)),
            ],
            options={
                "verbose_name": "Word",
                "verbose_name_plural": "Words",
            },
        ),
        migrations.CreateModel(
            name="Exercise",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("deleted_at", models.DateTimeField(blank=True, null=True)),
                ("is_public", models.BooleanField(default=False)),
                (
                    "correct_word",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="correct_word",
                        to="words_soup_game.word",
                    ),
                ),
                (
                    "words",
                    models.ManyToManyField(
                        related_name="words", to="words_soup_game.word"
                    ),
                ),
            ],
            options={
                "verbose_name": "Exercise",
                "verbose_name_plural": "Exercises",
            },
        ),
    ]
