# Generated by Django 4.1.3 on 2022-11-15 03:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("marble", "0002_delete_yeniresim"),
    ]

    operations = [
        migrations.AlterField(
            model_name="resimler",
            name="image",
            field=models.ImageField(upload_to="marble"),
        ),
    ]