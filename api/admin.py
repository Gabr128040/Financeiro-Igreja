from django.contrib import admin
from .models import Dizimo, Oferta, Gasto, Conta, Contribuicao

admin.site.register(Dizimo)
admin.site.register(Oferta)
admin.site.register(Gasto)
admin.site.register(Conta)
admin.site.register(Contribuicao)
