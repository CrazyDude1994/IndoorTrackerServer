# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-12-01 21:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='name',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='clientposition',
            name='name',
            field=models.CharField(max_length=50),
        ),
    ]
