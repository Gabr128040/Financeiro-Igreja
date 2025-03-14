from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    DizimoViewSet,
    OfertaViewSet,
    GastoViewSet,
    ContaViewSet,
    ContribuicaoViewSet
)

router = DefaultRouter()
router.register(r'dizimos', DizimoViewSet)
router.register(r'ofertas', OfertaViewSet)
router.register(r'gastos', GastoViewSet)
router.register(r'contas', ContaViewSet)
router.register(r'contribuicoes', ContribuicaoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
