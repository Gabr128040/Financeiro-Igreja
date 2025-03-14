from rest_framework import serializers
from .models import Dizimo, Oferta, Gasto, Conta, Contribuicao

class DizimoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dizimo
        fields = '__all__'

class OfertaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Oferta
        fields = '__all__'

class GastoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gasto
        fields = '__all__'

class ContaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = '__all__'

class ContribuicaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contribuicao
        fields = '__all__'
