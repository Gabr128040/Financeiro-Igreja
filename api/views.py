from rest_framework import viewsets
from .models import Dizimo, Oferta, Gasto, Conta, Contribuicao
from .serializers import (
    DizimoSerializer,
    OfertaSerializer,
    GastoSerializer,
    ContaSerializer,
    ContribuicaoSerializer
)

class DizimoViewSet(viewsets.ModelViewSet):
    queryset = Dizimo.objects.all()
    serializer_class = DizimoSerializer

class OfertaViewSet(viewsets.ModelViewSet):
    queryset = Oferta.objects.all()
    serializer_class = OfertaSerializer

class GastoViewSet(viewsets.ModelViewSet):
    queryset = Gasto.objects.all()
    serializer_class = GastoSerializer

class ContaViewSet(viewsets.ModelViewSet):
    queryset = Conta.objects.all()
    serializer_class = ContaSerializer

class ContribuicaoViewSet(viewsets.ModelViewSet):
    queryset = Contribuicao.objects.all()
    serializer_class = ContribuicaoSerializer
