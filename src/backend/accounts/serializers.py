from rest_framework import serializers
from django.contrib.auth.models import User

all = ["BaseUserSerializer, UserSerializer"]

class BaseUSerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]
        extra_kwargs = {'password': {'write_only': True}}

class UserSerializer(BaseUSerSerializer):
    class Meta(BaseUSerSerializer.Meta):
        fields = BaseUSerSerializer.Meta.fields + ['id', 'email']


    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = User(**validated_data)

        if password:
            user.set_password(password)

        user.save()
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance
    
class UserDisplaySerializer(BaseUSerSerializer):
    class Meta(BaseUSerSerializer.Meta):
        fields = ['id', 'first_name', 'last_name', 'email']
