# Generated by Django 5.1.2 on 2024-10-23 00:36

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("organization", "0002_alter_membership_role_membership_is_active_and_more"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="membership",
            options={"ordering": ["-id"]},
        ),
        migrations.AlterModelOptions(
            name="organization",
            options={"ordering": ["-id"]},
        ),
        migrations.AddField(
            model_name="organization",
            name="created_at",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="organization",
            name="deleted_at",
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="organization",
            name="updated_at",
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name="membership",
            name="role",
            field=models.CharField(
                choices=[
                    ("admin", "Admin"),
                    ("teacher", "Teacher"),
                    ("student", "Student"),
                ],
                max_length=16,
            ),
        ),
    ]
