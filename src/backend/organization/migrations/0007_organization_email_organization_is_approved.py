# Generated by Django 5.1.2 on 2024-12-02 02:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0006_alter_academicclasses_options_academicclasses_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='organization',
            name='email',
            field=models.EmailField(default=1, max_length=254, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='organization',
            name='is_approved',
            field=models.BooleanField(default=False),
        ),
    ]